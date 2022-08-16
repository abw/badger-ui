import React from "react";
import { Tabset } from "../../src/components/Tabset";

export default {
  title: "Components/Tabset",
  component: Tabset,
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Tabset</h1>
  <p className="intro">
    The <code className="code">Tabset</code> component renders a tab set.
  </p>
</>

export const DefaultTabs = () => {
  const tabs = [
    { text: 'Badger', content: <>This is the badger content</> },
    { text: 'Cat',    content: <>This is the cat content</> },
    { text: 'User',   content: <>This is the user content</> }
  ];
  return <>
    <p className="mar-t-none">
      The <code className="code">tabs</code> property should be an
      array of tabs.  Each can contain some <code className="code">text</code> for
      the tab and <code className="code">content</code> for the body.
    </p>
    <Tabset tabs={tabs}/>
  </>
}

export const TabsWithBorder = () => {
  const tabs = [
    { text: 'Badger', content: <>This is the badger content</> },
    { text: 'Cat',    content: <>This is the cat content</> },
    { text: 'User',   content: <>This is the user content</> }
  ];
  return <>
    <p className="mar-t-none">
      Add the <code className="code">border</code> CSS class via
      the <code className="code">className</code> property to have
      a border displayed around the body content.
    </p>
    <Tabset tabs={tabs} className="border"/>
  </>
}

export const TabsOnRight = () => {
  const tabs = [
    { text: 'Badger', content: <>This is the badger content</> },
    { text: 'Cat',    content: <>This is the cat content</> },
    { text: 'User',   content: <>This is the user content</> }
  ];
  return <>
    <p className="mar-t-none">
      Add the <code className="code">right</code> CSS class via
      the <code className="code">className</code> property to have
      the tabs aligned to the right.
    </p>
    <Tabset tabs={tabs} className="right"/>
  </>
}

export const TabsOnRightWithBorder = () => {
  const tabs = [
    { text: 'Badger', content: <>This is the badger content</> },
    { text: 'Cat',    content: <>This is the cat content</> },
    { text: 'User',   content: <>This is the user content</> }
  ];
  return <>
    <p className="mar-t-none">
      Add the <code className="code">right border</code> CSS classes
      for tabs aligned right with a border around the body.
    </p>
    <Tabset tabs={tabs} className="right border"/>
  </>
}

export const TabsWithIconsOnLeft = () => {
  const tabs = [
    { iconLeft: 'badger', text: 'Badger', content: <>This is the badger content</> },
    { iconLeft: 'cat',    text: 'Cat',    content: <>This is the cat content</> },
    { iconLeft: 'user',   text: 'User',   content: <>This is the user content</> }
  ];
  return <>
    <p className="mar-t-none">
      Define the name of an icon in the <code className="code">iconLeft</code> item
      for a tab.
    </p>
    <Tabset tabs={tabs}/>
  </>
}

export const TabsWithIconsOnRight = () => {
  const tabs = [
    { iconRight: 'badger', text: 'Badger', content: <>This is the badger content</> },
    { iconRight: 'cat',    text: 'Cat',    content: <>This is the cat content</> },
    { iconRight: 'user',   text: 'User',   content: <>This is the user content</> }
  ];
  return <>
    <p className="mar-t-none">
      Define the name of an icon in the <code className="code">iconRight</code> item
      for a tab.
    </p>
    <Tabset tabs={tabs}/>
  </>
}

export const TabsWithJustAnIcon = () => {
  const tabs = [
    { icon: 'badger', content: <>This is the badger content</> },
    { icon: 'cat',    content: <>This is the cat content</> },
    { icon: 'user',   content: <>This is the user content</> }
  ];
  return <>
    <p className="mar-t-none">
      Define the name of an icon in the <code className="code">icon</code> item
      for a tab.
    </p>
    <Tabset tabs={tabs}/>
  </>
}
