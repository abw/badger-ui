import React from 'react'
import Portal from './Portal.jsx'
import Icon from '../Icon/index.jsx';
import { Themed } from '../../utils/index.js';

const Modal = ({
  id,
  close, closeIcon='times',
  overlayClass='', className='',
  children
}) =>
  <Portal id={id}>
    <div className={`modal-overlay ${id ? 'absolute' : ''} ${overlayClass}`}>
      <div className={`modal ${id ? 'absolute' : ''} ${className}`}>
        {children}
        { Boolean(close)
          && <Icon name={closeIcon} className="close" onClick={close}/>
        }
      </div>
    </div>
  </Portal>

export default Themed(Modal, 'Modal');

