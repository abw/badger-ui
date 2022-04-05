import React from 'react'
import Spinner from './Spinner'
import { Themed } from '../../utils';
import { Overlay } from '../Overlay'

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
