import React from "react";
import { Dropdown, DropdownMenu } from "../../src/components/Dropdown";
import { Icon } from "../../src/components/Icon";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Dropdown</h1>
  <p className="intro">
  </p>
</>

export const SimpleDropdown = () =>
  <Dropdown text="Badgers" iconLeft="badger" color="brown" solid className="mar-b-12">
    <div className="menu nowrap pad">
      <Icon name="badger" fixedWidth/>
      <Icon name="badger" fixedWidth/>
      <Icon name="badger" fixedWidth/>
      Badger, badger, badger...
    </div>
  </Dropdown>

export const OutlineDropdownMenu = () =>
  <DropdownMenu
    size="small" text="Menu"
    iconLeft="bars" color="brown"
    className="mar-b-12"
    items={[
      { text: 'User',        iconLeft: "user" },
      { text: 'Company',     iconLeft: "users" },
      { separator: true },
      { text: 'Radiation',   iconLeft: "radiation" },
      { separator: true },
      { text: 'Disabled',    iconLeft: "times", disabled: true },
    ]}
  />

export const SolidDropdownMenu = () =>
  <DropdownMenu
    size="small" text="Menu" solid
    iconLeft="bars" color="blue"
    className="mar-b-12"
    items={[
      { text: 'User',        iconLeft: "user", href: "/user" },
      { text: 'Company',     iconLeft: "users", href: "/company" },
      { separator: true },
      { text: 'Radiation',   iconLeft: "radiation", href: "https://wardray-premise.com" },
    ]}
  />

export const RightAlignedMenu = () =>
  <DropdownMenu
    size="small" text="Actions" className="float-right mar-b-12" right
    iconLeft="cog" color="orange" solid
    items={[
      { text: 'Activate',
        iconLeft: "cog", iconLeftColor: "green",
        onClick: () => window.alert("You clicked on 'Activate'")
      },
      { text: 'Eliminate',
        iconLeft: "trash", iconLeftColor: "red",
        onClick: () => window.alert("You clicked on 'Eliminate'")
      },
      { text: 'Add a User',
        iconLeft: "user", iconLeftColor: "blue",
        iconRight: "plus", iconRightColor: "green", iconRightClass: "small",
        onClick: () => window.alert("You clicked on 'Add a User'")
      },
    ]}
  />

export const CustomTrigger = () => {
  const Trigger = ({props}) => <Icon name="bars"/>

  return <DropdownMenu
    size="small" className="mar-b-12"
    Trigger={Trigger}
    items={[
      { text: 'Foo', onClick: () => window.alert("You clicked on 'Foo'") },
      { text: 'Bar', onClick: () => window.alert("You clicked on 'Bar'") },
      { text: 'baz', onClick: () => window.alert("You clicked on 'Baz'") },
    ]}
  />
}
