import React from "react";
import { Radio, RadioState } from "../../src/components/Radio";
import { sizes } from '../../src/config/sizes'

export default {
  title: "Components/Radio",
  component: Radio,
}

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Radio and RadioState</h1>
  <p className="intro">
    The <code className="code">Radio</code> and <code className="code">RadioState</code>
    components implement "radio buttons" of which only one option can be selected.
  </p>
  <p>
    The <code className="code">Radio</code> component does not maintain state and is
    suitable for use as a controlled component, e.g. in a form which maintains the current
    state.  The <code className="code">RadioState</code> component does maintain its own
    state and is suitable for stand-alone use.
  </p>
</>

export const UnmanagedState = (props) => {
  const [value, setValue] = React.useState(false);
  const options = [
    { text: 'Ten', value: 10 },
    { text: 'Twenty', value: 20 },
    { text: 'Thirty', value: 30 },
  ];
  return <>
    <p>
      The radio state is not managed internally by the
      <code className="code">Radio</code> component.
      You must provide a <code className="code">value</code>
      property indicating the state and an <code className="code">onChange</code>
      handler to detect changes in state.
    </p>
    <Radio
      value={value} options={options}
      onChange={option => setValue(option.value)}
    />
    <div className="blue">{value || 'Nothing'} is selected</div>
  </>
}

export const ManagedState = (props) => <>
  <p>
    The <code className="code">CheckboxState</code> components is a
    wrapper around <code className="code">Checkbox</code> with additional
    functionality to maintain the state of the checkbox.
  </p>
  <RadioState
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
</>

export const DisabledOptions = (props) => <>
  <p>
    An option can set the <code className="code">disabled</code> flag if it cannot
    be selected. You can also pass the <code className="code">disabled</code> flag to
    the component to disabled the whole thing.
  </p>
  <RadioState
    initialValue={1}
    options={[
      { value: 1, text: "One" },
      { value: 2, text: "Two" },
      { value: 3, text: "Three", disabled: true }
    ]}
  />
  <RadioState
    initialValue={1}
    options={[
      { value: 1, text: "One" },
      { value: 2, text: "Two" },
      { value: 3, text: "Three" }
    ]}
    disabled={true}
  />
</>
