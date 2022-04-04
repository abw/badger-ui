import React from 'react'
import { Themed } from '../../utils';

const Overlay = ({
  color,
  className='',
  children
}) =>
  <div className={`overlay ${className} ${color}`}>
    {children}
  </div>

Overlay.defaultProps = {
  color: 'white',
};

export default Themed(Overlay, 'Overlay')
