import React from 'react';
import { Switch } from '../../src/components/Switch/index.jsx';

export default {
  title: 'Components/Switch',
  component: Switch,
}

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Switch</h1>
  <p className="intro">
    The <code className="code">Switch</code> component allows you to
    switch between two or more options.
  </p>
  <p>
    The <code>Switch()</code> function accepts an object contains{' '}
    <code className="code">options</code> and other properties including{' '}
    <code className="code">selectedColor</code>, <code className="code">unselectedColor</code>,
    <code className="code">selectedClass</code>, <code className="code">unselectedClass</code>{' '}
    and <code className="code">className</code>.
  </p>
  <p>
    It returns an array of two values.  The first is the currently selected
    value.  This can be set as the <code className="code">initialValue</code> or
    will default to the key of the first option in <code className="code">options</code>.
    The second is a component which can then be inserted anywhere in your
    code.  This component accepts a <code className="code">className</code> property
    if you want to override the default <code className="code">className</code>.
  </p>
</>

export const BasicSwitch = () => {
  const [selected, Component] = Switch({
    options: {
      foo: {
        text: 'The Foo Option'
      },
      bar: {
        text: 'The Bar Option'
      },
    }
  });
  return <>
    <Component/>
    <div>
      {selected} is selected
    </div>
  </>
}

export const SwitchWithStyling = () => {
  const [selected, Component] = Switch({
    options: {
      happy: {
        text: 'Happy',
        iconLeft: 'happy'
      },
      sad: {
        text: 'Sad',
        iconRight: 'sad'
      },
    },
    selectedColor: 'blue',
    selectedClass: 'shade',
    unselectedColor: 'grey',
    unselectedClass: 'solid',
    className: 'large mar-b-none'
  });
  return <>
    <p className="mar-t-none">
      A key feature is that the component can be inserted multiple times
      in a page and all instances will share state.  For example, you might want
      to have an option switch at the top of a page and again at the bottom, but
      you want them to have the same state.
    </p>
    <Component/>
    <div>
      {selected} is selected
    </div>
    <Component className="small"/>
  </>
}

export const SwitchWithMultipleOptions = () => {
  const [selected, Component] = Switch({
    options: {
      red: {
        text: 'Red',
        color: 'red'
      },
      orange: {
        text: 'Orange',
        color: 'orange'
      },
      yellow: {
        text: 'Yellow',
        color: 'yellow'
      },
      green: {
        text: 'Green',
        color: 'green'
      },
      blue: {
        text: 'Blue',
        color: 'blue'
      },
    },
  });
  return <>
    <p className="mar-t-none">
      You can provide additional button parameters for each option, e.g. to
      set the <code className="code">color</code>.
    </p>
    <Component/>
    <div>
      {selected} is selected
    </div>
  </>
}

export const SwitchWithStorageKey = () => {
  const [selected, Component] = Switch({
    options: {
      red: {
        text: 'Red',
        color: 'red'
      },
      orange: {
        text: 'Orange',
        color: 'orange'
      },
      yellow: {
        text: 'Yellow',
        color: 'yellow'
      },
      green: {
        text: 'Green',
        color: 'green'
      },
      blue: {
        text: 'Blue',
        color: 'blue'
      },
    },
    storageKey: 'favouriteColor'
  });
  return <>
    <p className="mar-t-none">
      You can provide a <code className="code">storageKey</code> property
      to have the selected option saved in local storage.  Try choosing a
      color below and then reload the page.  Your selection should be preserved.
    </p>
    <Component/>
    <div>
      {selected} is selected
    </div>
  </>
}
