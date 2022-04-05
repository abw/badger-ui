import React from "react";
import { Checkbox, CheckboxState } from "../../src/components/Checkbox";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Checkbox'
};

export const ThemedCheckboxes = () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const MyTheme = {
    Checkbox: {
      checkedIcon:   'circle-check',
      uncheckedIcon: 'circle',
    }
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Checkboxes</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <h5>Checkbox</h5>
        <Checkbox text="Unthemed Checkbox" value={checked1} onChange={setChecked1}/>
        <h5 className="mar-t">CheckboxState</h5>
        <CheckboxState text="Unthemed CheckboxState"/>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <h5>Checkbox</h5>
          <Checkbox text="Themed Checkbox" value={checked2} onChange={setChecked2}/>
          <h5 className="mar-t">CheckboxState</h5>
          <CheckboxState text="Themed CheckboxState"/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
