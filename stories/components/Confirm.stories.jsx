import React from 'react';
import { Confirm } from '../../src/components/Confirm';

export default {
  title: 'Components/Confirm',
  component: Confirm,
  args: {
    text: 'Confirm',
  },
};

export const Example = (props) =>
  <>
    <h1 className="mar-t-none mar-l-none">Confirmation Buttons</h1>
    <p className="intro">
      The <code className="code">Confirm</code> component renders a
      button which, which clicked, prompts the user to confirm the action.
    </p>
    <p>
      This is useful for potentially dangerous actions like deleting things,
      launching nuclear missiles or opening the box to see if the cat is
      dead or alive.
    </p>
    <Confirm {...props} />
  </>

export const OutlineButtons = () =>
  <>
    <Confirm text="Delete" color="red" />
    <Confirm text="Delete" color="orange" iconRight="trash" />
    <Confirm text="Banish" color="yellow" iconRight="ban" prompt="" />
  </>

export const SolidButtons = () =>
  <>
    <Confirm text="Delete" color="red" solid />
    <Confirm text="Delete" color="orange" iconRight="trash" solid />
    <Confirm text="Banish" color="yellow" iconRight="ban" prompt="" solid />
  </>

export const Customisation = () =>
  <Confirm
    text="Kill the Cat" color="brown" solid
    iconLeft="radiation" iconRight="cat"
    prompt="Really?" promptClass="small"
    cancelText="Don't Do It!" cancelIcon="times-ring" cancelColor="green"
    confirmText="Do It!" confirmIcon="check-ring" confirmColor="red"
  />
