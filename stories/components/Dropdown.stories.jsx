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
  <Dropdown text="Badgers" iconLeft="badger" color="brown" solid>
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
    items={[
      { text: 'User',        iconLeft: "user" },
      { text: 'Company',     iconLeft: "users" },
      { separator: true },
      { text: 'Radiation',   iconLeft: "radiation" },
    ]}
  />

export const SolidDropdownMenu = () =>
  <DropdownMenu
    size="small" text="Menu" solid
    iconLeft="bars" color="blue"
    items={[
      { text: 'User',        iconLeft: "user" },
      { text: 'Company',     iconLeft: "users" },
      { separator: true },
      { text: 'Radiation',   iconLeft: "radiation" },
    ]}
  />

export const RightAlignedMenu = () =>
  <DropdownMenu
    size="small" text="Actions" className="float-right" right
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
