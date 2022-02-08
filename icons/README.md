# Icons

The files in this directory are used to generate a custom icon library using
icons from the free [Fontawesome](https://fontawesome.com/) collection.  This
is used by the `Icon` component to render icons and by various other components
(e.g. `Alert`, `Button`, `Checkbox`, etc) which include icons.

Fontawesome has 2 free sets: the `solid` icons and the `regular` icons (which
more accurately should be called the `outline` icons).  Icons can be included
from either of those sets.

It is also possible to add custom SVG icons that will be included in the
generated icon library.

The `cog-ui` library defines its own small set of core icons.  You can
extend this with additional icons for other projects which use the `cog-ui`
library.

## Configuration File

The `config.yaml` file defines the icons that should be included in the icon
library.

### Solid and Regular Icons

The `solid` and `regular` configuration items should list the names of the icons
from the solid and regular sets which should be included.

```yaml
solid:
  - arrow-up
  - arrow-down
regular:
  - check-circle
  - check-square
```

### Custom Icons

You can add custom SVG icons by adding them to the `custom` directory.
If for some reason you want to put them in a different directory then
change the `customDir` option near the bottom of the configuration file
to point somewhere else.  Note that the directory specified should be
relative to the directory where the `config.yaml` file is located.

Each of the files in the `custom` directory will be added as an icon
using the filename (without the `.svg` extension) as the name for the
icon.

Note that the SVG files MUST have a `width` and `height` defined in
pixels in the main `<svg>` element, and a single `path` element to define
the icon path.

```svg
<?xml version="1.0" encoding="utf-8"?>
<svg width="2048px" height="2048px" ...etc...>
  <path d="M1436.078...etc...z"/>
</svg>
```

### Icon Aliases

There is also an `alias` mapping in the configuration file which allows
you to create aliases to other icons.  For example, you can create `warning` as an alias for
the `exclamation-triangle` icon in the `solid` set.  This is ideal for
forgetful people who can't remember long names like `exclamation-triangle`
and for lazy people who can't be bothered to type them.

The keys in this mapping are the alias names, the values should be the
icon set and name separated by a colon.

```yaml
alias:
  warning: solid:exclamation-triangle
```

Aliases are also useful for "semantic" naming.  For example, you could define
the `portfolio` icon as an alias to the `briefcase` icon in the solid set.

```yaml
alias:
  portfolio: solid:briefcase
```

If at some point in the future you decide to use a different icon to
represent portfolios then you only need to update the alias here and
then all references to the `portfolio` icon in your code will result
in the new icon being used.

There's another reason why aliases are awesome.  That's because they
eliminate the need to specify which icons have come from the `regular`
icon set.  When you're including an icon using the `Icon` component you
can specify the name of a `solid` icon or an alias to an icon using just the
`name` property.

```jsx
<Icon name="arrow-up"/>   // solid icon
<Icon name="warning"/>    // icon alias
```

But when you want to use an icon from the `regular` set you must also specify `regular`
as a property.  This is because Fontawesome assumes that `solid` is
the default set.

```jsx
<Icon name="check-circle" regular/>
```

This is a nuisance.  It can be a bit tedious trying to remember which
icons are `solid` and which are `regular`.  Furthermore, when rendering
a `Button`, for example, you might have an icon on the left and another
one on the right and it would be a royal pain in the badger's backside
if you had to specify which, if any of those icons were regular.

```jsx
<Button iconLeft="check" iconRight="arrow-right" text="continue"/>
```

If you define an alias to a `regular` icon then you can use the icon
alias and forget about which set the icon came from.

```yaml
alias:
  check-circle: regular:check-circle
```

Now you don't need the `regular` property when using the icon:

```jsx
<Icon name="check-circle"/>
```

The `aliasRegular` configuration option (set to `true` by default)
will automatically generate aliases to any `regular` icons that you're
including so you don't need to worry about it.  If for some
reason you don't want those aliases generated automatically then set
`aliasRegular` to `false` and manually define the aliases
that you want.

## Build Script

The `build.js` script is used to generate a custom icon library from the
information defined in the `config.yaml` file.

In the `cog-ui` library the script can be invoked as:

```sh
yarn icons
```

You can run it with the `--help` option to see a summary of configuration
options.

```sh
yarn icons --help
```

The default location for the configuration file is `icons/config.yaml` but you can use the `--config` command line option to specify a different configuration file if you like.

When run the script generates two files: `src/config/iconLibrary.js` and `src/config/iconNames.js`.  You can use the `--library` and `--names` command line
options to define different locations for these files if you want.

The `iconLibrary.js` file exports an `init()` function which is imported and
invoked by the `src/components/Icon.jsx` component to load the default icons.
The `iconNames.js` file exports `iconSets` which contains the names of the icons
imported from each icon set (e.g. `iconSets.regular`, `iconSets.solid`, etc)
and `iconNames` which contains the names of all icons imported.  These can be
useful for generating style guides showing all available icons.

### Adding More Icons to Your Project

The `cog-ui` library only defines a small core set of icons that are used by
the `cog-ui` components.  When you incorporate the `cog-ui` library into another
project you can use the same script to add further icons that are specific
to your project.

First you should add `cog-ui` as a dependency if you haven't already.

```sh
yarn add /path/to/cog-ui
```

Then create an `icons` directory with a `config.yaml` file in it and optionally,
a `custom` directory with SVG files for your custom icons.  Then you can run
the script using this command:

```sh
node node_modules/cog-ui/icons/build.js --verbose --extend
```

This performs the same functionality as described above but will add new
icons onto those already defined in the `cog-ui` library.  To register the new icons in your project you should import the `init()` function from the generated library file and invoke it.

```jsx
    import { init } from 'src/config/iconLibrary'
    init()
```

If you want to generate a style guide showing the icons that are available then
you can load the icon names from the `src/config/iconNames` file.
