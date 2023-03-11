import React from 'react';
import { Overlay } from '../../src/components/Overlay';
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Overlay'
};

export const ThemedOverlay = () => {
  const MyTheme = {
    Overlay: {
      color: 'black',
    }
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Overlay</h1>
    <div className="row text-center">
      <div className="split-2 gut-r relative">
        <h2>Background Text</h2>
        <Overlay className="pad text-center">
          <h3>Unthemed Overlay</h3>
        </Overlay>
      </div>
      <div className="split-2 gut-l relative">
        <h2>Background Text</h2>
        <Theme.Provider {...MyTheme}>
          <Overlay className="pad text-center">
            <h3 className="white">Themed Overlay</h3>
          </Overlay>
        </Theme.Provider>
      </div>
    </div>
  </>
}
