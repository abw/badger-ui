import React from 'react';
import { Dropdown, DropdownMenu } from '../../src/components/Dropdown';
import { Icon } from '../../src/components/Icon';

export default {
  title: 'Components/Dropdown',
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
      <Icon name="badger"  className="mar-h" fixedWidth/>
      <Icon name="badger2" className="mar-h" fixedWidth/>
      <Icon name="badger3" className="mar-h" fixedWidth/>
      Badger, badger, badger...
    </div>
  </Dropdown>

export const OutlineDropdownMenu = () =>
  <>
    <p className="mar-t-none">
      The <code className="code">DropdownMenu</code> component allows you
      to define an array of <code className="code">items</code> to appear in
      a menu.  Each can contain the <code className="code">text</code> to
      display and <code className="code">iconLeft</code> and/or{' '}
      <code className="code">iconRight</code> to display an icon on either
      side.  Add the <code className="code">href</code> property to create a
      regular link, the <code className="code">to</code> property to create
      a <code className="code">Link</code> component (which by default uses
      React Router v6), or an <code className="code">onClick</code> handler.
    </p>
    <p>
      Add the <code className="code">disabled</code> property to disable an
      option.
    </p>
    <p>
      For separators, define an item
      with a <code className="code">separator</code> property set
      to <code className="code">true</code>.
    </p>
    <DropdownMenu
      size="small" text="Menu"
      iconLeft="bars" color="brown"
      className="mar-b-16"
      items={[
        { text: 'User',        iconLeft: 'user' },
        { text: 'Company',     iconLeft: 'users' },
        { separator: true },
        { text: 'Radiation',   iconLeft: 'radiation' },
        { separator: true },
        { text: 'Disabled',    iconLeft: 'times', disabled: true },
      ]}
    />
  </>

export const SolidDropdownMenu = () =>
  <DropdownMenu
    size="small" text="Menu" solid
    iconLeft="bars" color="blue"
    className="mar-b-12"
    items={[
      { text: 'User',        iconLeft: 'user', href: '/user' },
      { text: 'Company',     iconLeft: 'users', href: '/company' },
      { separator: true },
      { text: 'Radiation',   iconLeft: 'radiation', href: 'https://wardray-premise.com' },
    ]}
  />

export const RightAlignedMenu = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">right</code> property to have the
      menu items right-aligned. Note that you&apos;ll still have to implement
      your own alignment if you want the menu to appear on the right of the
      container, e.g. by adding <code className="code">text-right</code> to the
      container or <code className="code">float-right</code> in the {' '}
      <code className="code">className</code> for the <code className="code">DropdownMenu</code>.
    </p>
    <DropdownMenu
      size="small" text="Actions" className="float-right mar-b-12" right
      iconLeft="cog" color="orange" solid
      items={[
        { text: 'Activate',
          iconLeft: 'cog', iconLeftColor: 'green',
          onClick: () => window.alert('You clicked on \'Activate\'')
        },
        { text: 'Eliminate',
          iconLeft: 'trash', iconLeftColor: 'red',
          onClick: () => window.alert('You clicked on \'Eliminate\'')
        },
        { text: 'Add a User',
          iconLeft: 'user', iconLeftColor: 'blue',
          iconRight: 'plus', iconRightColor: 'green', iconRightClass: 'small',
          onClick: () => window.alert('You clicked on \'Add a User\'')
        },
      ]}
    />
  </>

export const CustomTrigger = () => {
  const Trigger = () => <Icon name="bars"/>

  return (
    <>
      <p className="mar-t-none">
        You can define your own trigger using the <code className="code">Trigger</code> property.
      </p>
      <DropdownMenu
        size="small" className="mar-b-12"
        Trigger={Trigger}
        items={[
          { text: 'Foo', onClick: () => window.alert('You clicked on \'Foo\'') },
          { text: 'Bar', onClick: () => window.alert('You clicked on \'Bar\'') },
          { text: 'baz', onClick: () => window.alert('You clicked on \'Baz\'') },
        ]}
      />
    </>
  )
}

export const ClickToLockOpen = () =>
  <>
    <p>
      Add the <code className="code">clickOpen</code> property to allow
      the dropdown to be &quot;locked&quot; open with a click.
    </p>
    <div className="flex space">
      <Dropdown
        text="Click to Lock Open"
        className="mar-b-12"
        iconLeft="badger"
        color="brown" solid
        clickOpen
      >
        <div className="menu nowrap pad">
          <Icon name="badger"  className="mar-h" fixedWidth/>
          <Icon name="badger2" className="mar-h" fixedWidth/>
          <Icon name="badger3" className="mar-h" fixedWidth/>
          Badger, badger, badger...
        </div>
      </Dropdown>
      <Dropdown
        text="Click to Lock Open"
        className="mar-b-12"
        iconLeft="badger"
        color="brown" solid
        clickOpen right
      >
        <div className="menu nowrap pad">
          <Icon name="badger"  className="mar-h" fixedWidth/>
          <Icon name="badger2" className="mar-h" fixedWidth/>
          <Icon name="badger3" className="mar-h" fixedWidth/>
          Badger, badger, badger...
        </div>
      </Dropdown>
    </div>
  </>

export const ClickToOpenAndClose = () =>
  <>
    <p>
      If you only want the dropdown to be opened or closed with a click
      then add the <code className="code">clickOpen</code> property and
      set <code className="code">hoverOpen</code> to be false.
    </p>
    <div className="flex space">
      <Dropdown
        text="Click to Open/Close"
        className="mar-b-12"
        iconLeft="badger"
        color="brown" solid
        hoverOpen={false} clickOpen
      >
        <div className="menu nowrap pad">
          <Icon name="badger"  className="mar-h" fixedWidth/>
          <Icon name="badger2" className="mar-h" fixedWidth/>
          <Icon name="badger3" className="mar-h" fixedWidth/>
          Badger, badger, badger...
        </div>
      </Dropdown>
      <Dropdown
        text="Click to Open/Close"
        className="mar-b-12"
        iconLeft="badger"
        color="brown" solid
        hoverOpen={false} clickOpen
        right
      >
        <div className="menu nowrap pad">
          <Icon name="badger"  className="mar-h" fixedWidth/>
          <Icon name="badger2" className="mar-h" fixedWidth/>
          <Icon name="badger3" className="mar-h" fixedWidth/>
          Badger, badger, badger...
        </div>
      </Dropdown>
    </div>
  </>
