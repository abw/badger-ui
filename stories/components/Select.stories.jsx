import React from 'react';
import { Select, SelectState } from '../../src/components/Select';

export default {
  title: 'Components/Select',
  component: Select,
}

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Selection Lists</h1>
  <p className="intro">
    The <code className="code">Select</code> and <code className="code">SelectState</code>{' '}
    components implement pull-down selection lists.
  </p>
  <p>
    The <code className="code">Select</code> component does not maintain state and is
    suitable for use as a controlled component, e.g. in a form which maintains the current
    state.  The <code className="code">SelectState</code> component does maintain its own
    state and is suitable for stand-alone use.
  </p>
</>


export const UnmanagedState = () => {
  const [value, setValue] = React.useState(false);
  const options = [
    { text: 'Ten',    value: 10 },
    { text: 'Twenty', value: 20 },
    { text: 'Thirty', value: 30 },
  ];
  return <div className="pad-b-8">
    <p>
      The selection state is not managed internally by the
      <code className="code">Select</code> component.
      You must provide a <code className="code">value</code>
      property indicating the state and an <code className="code">onChange</code>
      handler to detect changes in state.
    </p>
    <Select
      value={value} options={options}
      onChange={option => setValue(option.value)}
    />
    <div className="blue mar-t">{value||'Nothing'} is selected</div>
  </div>
}

export const ManagedSate = () => {
  return <div className="pad-b-10">
    <p>
      The <code className="code">SelectState</code> components is a
      wrapper around <code className="code">Select</code> with additional
      functionality to maintain the state of the selection.
    </p>
    <SelectState
      onChange={
        option => console.log(
          "Selected %s : %s",
          option.value, option.text
        )
      }
      options={[
        { value: "f", text: "Ferrets" },
        { value: "b", text: "Badgers" },
        { value: "s", text: "Stoats" },
      ]}
    />
  </div>
}

export const SelectSizes = () => {
  return <div className="pad-b-10">
    <p>
      Add the <code className="code">size</code> property to
      either component to set the size.
    </p>
    <h5 className="mar-t-2 mar-b-none">Small</h5>
    <SelectState
      size="small"
      options={[
        { value: "f", text: "Ferrets" },
        { value: "b", text: "Badgers" },
        { value: "s", text: "Stoats" },
      ]}
    />
    <h5 className="mar-t-2 mar-b-none">Large</h5>
    <SelectState
      size="large"
      options={[
        { value: "f", text: "Ferrets" },
        { value: "b", text: "Badgers" },
        { value: "s", text: "Stoats" },
      ]}
    />
  </div>
}
