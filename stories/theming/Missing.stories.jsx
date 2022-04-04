import React from "react";
import { Missing } from "../../src/components/Missing";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Missing'
};

export const ThemedMissing = () => {
  const MyTheme = {
    Missing: {
      icon:     'alert',
      fallback: "None, None More Found"
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Missing</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <Missing className="text-left"/>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <Missing className="text-left"/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
