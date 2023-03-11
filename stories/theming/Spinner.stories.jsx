import React from 'react';
import { Spinner, Loading, Saving } from '../../src/components/Spinner';
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Spinner'
};

export const ThemedSpinners = () => {
  const MyTheme = {
    Spinner: {
      icon: 'radiation',
      color: 'black',
      bgColor: 'yellow',
      bgTransform: 'grow-8'
    },
    Loader: {
      textSize: 'medium',
      size: 'fa-2x',
    },
    Loading: {
      message: 'Load-o-rama!',
    },
    Saving: {
      message: 'Save-tastic!',
    }
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Spinners</h1>
    <div className="row text-center">
      <div className="split-2">
        <h2>Unthemed</h2>
        <Spinner/>
        <Loading/>
        <Saving/>
      </div>
      <div className="split-2">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <Spinner/>
          <Loading/>
          <Saving/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
