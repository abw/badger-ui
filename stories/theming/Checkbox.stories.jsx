import React from "react";
import { Checkbox, CheckboxState } from "../../src/components/Checkbox";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Checkbox'
};

export const ThemedCheckboxes = () => {
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
        <CheckboxState text="Unthemed checkbox"/>
      </div>
      <div className="split-2 gut-l">
        <Theme.Provider {...MyTheme}>
          <CheckboxState text="Themed checkbox"/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
