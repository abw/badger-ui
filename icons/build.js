#!env node
const Path  = require('path')
const fs    = require('fs')
const yaml  = require('js-yaml')
const chalk = require('chalk')
const cla   = require('command-line-args')
const clu   = require('command-line-usage')

const DefaultConfig  = './icons/config.yaml'
const DefaultLibrary = './src/config/iconLibrary.js'
const DefaultNames   = './src/config/iconNames.js'
const IconSets       = ['regular', 'solid', 'custom', 'alias'];

//-----------------------------------------------------------------------------
// Command line options
//-----------------------------------------------------------------------------
const optionDefinitions = [
  { name: 'verbose', alias: 'v', type: Boolean },
  {
    name: 'config',
    alias: 'c',
    type: String,
    description: 'The path to the input configuration file.',
    defaultValue: DefaultConfig,
  },
  {
    name: 'library',
    alias: 'l',
    description: 'The path to the output file for the icon library.',
    type: String,
    defaultValue: DefaultLibrary,
  },
  {
    name: 'names',
    alias: 'n',
    description: 'The path to the output file for the icon names.',
    type: String,
    defaultValue: DefaultNames,
  },
  {
    name: 'extend',
    alias: 'x',
    description: 'Extend the base badger-ui icons to make a new icon set.',
    type: Boolean,
    defaultValue: false
  },
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    description: 'Print this usage guide.'
  }
]
const optionUsage = [
  {
    header: 'badger-ui-icons',
    content:
      'Add icons to the {green.bold Fontawesome} library for use with the {green.bold Icon} component.'
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  }
]

const options = cla(optionDefinitions)

//-----------------------------------------------------------------------------
// Need help?
//-----------------------------------------------------------------------------
if (options.help) {
  console.log(clu(optionUsage))
  process.exit()
}

//-----------------------------------------------------------------------------
// Validate config file and output directory
//-----------------------------------------------------------------------------
const rootDir    = process.env.PWD;
const buiDir     = Path.resolve(__dirname, '..');
const configFile = Path.resolve(rootDir, options.config)
const libFile    = Path.resolve(rootDir, options.library)
const namesFile  = Path.resolve(rootDir, options.names)
const libDir     = Path.dirname(libFile)
const namesDir   = Path.dirname(namesFile)
const extFile    = Path.resolve(buiDir, DefaultNames)

if (!fs.existsSync(configFile)) {
  console.log(
    chalk.red('Config file does not exist: ') + chalk.yellow(configFile) + "\n" +
    chalk.cyan('Either create the file or use the --config option to specify another file')
  )
  process.exit()
}
if (!fs.existsSync(libDir)) {
  console.log(
    chalk.red('Directory for library file does not exist: ') + chalk.yellow(libDir) + "\n" +
    chalk.cyan('Either create the directory or use the --library option to specify another location')
  )
  process.exit()
}
if (!fs.existsSync(namesDir)) {
  console.log(
    chalk.red('Directory for icon names file does not exist: ') + chalk.yellow(namesDir) + "\n" +
    chalk.cyan('Either create the directory or use the --names option to specify another location')
  )
  process.exit()
}

//-----------------------------------------------------------------------------
// Read the icons/config.yaml file and read names of icons/custom SVG files
//-----------------------------------------------------------------------------
const config    = yaml.load(fs.readFileSync(configFile))
const configDir = Path.dirname(configFile);
const customDir = config.customDir && Path.resolve(configDir, 'custom');
if (customDir && !fs.existsSync(customDir)) {
  console.log(
    chalk.red('Directory for custom icons does not exist: ') + chalk.yellow(customDir)
  )
  process.exit()
}
const custom = customDir ? fs.readdirSync(customDir) : [ ];

//-----------------------------------------------------------------------------
// Verbose configuration summary
//-----------------------------------------------------------------------------
const solid    = config.solid || [ ];
const regular  = config.regular || [ ];
const alias    = config.alias || { };
const nSolid   = solid.length;
const nRegular = regular.length;
const nCustom  = custom.length;
const nAlias   = Object.keys(alias).length;

