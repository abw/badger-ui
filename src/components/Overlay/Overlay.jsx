import React from 'react'
import { Themed } from '../../utils';

export const Overlay = ({
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
