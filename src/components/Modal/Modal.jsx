import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../Icon';

const hasDocument = (typeof document !== 'undefined');
const modalRoot = hasDocument
  ? document.getElementById('root')
  : null;

const ModalWrapper = ({ children, close }) => <div className="modal-overlay">
  <div className="modal">
    {children}
    <Icon name="times" className="close" onClick={close}/>
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

export default Modal;

