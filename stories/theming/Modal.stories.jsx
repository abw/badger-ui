import React from 'react';
import Button from '../../src/components/Button';
import { Modal } from '../../src/components/Modal';
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Modal'
};

export const ThemedModal = () => {
  const [modal1, showModal1] = React.useState(false);
  const [modal2, showModal2] = React.useState(false);
  const MyTheme = {
    Modal: {
      closeIcon:  'trash',
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Modal</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <Button
          color="green" text="Show Modal" solid
          onClick={() => showModal1(true)}
        />
        { modal1 &&
          <Modal close={() => showModal1(false)}>
            <h1>Hello World!</h1>
          </Modal>
        }
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <Button
            color="green" text="Show Modal" solid
            onClick={() => showModal2(true)}
          />
          { modal2 &&
            <Modal close={() => showModal2(false)}>
              <h1>Hello World!</h1>
            </Modal>
          }
        </Theme.Provider>
      </div>
    </div>
  </>
}
