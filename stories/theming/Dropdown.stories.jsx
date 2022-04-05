import React from "react";
import { Dropdown } from "../../src/components/Dropdown";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Dropdown'
};

export const ThemedDropdown = () => {
  const MyTheme = {
    Dropdown: {
      iconRight: 'bars',
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Dropdown</h1>
    <div className="row text-center pad-b-10">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <Dropdown text="Menu" color="blue" solid>
          <div className="menu pad">
            Hello World!
          </div>
        </Dropdown>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <Dropdown text="Menu" color="blue" solid>
            <div className="menu pad">
              Hello World!
            </div>
          </Dropdown>
        </Theme.Provider>
      </div>
    </div>
  </>
}
