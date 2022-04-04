import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { init } from '../../config/iconLibrary'

// initialise the custom icons configuration to load icons into library
init();

const styles = {
  solid: 'fas',
  outline: 'far',
  regular: 'far'
};

export const Icon = (props) => {
  let myProps = { ...props };

  // allow "name" as an alias for "icon" property
  let icon = myProps.icon || myProps.name;
  myProps.icon = icon;
  delete myProps.name;

  if (myProps.icon.match(/\bspin\b/)) {
    myProps.spin = true;
    myProps.icon = myProps.icon.replace(/\b\s*spin\b/, '');
  }
  if (myProps.icon.match(/\bflip-h\b/)) {
    myProps.flip = 'horizontal';
    myProps.icon = myProps.icon.replace(/\b\s*flip-h\b/, '');
  }

  // look for solid/outline/regular props
  Object.keys(styles).forEach(
    style => {
      if (myProps[style]) {
        delete myProps[style];
        myProps.icon = [styles[style], icon];
      }
    }
  );

  myProps.className = (myProps.className || '') + ' icon';

  if (myProps.color) {
    myProps.className += ' ' + myProps.color;
    delete myProps.color;
  }
  // console.log('Icon props: ', myProps);
  return <FontAwesomeIcon {...myProps} />
}

Icon.propTypes = {
  /** The name of the icon. */
  name: PropTypes.string,
  /** Explicitly indicate a solid icon (default). */
  solid: PropTypes.bool,
  /** Indicate a regular icon. */
  regular: PropTypes.bool,
  /** Icon size. */
  size: PropTypes.oneOf(['xs', 'sm', 'lg', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
};

export default Icon;
