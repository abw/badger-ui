import React from "react";
import { Button } from "../../src/components/Button";
import Icon from "../../src/components/Icon";
import { Modal } from "../../src/components/Modal";

export default {
  title: "Components/Modal",
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
  return <div className="relative pad vh-20">
    <Button
      color="green" text="Show Modal"
      onClick={() => showModal(true)}
    />
    {modal &&
      <Modal close={() => showModal(false)}>
        <h1>Hello World!</h1>
        <Button
          color="red" text="Hide Modal"
          onClick={() => showModal(false)}
        />
      </Modal>
    }
  </div>
}

export const ModalError = () => {
  const [modal, showModal] = React.useState(false);
  return <div className="relative pad vh-20">
    <Button
      color="green" text="Show Modal Error"
      onClick={() => showModal(true)}
    />
    {modal &&
      <Modal showClose={false} className="error alert">
        <div className="body">
          <Icon name="alert" size="2x" className="body-icon"/>
          <div className="content">
            <div className="title">Modal Error</div>
            <p>
              This is a modal error.  Something has gone terribly wrong!
            </p>
            <Button
              solid color="red" text="OK"
              onClick={() => showModal(false)}
            />
          </div>
        </div>
      </Modal>
    }
  </div>
}
