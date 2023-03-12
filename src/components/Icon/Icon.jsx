import React from 'react'
import PropTypes from 'prop-types';
import icons from '../../config/icons.js'
import { classNames, Themed } from '../../utils/index.js'
import { isString } from '@abw/badger-utils';

const faProps = {
  fixedWidth: 'fa-fw',
  spin: ' fa-spin',
}

export const Icon = ({icons, transform, ...props}) => {
  // icon can be specified as "icon" or "name" property and can be a string
  // like "badger spin" where anything after the first icon name is added as
  // a fa-XXX class
  const spec = props.icon || props.name;
  const [name, ...flags] = spec.split(' ');
  const cflags = flags
    .map( f => f.match(/^fa-/) ? f : `fa-${f}` )
    .join(' ');

  // lookup the icon in the icons library
  const icon = icons[name];

  if (! icon) {
    console.log(`Invalid icon name: ${name}`);
    return null;
  }
  // pull out the pertinent data
  const { minx, miny, width, height, style } = icon;

  // construct a className from the className, color and/or size properties
  const className = classNames(props, faProps);

  return (
    <svg
      aria-hidden="true" focusable="false"
      className={`svg-inline--fa icon ${className} ${cflags}`}
      role="img" xmlns="http://www.w3.org/2000/svg"
      viewBox={`${minx||0} ${miny||0} ${width} ${height}`}
      style={style && ReactStyle(style)}
      onClick={props.onClick}
    >
      { transform
        ? <Transform icon={icon} transform={transform}>
            <IconPaths name={name} icon={icon}/>
          </Transform>
        : <IconPaths name={name} icon={icon}/>
      }
    </svg>
  )
}

const IconPaths = ({icon}) => {
  const {paths, path} = icon;
  if (paths) {
    return paths.map( (path, n) => <Path path={path} key={n}/> )
  }
  if (path) {
    return <Path path={path}/>
  }
  console.log('No path or paths for icon');
}

const Path = ({path}) =>
  isString(path)
    ? <path fill="currentColor" d={path}/>
    : <PathWithAttrs path={path}/>

const PathWithAttrs = ({path}) => {
  const {d, opacity=null, style=null} = path;
  return <path
    d={d}
    fill="currentColor"
    opacity={opacity}
    style={style && ReactStyle(style)}
  />
}

function ReactStyle(style) {
  // e.g. fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round
  // converted to object with React camel case: { fillRule: 'evenodd', etc }
  return [ ...style.matchAll(/\s*([\w-]*?)\s*:\s*(.*?)(;|$)/g)]
    .map( match => match.slice(1, 3) )
    .reduce(
      (hash, [key, value]) => {
        hash[key.replace(/-./g, x => x[1].toUpperCase())] = value;
        return hash;
      },
      { }
    );
}

const Transform = ({icon, transform, children}) => {
  const { width, height } = icon;
  const halfw = width / 2;
  const halfh = height / 2;
  const trans = parseTransform(transform);
  const tx    = trans.x * width  / 16;
  const ty    = trans.y * height / 16;
  const sx    = trans.size / 16 * (trans.flipX ? -1 : 1);
  const sy    = trans.size / 16 * (trans.flipY ? -1 : 1);
  const rt    = trans.rotate;
  /*
  if (transform) {
    console.log('transform: ', transform);
    console.log('trans: ', trans);
    console.log(`tx:${tx}  ty:${ty}  sx:${sx}  sx:${sx}  rt:${rt}`);
  }
  */

  return (
    <g transform={`translate(${halfw} ${halfh})`}>
      <g transform={`translate(${tx}, ${ty}) scale(${sx}, ${sy}) rotate(${rt} 0 0)`}>
        <g transform={`translate(-${halfw} -${halfh})`}>
          {children}
        </g>
      </g>
    </g>
  )
}

// Slightly modified version of:
// https://github.com/FortAwesome/Font-Awesome/blob/6.x/js-packages/%40fortawesome/fontawesome-svg-core/index.js#L2706
function parseTransform(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce(
    (acc, n) => {
      const parts = n.toLowerCase().split('-');
      const first = parts[0];
      const rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      const num = parseFloat(rest);

      if (isNaN(num)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + num;
          break;

        case 'shrink':
          acc.size = acc.size - num;
          break;

        case 'left':
          acc.x = acc.x - num;
          break;

        case 'right':
          acc.x = acc.x + num;
          break;

        case 'up':
          acc.y = acc.y - num;
          break;

        case 'down':
          acc.y = acc.y + num;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + num;
          break;
      }

      return acc;
    },
    transform
  );
}

Icon.propTypes = {
  name:      PropTypes.string,
  size:      PropTypes.string,
  color:     PropTypes.string,
  transform: PropTypes.string,
};

Icon.defaultProps = {
  icons
};

export default Themed(Icon, 'Icon')
