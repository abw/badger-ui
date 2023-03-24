import React from 'react';
import { Button } from '../../src/components/Button';
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Button'
};

export const ThemedButtons = () => {
  const MyTheme = {
    Button: {
      solid: true
    }
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Buttons</h1>
    <div className="row text-center">
      <div className="split-2">
        <h2>Unthemed</h2>
        <Button color="green" text="Default Button"/>
        <Button color="green" text="Solid Button" solid/>
        <Button color="green" text="Outline Button" outline/>
      </div>
      <div className="split-2">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <Button color="green" text="Default Button"/>
          <Button color="green" text="Solid Button" solid/>
          <Button color="green" text="Outline Button" outline/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
