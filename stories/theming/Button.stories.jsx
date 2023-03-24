import React from 'react';
import { Button } from '../../src/components/Button';
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Button'
};

export const ThemedButtons = () => {
  const Solid = {
    Button: {
      solid: true
    }
  };
  const Shade = {
    Button: {
      shade: true
    }
  };
  const Round = {
    Button: {
      round: true
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
        <h2>Themed - solid by default</h2>
        <Theme.Provider {...Solid}>
          <Button color="green" text="Default Button"/>
          <Button color="green" text="Solid Button" solid/>
          <Button color="green" text="Outline Button" outline/>
        </Theme.Provider>
      </div>
    </div>
    <div className="row text-center">
      <div className="split-2">
        <h2>Themed - shaded by default</h2>
        <Theme.Provider {...Shade}>
          <Button color="green" text="Default Button"/>
          <Button color="green" text="Solid Button" solid/>
          <Button color="green" text="Outline Button" outline/>
        </Theme.Provider>
      </div>
      <div className="split-2">
        <h2>Themed - round by default</h2>
        <Theme.Provider {...Round}>
          <Button color="green" text="Default Button"/>
          <Button color="green" text="Solid Button" solid/>
          <Button color="green" text="Outline Button" outline/>
        </Theme.Provider>
      </div>
    </div>
  </>
}
