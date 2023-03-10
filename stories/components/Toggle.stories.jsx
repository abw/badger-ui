import React from 'react';
import { Toggle, ToggleState } from '../../src/components/Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
}

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Toggle and ToggleState</h1>
  <p className="intro">
    These are variations of the <code className="code">Checkbox</code> and <code className="code">CheckboxState</code>
    components with different icons representing a toggle switch.
  </p>
  <p>
    The <code className="code">Toggle</code> component does not maintain state and is
    suitable for use as a controlled component, e.g. in a form which maintains the current
    state.  The <code className="code">ToggleState</code> component does maintain its own
    state and is suitable for stand-alone use.
  </p>
</>

export const UnmanagedState = () => {
  const [checked, setChecked] = React.useState(false);
  return <>
    <p>
      The toggle state is not managed internally by the
      <code className="code">Toggle</code> component.
      You must provide a <code className="code">value</code>
      property indicating the state and an <code className="code">onChange</code>
      handler to detect changes in state.
    </p>
    <Toggle
      value={checked} text="State Managed Externally"
      onChange={setChecked}
    />
    {checked
      ? <div className="green">The toggle is on</div>
      : <div className="red">The toggle is off</div>
    }
  </>
}

export const ManagedSate = () => {
  return <>
    <p>
      The <code className="code">ToggleState</code> components is a
      wrapper around <code className="code">CheckboxState</code> with additional
      functionality to maintain the state of the toggle.
    </p>
    <ToggleState
      text="State Maintained Internally"
      initialValue={false}
      onChange={c => console.log('checked: ', c)}
    />
  </>
}

export const CustomText = () =>
  <ToggleState
    checkedText="Activated"
    uncheckedText="Deactivated"
    initialValue={true}
  />

