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
        <Checkbox text="Unthemed Checkbox" value={checked1} onChange={setChecked1}/>
        <CheckboxState text="Unthemed CheckboxState"/>
      </div>
      <div className="split-2 gut-l">
        <Theme.Provider {...MyTheme}>
          <Checkbox text="Themed Checkbox" value={checked2} onChange={setChecked2}/>
          <CheckboxState text="Themed CheckboxState"/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