if (options.verbose) {
  console.log(chalk.green('✓ Loaded fontawesome icon configuration from'), chalk.yellow(configFile));
  console.log(chalk.cyan('  →', nSolid, 'solid icons'));
  console.log(chalk.cyan('  →', nRegular, 'regular icons'));
  console.log(chalk.cyan('  →', nAlias, 'icon aliases'));
  if (config.aliasRegular) {
    console.log(chalk.cyan('  → aliases will be added for regular icons'));
  }
  if (customDir) {
    console.log(chalk.green('✓ Loaded custom icons from'), chalk.yellow(customDir));
    console.log(chalk.cyan('  →', nCustom, 'custom icons'));
  }
}

//-----------------------------------------------------------------------------
// Walk through the lists of solid and regular icons and convert the simple
// icon name into an object containing id, name and faname
//-----------------------------------------------------------------------------
let icons = {
  solid:   convertIconNames('solid', solid),
  regular: convertIconNames('regular', regular),
}

//-----------------------------------------------------------------------------
// Load up the custom SVG files from the icons/custom directory.
//-----------------------------------------------------------------------------
let charCode = 1;
icons.custom = custom.map(
  filename => readSvgFile(filename, charCode++)
);

//-----------------------------------------------------------------------------
// The list of aliases loaded from the "alias" item in icons/config.yaml
// maps a short alias to <style>:<name>, e.g.  basket: solid:shopping-basket
// We must ensure that the icons referenced exist as solid, regular or custom
// icons.
//-----------------------------------------------------------------------------
let ids = { };
icons.solid.forEach( icon => ids[icon.id] = true );
icons.regular.forEach( icon => ids[icon.id] = true );
icons.custom.forEach( icon => ids[icon.id] = true );

icons.alias = Object.entries(alias).map(
  ([alias, iconref]) => {
    const parts = iconref.split(':', 2);
    const icon  = convertIconName(...parts);
    icon.alias  = alias;
    // check that the icon references exists
    if (! ids[icon.id]) {
      console.log(chalk.red('  ✗ Invalid alias: "' + icon.alias + '" references undefined icon "' + iconref + '"'));
      return undefined;
    }
    return icon;
  }
).filter(
  // ignore any invalid entries that returned undefined
  item => item !== undefined
);


//-----------------------------------------------------------------------------
// If the aliasRegular config option is set then create aliases for each of
// the regular icons as long as there isn't already an icon with that name
// either in the solid icons, custom icons or existing aliases.
//-----------------------------------------------------------------------------
if (config.aliasRegular) {
  if (options.verbose) {
    console.log(chalk.green('+ Adding aliases to regular icons'));
  }
  // lookup table by name to ensure that aliases to regular icons don't clash
  let existing = { };
  icons.solid.forEach( icon => existing[icon.name] = ids[icon.id] = 'solid icon' );
  icons.custom.forEach( icon => existing[icon.name] = ids[icon.id] = 'custom icon' );
  icons.alias.forEach( icon => existing[icon.alias] = ids[icon.id] = 'icon alias' );

  // add in any regular icons that have new names
  icons.regular.forEach(
    icon => {
      if (existing[icon.name]) {
        if (options.verbose) {
          console.log(chalk.red('  ✗ Skipping "' + icon.name + '" - existing ' + existing[icon.name] + ' with same name'));
        }
      }
      else {
        if (options.verbose) {
          console.log(chalk.cyan('  ✓ Adding "' + icon.name + '" as an alias to regular icon of the same name'));
        }
        icon.alias = icon.name;
        icons.alias.push(icon);
      }
    }
  );
}

//-----------------------------------------------------------------------------
// If this is being run in a project that has badger-ui as a dependency then
// the --extend flag should be used.  This will load up the icon names from the
// base badger-ui library and merge them in with the new icons.  This is so we
// can generate the "icons" and "iconNames" lists that contain both the new
// icons and the original icons.  Although this isn't necessary to get the
// icons working, it's useful if you want to generate a style guide that shows
// all the icons that are available to use.
//-----------------------------------------------------------------------------
const iconNames = options.extend
  ? mergeOriginalIconNames(extractIconNames(icons))
  : extractIconNames(icons);
const allIconNames = extractAllIconNames(iconNames);


//-----------------------------------------------------------------------------
// Output src/config/iconLibrary.js file (or whatever --library defines)
//-----------------------------------------------------------------------------
const library = generateLibraryFile(icons);
fs.writeFileSync(libFile, library, 'utf8');
if (options.verbose) {
  console.log(chalk.green("✓ Wrote icon library file to"), chalk.yellow(libFile));
}

