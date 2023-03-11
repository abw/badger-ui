import React from 'react';
import { Confirm } from '../../src/components/Confirm';
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Confirm'
};

export const ThemedConfirm = () => {
  const MyTheme = {
    Confirm: {
      confirmIcon:  'trash',
      confirmText:  'Yep',
      confirmColor: 'green',
      cancelIcon:   'arrow-left',
      cancelText:   'Nope',
      cancelColor:  'blue',
      prompt:       'Really?',
      solid:        true,
      iconRight:    'trash',
      color:        'red'
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Confirm</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <Confirm text="Delete My Badger"/>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <Confirm text="Delete My Badger"/>
        </Theme.Provider>
      </div>
    </div>
  </>
}

