import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../Icon/index.jsx';
import { Themed } from '../../utils/index.js';

const hasDocument = (typeof document !== 'undefined');
const modalRoot = hasDocument
  ? document.getElementById('root')
  : null;

const ModalWrapper = ({
  children,
  closeIcon,
  close,
  showClose,
  className,
  overlayClass
}) =>
  <div className={`modal-overlay ${overlayClass}`}>
    <div className={`modal ${className}`}>
      {children}
      { Boolean(showClose)
        && <Icon name={closeIcon} className="close" onClick={close}/>
      }
    </div>
  </div>

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = hasDocument ? document.createElement('div') : null;
  }
  componentDidMount() {
    if (hasDocument) {
      modalRoot.appendChild(this.el);
    }
  }
  componentWillUnmount() {
    if (hasDocument) {
      modalRoot.removeChild(this.el);
    }
  }
  render() {
    return hasDocument
      ? ReactDOM.createPortal(
        <ModalWrapper {...this.props} />,
        this.el
      )
      : null;
  }
}

Modal.defaultProps = {
  closeIcon: 'times',
  showClose: true,
  className: '',
  overlayClass: ''
}

export default Themed(Modal, 'Modal');

