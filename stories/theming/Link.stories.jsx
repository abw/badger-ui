import React from "react";
import Link from "../../src/components/Link";
import { Theme } from '../../src/utils'
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: 'Theming/Link'
};

export const ThemedLinks = () => {
  const MyTheme = {
    Link: props => {
      const className = props.className?.match(/\bbutton\b/)
        ? props.className + ' solid'
        : props.className;
      return {
        className
      };
    }
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Links</h1>
    <p>
      For more complex theming you can define a function to determine
      what properties should be added to the component.  This example
      defines such a function for the <code className="code">Link</code> component.
      If the <code className="code">className</code> contains <code className="code">button</code> then
      <code className="code">solid</code> is appended to it.
    </p>
    <div className="row text-center">
      <div className="split-2">
        <h2>Unthemed</h2>
        <Router>
          <Link to="nowhere" text="Default Link"/>
          <Link to="nowhere" className="green button mar-l" text="Green Button Link"/>
        </Router>
      </div>
      <div className="split-2">
        <h2>Themed</h2>
        <Router>
          <Theme.Provider {...MyTheme}>
            <Link to="nowhere" text="Default Link"/>
            <Link to="nowhere" className="green button mar-l" text="Green Button Link"/>
          </Theme.Provider>
        </Router>
      </div>
    </div>
  </>
}