const names = generateNamesFile(iconNames, allIconNames);
fs.writeFileSync(namesFile, names, 'utf8');
if (options.verbose) {
  console.log(chalk.green("✓ Wrote icon names config file to"), chalk.yellow(namesFile));
}


//=============================================================================
// EXIT
//=============================================================================

//-----------------------------------------------------------------------------
// Function to convert a style (e.g. "solid") and icon name (e.g.
// "shopping-basket") into an object like this:
//    {
//        id     => faShoppingBasketSolid,
//        name   => shopping-basket
//        faname => faShoppingBasket,
//    },
//-----------------------------------------------------------------------------
function convertIconName(style, name) {
  const faname = [
    style === 'custom' ? 'badger' : 'fa',
    ...name.split(/[-_]/).map(name => ucfirst(name))
  ].join('');
  return {
    id:  faname + ucfirst(style),
    name,
    faname
  };
}

//-----------------------------------------------------------------------------
// Function to call convertIconName() for a list of names in a style
//-----------------------------------------------------------------------------
function convertIconNames(style, names) {
  return names.map( name => convertIconName(style, name) )
}

//-----------------------------------------------------------------------------
// Function to capitalise first letter of a string
//-----------------------------------------------------------------------------
function ucfirst(string) {
  return string[0].toUpperCase() + string.substring(1);
}

//-----------------------------------------------------------------------------
// Function to match a regex in a string and return $1 or throw an error
//-----------------------------------------------------------------------------
function matchValue(string, regex, filename, item) {
  const match = string.match(regex);
  if (! match) {
    throw 'Failed to match ' + item + ' in ' + filename;
  }
  return match[1];
}

//-----------------------------------------------------------------------------
// Function to extract the names of icons
//-----------------------------------------------------------------------------
function extractIconNames(icons) {
  let iconNames = { };
  IconSets.forEach(
    set => iconNames[set] = sortedUniqueElements(
      icons[set].map( icon => set === 'alias' ? icon.alias : icon.name )
    )
  );
  return iconNames;
}

//-----------------------------------------------------------------------------
// Merge the names of icons from all the different sets into a single list
//-----------------------------------------------------------------------------
function extractAllIconNames(icons) {
  let allNames = [ ];
  IconSets.forEach(
    set => { allNames.push( ...icons[set]) }
  );
  return sortedUniqueElements(allNames);
}

//-----------------------------------------------------------------------------
// Function to remove duplicate names and sort
//-----------------------------------------------------------------------------
function sortedUniqueElements(array) {
  return [ ...new Set(array) ].sort();
}

//-----------------------------------------------------------------------------
// Function to merge original icons from badger-ui into a new set
//-----------------------------------------------------------------------------
function mergeOriginalIconNames(icons) {
  const badgerUiIcons = require(extFile);
  let iconNames = { };
  //console.log("loaded icons from original file: ", badgerUiIcons);
  IconSets.forEach(
    set => iconNames[set] = sortedUniqueElements([
      ...icons[set], ...badgerUiIcons.iconSets[set]
    ])
  );
  return iconNames;
}

//-----------------------------------------------------------------------------
// Function to read SVG file and return object representing
// contents:
// {
//    prefix: 'fas',
//    code:   'e001',               // e002, e003, etc.
//    width:  1234,                 // SVG width
//    height: 1234,                 // SVG height
//    path:   'M1,2L2,3...',        // SVG path data for icon
//    safe:   'safeIconName',
//    name:   'originalIconName',
// }
//-----------------------------------------------------------------------------
function readSvgFile(filename, code) {
  const name = Path.basename(filename, '.svg');
  const file = Path.resolve(customDir, filename);
  const svg  = fs.readFileSync(file, 'utf8');

  // This is imperfect because some SVGs don't define width and height but instead
  // use viewBox="x y width height".  However it works for all the custom icons that
  // I've created so it's good enough for now.
  const width  = parseInt(matchValue(svg, /width="(\d+)(px)?"/, filename, 'width'));
  const height = parseInt(matchValue(svg, /height="(\d+)(px)?"/, filename, 'height'));
  const path   = matchValue(svg, /path[^>]+d="([^"]*)"/, filename, 'path').replace(/\s+/g, ' ');
  const id     = 'badger' + ucfirst(name.replace(/\W+/g, '_')) + 'Custom';
  return {
    // use the default "fas" fontawesome prefix
    prefix: 'fas',
    // assign next available user character code: e001, e002, etc.
    code: 'e' + code.toString().padStart(3, '0'),
    id, name, path, width, height
  };
}

