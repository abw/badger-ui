import React from "react";
import { Dropdown, DropdownMenu } from "../../src/components/Dropdown";
import { Theme } from '../../src/utils'

export default {
  title: 'Theming/Dropdown'
};

export const ThemedDropdown = () => {
  const MyTheme = {
    Dropdown: {
      iconRight: 'bars',
    },
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Themed Dropdown</h1>
    <div className="row text-center pad-b-10">
      <div className="split-2 gut-r">
        <h2>Unthemed</h2>
        <Dropdown text="Menu" color="blue" solid>
          <div className="menu pad">
            Hello World!
          </div>
        </Dropdown>
      </div>
      <div className="split-2 gut-l">
        <h2>Themed</h2>
        <Theme.Provider {...MyTheme}>
          <Dropdown text="Menu" color="blue" solid>
            <div className="menu pad">
              Hello World!
            </div>
          </Dropdown>
        </Theme.Provider>
      </div>
    </div>
  </>
}

export const ThemedDropdownLink = () => {
  const MyTheme = {
    Dropdown: {
      iconRight: 'bars',
    },
    DropdownLink: {
      Link: (props) => `[${props.text} => ${props.to}]`
    }
  };
  return <>
    <h1 className="mar-t-none mar-l-none">Dropdown Menu Links</h1>
    <p>
      The <code className="code">DropdownMenu</code> component was originally
      designed to be used with React Router.  If you provide a
      <code className="code">to</code> property in a menu item then it
      creates a React Router <code className="code">NavLink</code> component.
    </p>
    <p>
      If you're not using React Router then you can define a custom
      <code className="code">Link</code> component
      as a property of <code className="code">DropdownLink</code> in your
      theme to render links a different way.  This simple example shows the
      links being rendered as text.
    </p>
    <h2>Custom Link Components</h2>
    <div className="pad-b-10">
      <Theme.Provider {...MyTheme}>
        <DropdownMenu
          text="Menu" color="blue" solid
          items={[
            { text: 'One',   to: "one" },
            { text: 'Two',   to: "two" },
            { text: 'Three', to: "three" },
          ]}
        />
      </Theme.Provider>
    </div>
  </>
}
