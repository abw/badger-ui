import React from "react";
import { Spinner } from "../../src/components/Spinner";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Introduction'
};

export const CustomTheme = () => {
  const MyTheme = {
    Spinner: {
      icon: 'radiation',
      color: 'black',
      bgColor: 'yellow',
      bgTransform: 'grow-8'
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Creating a Theme</h1>
    <p className="intro">
      Define a theme to override default options in components.
    </p>
    <p>
      A component by itself will use the default properties.
    </p>
    <Spinner/>
    <p>
      Use the <code className="code">Theme.Provider</code> as a container
      in your app and provide it with new default configuration properties
      for components.  The components contained anywhere beneath the
      <code className="code">Theme.Provider</code> will use the new default properties.
    </p>

    <Theme.Provider {...MyTheme}>
      <Spinner/>
    </Theme.Provider>
  </>
}

