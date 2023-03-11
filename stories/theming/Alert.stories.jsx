import React from 'react';
import { Alert, Info, Warning } from '../../src/components/Alert';
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Alert'
};

export const ThemedTodo = () => {
  const MyTheme = {
    Alert: {
      dismissIcon:  'trash',
      revealedIcon: 'angle-down',
      unrevealedIcon: 'angle-left',
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Alert</h1>
    <div className="row text-center">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <div className="text-left">
          <Alert   headline="Alert"   dismissable={true} text="This can be dismissed"/>
          <Info    headline="Info"    dismissable={true} text="This can be dismissed"/>
          <Warning headline="Warning" revealable={true}  text="This can be revealed"/>
          {/* <Warning headline="Warning"  dismissable={true} text="This can be dismissed"/> */}
        </div>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <div className="text-left">
          <Theme.Provider {...MyTheme}>
            <Alert   headline="Alert" dismissable={true} text="This can be dismissed"/>
            <Info    headline="Info"  dismissable={true} text="This can be dismissed"/>
            <Warning headline="Warning" revealable={true}  text="This can be revealed"/>
          </Theme.Provider>
        </div>
      </div>
    </div>
  </>
}
