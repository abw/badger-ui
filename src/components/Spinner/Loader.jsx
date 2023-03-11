import React from 'react'
import Spinner from './Spinner.jsx'
import { Themed } from '../../utils/index.js';
import { Overlay } from '../Overlay/index.jsx'

const Loader = ({
  overlayColor,
  textSize,
  message,
  className='',
  ...props
}) =>
  <Overlay color={overlayColor} className={className}>
    <div className="middle">
      <Spinner {...props}/>
      <div className={`caption mar-2 ${textSize}`}>{message}</div>
    </div>
  </Overlay>

Loader.defaultProps = {
  textSize: 'larger',
  size:     'fa-4x',
};

export default Themed(Loader, 'Loader')
