import React from 'react';
import { Checkbox, CheckboxState } from '../../src/components/Checkbox';
import { sizes } from '../../src/config/sizes'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
}

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Checkbox and CheckboxState</h1>
  <p className="intro">
    The <code className="code">Checkbox</code> and <code className="code">CheckboxState</code>
    components implement checkboxes.
  </p>
  <p>
    The <code className="code">Checkbox</code> component does not maintain state and is
    suitable for use as a controlled component, e.g. in a form which maintains the current
    state.  The <code className="code">CheckboxState</code> component does maintain its own
    state and is suitable for stand-alone use.
  </p>
</>

export const UnmanagedState = () => {
  const [checked, setChecked] = React.useState(false);
  return <>
    <p>
      The checkbox state is not managed internally by the
      <code className="code">Checkbox</code> component.
      You must provide a <code className="code">value</code>
      property indicating the state and an <code className="code">onChange</code>
      handler to detect changes in state.
    </p>
    <Checkbox
      value={checked} text="State Managed Externally"
      onChange={setChecked}
    />
    {checked
      ? <div className="green">The checkbox is checked</div>
      : <div className="red">The checkbox is not checked</div>
    }
  </>
}

export const ManagedSate = () => {
  return <>
    <p>
      The <code className="code">CheckboxState</code> components is a
      wrapper around <code className="code">Checkbox</code> with additional
      functionality to maintain the state of the checkbox.
    </p>
    <CheckboxState
      text="State Maintained Internally"
      initialValue={true}
      onChange={c => console.log('checked: ', c)}
    />
  </>
}

export const DisabledCheckbox = () => {
  const [disabled, setDisabled] = React.useState(false);
  return <>
    <Checkbox
      text="Disable the other checkbox"
      value={disabled} onChange={setDisabled}
    />
    <CheckboxState
      text={`This is ${disabled ? 'disabled' : 'enabled'}`}
      disabled={disabled}
    />
  </>
}

export const FullWidth = () =>
  <>
    <p>
      Add the <code className="code">wide</code> class for a full-width
      checkbox.
    </p>
    <CheckboxState className="wide" text="Wide Checkbox"/>
  </>

export const FixedWidth = () =>
  <>
    <p>
      Add one of the <code className="code">wd-N</code> classed to set the
      width to a number of ems.
    </p>
    <CheckboxState className="wd-12" text="Width 12em"/>
  </>

export const CustomText = () =>
  <>
    <CheckboxState
      checkedText="Yes please"
      uncheckedText="No thank you"
    />
  </>

export const CustomIcons = () =>
  <>
    <CheckboxState
      text="Up or Down"
      checkedIcon="arrow-up" uncheckedIcon="arrow-down"
    />
  </>


export const CheckboxSizes = () =>
  <>
    {sizes.map(
      size => <CheckboxState key={size} size={size} text={`${size} checkbox`} />
    )}
  </>
