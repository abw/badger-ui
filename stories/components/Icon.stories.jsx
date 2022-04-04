import React from 'react';
import { Icon, Icons, IconStack } from '../../src/components/Icon';
import { iconSets } from '../../src/config/iconNames'

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Icons</h1>
  <p className="intro">
    The <code className="code">Icon</code> component is a wrapper around
    the <a href="https://fontawesome.com/">Font Awesome</a> React component.
  </p>
  <p>
    The <code className="code">icons/config.yaml</code> configuration file
    defines the subset of Font Awesome icons that are included in our custom
    library.  You can add new icons by updating this file and then running
    the <code className="code">yarn icons</code> command.
  </p>
  <p>
    You can also add custom icons as SVG images and they will be automatically
    imported into the library.
  </p>

</>

const Block = ({ name, regular = undefined }) => <div className="inline-block rounded border shade mar pad text-center">
  <Icon name={name} size="4x" fixedWidth regular={regular} />
  <div className="smaller mar-t">{name}</div>
</div>

export const SolidIcons = () =>
  <>
    {iconSets.solid.map(
      name => <Block key={`solid-${name}`} name={name} />
    )}
  </>

export const RegularIcons = () =>
  <>
    {iconSets.regular.map(
      name => <Block key={`regular-${name}`} name={name} regular />
    )}
  </>

export const CustomIcons = () =>
  <>
    {iconSets.custom.map(
      name => <Block key={`custom-${name}`} name={name} />
    )}
  </>

export const IconAliases = () =>
  <>
    {iconSets.alias.map(
      name => <Block key={`alias-${name}`} name={name} />
    )}
  </>

export const IconsComponent = () => <>
  <p className="mar-t-none pad-b-2">
    Use the <code className="code">Icons</code> component to stack two or more <code className="code">Icon</code> components.
  </p>
  <Icons className="fa-4x">
    <Icon name="circle" color="grey" transform="grow-4" />
    <Icon name="cloop" color="yellow" spin />
  </Icons>
</>

export const IconStackComponent = () => <>
  <p className="mar-t-none pad-b-2">
    Use the <code className="code">IconStack</code> component as a short-hand.
  </p>
  <IconStack
    className="fa-4x"
    backIcon="circle" backColor="grey" backTransform="grow-4"
    foreIcon="cloop" foreColor="orange" spin
  />
</>

export const Modifiers = () =>
  <>
    <p className="mar-t-none pad-b-2">
      Add <code className="code">spin</code> to the name as a short-hand for
      the <code className="code">spin</code> property.
      Add <code className="code">flip-h</code> as a short-hand for
      the <code className="code">flip="horizontal"</code>.
      These can be useful when
      you're defining an icon by name, e.g. in a button, checkbox, etc.
    </p>
    <Icon name="wrench" className="mar-r-2"/>
    <Icon name="wrench" flip="horizontal" className="mar-r-2"/>
    <Icon name="wrench flip-h" className="mar-r-2"/>
    <br/>
    <Icon name="cat" className="mar-r-2"/>
    <Icon name="cat" spin className="mar-r-2"/>
    <Icon name="cat spin" className="mar-r-2"/>
  </>

