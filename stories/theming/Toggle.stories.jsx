import React from "react";
import { Toggle, ToggleState } from "../../src/components/Toggle";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Toggle'
};

export const ThemedToggle = () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const MyTheme = {
    Toggle: {
      checkedIcon:   'check',
      uncheckedIcon: 'times',
    }
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Toggles</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <Toggle text="Unthemed Toggle" value={checked1} onChange={setChecked1}/>
        <ToggleState text="Unthemed ToggleState"/>
      </div>
      <div className="split-2 gut-l">
        <Theme.Provider {...MyTheme}>
          <Toggle text="Themed Toggle" value={checked2} onChange={setChecked2}/>
          <ToggleState text="Themed ToggleState"/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
