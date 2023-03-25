import React from 'react';
import { Button } from '../../src/components/Button';
import Icon from '../../src/components/Icon';
import { Modal } from '../../src/components/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Modal</h1>
  <p className="intro">
    This component creates a modal view that overlays the main page.
  </p>
</>

export const BasicModal = () => {
  const [modal, showModal] = React.useState(false);
  return (
    <>
      <p>
        You can use <code className="code">useState</code> to
        define a state variable that determines if the modal should be
        displayed or not.  You can pass a <code className="code">close</code> function
        to the <code className="code">Modal</code> component that clears the
        state variable, as shown in this example.  This will be bound to the
        close icon in the top right corner.
      </p>
      <Button
        color="green" text="Show Modal"
        onClick={() => showModal(true)}
      />
      {modal &&
        <Modal close={() => showModal(false)}>
          <h1>Hello World!</h1>
        </Modal>
      }
    </>
  )
}

export const ModalOptions = () => {
  const [modal, showModal] = React.useState(false);
  return (
    <>
      <p>
        The default overlay colour is black.
        You can set the <code className="code">overlayClass</code> to be{' '}
        <code className="code">white</code> or <code className="code">grey</code>{' '}
        for a different colour.
        You can use <code className="code">closeIcon</code> property to
        specify a different icon for the close button.
      </p>
      <Button
        color="green" text="Show Modal"
        onClick={() => showModal(true)}
      />
      {modal &&
        <Modal
          overlayClass="grey"
          closeIcon="radiation"
          close={() => showModal(false)}
        >
          <h1>Hello World!</h1>
        </Modal>
      }
    </>
  )
}

export const ModalError = () => {
  const [modal, showModal] = React.useState(false);
  return (
    <>
      <p>
        If you don&apos;t pass a <code className="code">close</code> handler then
        the icon won&apos;t be displayed in the upper right corner.  Instead you
        can include a button or some other element or event handler that is
        responsible for closing the modal.  This example shows how an error
        message might be displayed as a modal with a button to click to close
        the error message modal.
      </p>
      <Button
        color="green" text="Show Modal"
        onClick={() => showModal(true)}
      />
      {modal &&
        <Modal className="error alert">
          <div className="body">
            <Icon name="alert" size="2x" className="body-icon"/>
            <div className="content">
              <div className="title">Modal Error</div>
              <p>
                This is a modal error.  Clicking on the button below will
                close the modal.
              </p>
              <Button
                solid color="red" text="OK"
                onClick={() => showModal(false)}
              />
            </div>
          </div>
        </Modal>
      }
    </>
  )
}

export const ModalId = () => {
  const [modal, showModal] = React.useState(false);
  return (
    <>
      <p>
        The default behaviour is to create a
        new <code className="code">div</code> element in the document body and
        insert the modal body in there.  The overlay and modal will be displayed
        with <code className="code">position: fixed</code> to cover the
        entire viewport.
      </p>
      <p>
        If you want to pre-define an element
        that should receive the rendered modal then you should give it
        an <code className="code">id</code> and pass the{' '}
        <code className="code">id</code> property to
        the <code className="code">Modal</code> component.  In this case
        the <code className="code">absolute</code> class will be added to
        the overlay and modal so that it is displayed inside the target
        component.
      </p>
      <p>
        If you&apos;re using Next.js then you might want to create a{' '}
        <a href="https://nextjs.org/docs/advanced-features/custom-document">custom document</a>{' '}
        and define an element in there with a pre-defined <code className="code">id</code> to
        receive all modals.
      </p>
      <div className="row pad vh-20">
        <div className="split-3 gut-r">
          <Button
            color="green" text="Show Modal"
            onClick={() => showModal(true)}
          />
          { modal &&
          <Modal close={() => showModal(false)} id="modals-go-here">
            This is a modal.
          </Modal>
          }
        </div>
        <div className="split-2-3 relative border vh-20 pad" id="modals-go-here">
          Modal will be created inside this element.
        </div>
      </div>
    </>
  )
}
