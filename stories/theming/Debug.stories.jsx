import React from 'react';
import { Debug } from '../../src/components/Debug';
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Debug'
};

export const ThemedDebug = () => {
  const MyTheme = {
    Debug: {
      icon:  'badger',
      title: 'Magic Debug Badger'
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Debug</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <Debug className="text-left"/>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <Debug className="text-left"/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