//-----------------------------------------------------------------------------
// Function to generate JS to define a custom icon
//-----------------------------------------------------------------------------
function generateCustomIcon(icon) {
  return `const ${icon.id} = {
  prefix:   '${icon.prefix}',
  iconName: '${icon.name}',
  icon: [
    ${icon.width}, ${icon.height}, [], '${icon.code}',
    '${icon.path}'
  ],
};`;
}

//-----------------------------------------------------------------------------
// Function to generate Javascript configuration file to create a custom
// library containing the required fontawesome icons.
//-----------------------------------------------------------------------------
function generateLibraryFile(icons) {
  return `
//----------------------------------------------------------------------------
// WARNING!  Any changes you make to this file may be lost!
//
// This file is generated by the scripts/badger-ui-icons.js script in the
// badger-ui distribution.
//
// If you want to add new icons or change the existing icons then you should
// update icons/config.yaml and then run 'yarn icons' from the command line.
// That will rebuild this file.
//----------------------------------------------------------------------------

// https://github.com/FortAwesome/Font-Awesome/issues/19348
// import { library } from '@fortawesome/fontawesome-svg-core'
const { library } = require('@fortawesome/fontawesome-svg-core');


// import FontAwesome solid icons
import {
${icons.solid.map(
  icon => `  ${icon.faname} as ${icon.id}`,
).join(",\n")}
} from '@fortawesome/free-solid-svg-icons'

// import FontAwesome regular (outline) icons
import {
${icons.regular.map(
  icon => `  ${icon.faname} as ${icon.id}`,
).join(",\n")}
} from '@fortawesome/free-regular-svg-icons'

// define custom icons
${icons.custom.map(generateCustomIcon).join("\n")}

let BadgerUIIconsInitialised = false;

export function init() {
  if (BadgerUIIconsInitialised) {
    return;
  }
  else {
    BadgerUIIconsInitialised = true;
  }

  library.add(
    // add solid icons
${icons.solid.map(
  icon => `    ${icon.id},`
).join("\n")}

    // add regular icons
${icons.regular.map(
  icon => `    ${icon.id},`
).join("\n")}

    // add custom icons
${icons.custom.map(
  icon => `    ${icon.id},`
).join("\n")}

    // add aliases icons
${icons.alias.map(
  icon => `    { ...${icon.id}, iconName: '${icon.alias}', prefix: 'fas' },`
).join("\n")}
  )

  return library;
}

export default init
`
}

//-----------------------------------------------------------------------------
// Function to generate Javascript configuration file to create a custom
// library containing the required fontawesome icons.
//-----------------------------------------------------------------------------
function generateNamesFile(iconNames, allIconNames) {
  return `
//----------------------------------------------------------------------------
// WARNING!  Any changes you make to this file may be lost!
//
// This file is generated by the scripts/badger-ui-icons.js script in the
// badger-ui distribution.
//
// If you want to add new icons or change the existing icons then you should
// update icons/config.yaml and then run 'yarn icons' from the command line.
// That will rebuild this file.
//----------------------------------------------------------------------------

// define lists of icon names, e.g. for generating style guide
const iconSets = {
  regular: [
    ${iconNames.regular.map( name => `'${name}'` ).join(",\n    ")}
  ],
  solid: [
    ${iconNames.solid.map( name => `'${name}'` ).join(",\n    ")}
  ],
  custom: [
    ${iconNames.custom.map( name => `'${name}'` ).join(",\n    ")}
  ],
  alias: [
    ${iconNames.alias.map( name => `'${name}'` ).join(",\n    ")}
  ]
};

const iconNames = [
  ${allIconNames.map( name => `'${name}'` ).join(",\n  ")}
];

// NOTE: we use common JS style here so that we can require() this
// file when making an extended icon set based on these icons
module.exports = { iconSets, iconNames }
`
}

