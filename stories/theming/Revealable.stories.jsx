import React from "react";
import { Revealable } from "../../src/components/Revealable";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Revealable'
};

export const ThemedRevealable = () => {
  const MyTheme = {
    Revealable: {
      revealedIcon:   'angle-down',
      unrevealedIcon: 'angle-right',
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Revealable</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <Revealable title="Reveal This" className="text-left">
          This is revealed
        </Revealable>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <Revealable title="Reveal This" className="text-left">
            This is revealed
          </Revealable>
        </Theme.Provider>
      </div>
    </div>
  </>
}

