import React from 'react';
import { Icon, Icons, IconStack } from '../../src/components/Icon';
import icons from '../../src/config/icons.js'
import { sizes } from '../../src/config/sizes'

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    name: 'badger'
  },
  argTypes: {
    name: {
      options: Object.keys(icons),
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
  },

};

export const Overview = (props) => <>
  <h1 className="mar-t-none mar-l-none">Icons</h1>
  <p className="intro">
    The <code className="code">Icon</code> component is a custom component
    base on the <a href="https://fontawesome.com/">Font Awesome</a> React
    component.
  </p>
  <Icon {...props} />
  <p>
    The <code className="code">icons/config.yaml</code> configuration file
    defines the subset of Font Awesome icons that are included in our custom
    library.  You can add new icons by updating this file and then running
    the <code className="code">(npm|yarn|pnpm) icons</code> command.
  </p>
  <p>
    You can also add custom icons as SVG images and they will be automatically
    imported into the library.
  </p>

</>

const IconBlock = ({caption, ...props}) =>
  <div className="inline-block rounded border shade mar pad text-center">
    <Icon {...props}/>
    <div className="smaller mar-t">{caption}</div>
  </div>

const Block = ({name, caption, ...props}) =>
  <IconBlock caption={caption||name} name={name} size="x4" fixedWidth {...props}/>

export const AvailableIcons = () =>
  <>
    {Object.keys(icons).map(
      name => <Block key={`solid-${name}`} name={name} />
    )}
  </>

export const IconsComponent = () => <>
  <p className="mar-t-none pad-b-2">
    Use the <code className="code">Icons</code> component to stack two or more <code className="code">Icon</code> components.
  </p>
  <Icons className="fa-4x">
    <Icon name="circle" color="black" transform="grow-4" />
    <Icon name="cog spin" color="yellow"/>
  </Icons>
</>

export const IconStackComponent = () => <>
  <p className="mar-t-none pad-b-2">
    Use the <code className="code">IconStack</code> component as a short-hand.
  </p>
  <IconStack
    className="fa-4x"
    backIcon="circle" backColor="black" backTransform="grow-4"
    foreIcon="cog spin" foreColor="orange"
  />
</>

export const DuoTone = () =>
  <>
    <p className="mar-t-none pad-b-2">
      We now support duotone icons, and more generally icons with any number
      of paths, each of which can have different opacity.
    </p>
    <Icon name="badger-duo 4x" color="red"   className="mar-2"/>
    <Icon name="badger-duo 4x" color="green" className="mar-2"/>
    <Icon name="badger-duo 4x" color="blue"  className="mar-2"/>
    <br/>
    <Icon name="b-duo 4x"  color="red"    className="mar-2"/>
    <Icon name="b-duo 4x"  color="green"  className="mar-2"/>
    <Icon name="b-duo 4x"  color="blue"   className="mar-2"/>
  </>

export const Transforms = () =>
  <>
    <p className="mar-t-none pad-b-2">
      The <code className="code">transform</code> property can be used
      to transform an icon.  Use <code className="code">grow-N</code> or{' '}
      <code className="code">shrink-N</code> to change the size, where{' '}
      <code className="code">N</code> is any number.  The base size of an
      icon is 16, so <code className="code">grow-8</code> will make it
      1.5 times larger, <code className="code">group-16</code> will double
      the size, and so on.
    </p>
    <IconBlock caption="Normal"  name="radiation"/>
    <IconBlock caption="grow-8"  name="radiation" transform="grow-8"/>
    <IconBlock caption="grow-16" name="radiation" transform="grow-16"/>
    <IconBlock caption="Normal"  name="badger2"/>
    <IconBlock caption="grow-8"  name="badger2" transform="grow-8"/>
    <IconBlock caption="grow-16" name="badger2" transform="grow-16"/>
    <p>
      Use <code className="code">up-N</code>, <code className="code">down-N</code>,{' '}
      <code className="code">left-N</code> or <code className="code">right-N</code> to
      move the icon in that direction.
    </p>
    <IconBlock caption="left-16"  name="radiation" transform="left-16"/>
    <IconBlock caption="left-8"   name="radiation" transform="left-8"/>
    <IconBlock caption="Normal"   name="radiation"/>
    <IconBlock caption="right-8"  name="radiation" transform="right-8"/>
    <IconBlock caption="right-16" name="radiation" transform="right-16"/>
    <IconBlock caption="left-16"  name="badger2" transform="left-16"/>
    <IconBlock caption="left-8"   name="badger2" transform="left-8"/>
    <IconBlock caption="Normal"   name="badger2"/>
    <IconBlock caption="right-8"  name="badger2" transform="right-8"/>
    <IconBlock caption="right-16" name="badger2" transform="right-16"/>
    <br/>
    <IconBlock caption="up-16"   name="radiation" transform="up-16"/>
    <IconBlock caption="up-8"    name="radiation" transform="up-8"/>
    <IconBlock caption="Normal"  name="radiation"/>
    <IconBlock caption="down-8"  name="radiation" transform="down-8"/>
    <IconBlock caption="down-16" name="radiation" transform="down-16"/>
    <IconBlock caption="up-16"   name="badger2" transform="up-16"/>
    <IconBlock caption="up-8"    name="badger2" transform="up-8"/>
    <IconBlock caption="Normal"  name="badger2"/>
    <IconBlock caption="down-8"  name="badger2" transform="down-8"/>
    <IconBlock caption="down-16" name="badger2" transform="down-16"/>
    <br/>
    <IconBlock caption="normal"     name="arrow-right"/>
    <IconBlock caption="rotate-30"  name="arrow-right" transform="rotate-30"/>
    <IconBlock caption="rotate-60"  name="arrow-right" transform="rotate-60"/>
    <IconBlock caption="rotate-90"  name="arrow-right" transform="rotate-90"/>
    <IconBlock caption="rotate-120" name="arrow-right" transform="rotate-120"/>
    <IconBlock caption="rotate-150" name="arrow-right" transform="rotate-150"/>
    <IconBlock caption="rotate-180" name="arrow-right" transform="rotate-180"/>
  </>

export const Modifiers = () =>
  <>
    <p className="mar-t-none pad-b-2">
      Add <code className="code">spin</code> to the name as a short-hand for
      the <code className="code">spin</code> property.
      Add <code className="code">beat</code>,{' '}
      <code className="code">bounce</code>,{' '}
      <code className="code">flip</code> or {' '}
      <code className="code">shake</code> for other animations.
      These can be useful when
      you&apos;re defining an icon by name, e.g. in a button, checkbox, etc.
      You can also use <code className="code">flip-horizontal</code> and
      <code className="code">flip-vertical</code> to flip the icon,
      or <code className="code">rotate-90</code>, <code className="code">rotate-180</code>,
      and <code className="code">rotate-270</code> to rotate it.
    </p>
    <Icon name="b-duo 4x spin"   color="red"    className="mar-2"/>
    <Icon name="b-duo 4x beat"   color="orange" className="mar-2"/>
    <Icon name="b-duo 4x bounce" color="yellow" className="mar-2"/>
    <Icon name="b-duo 4x flip"   color="green"  className="mar-2"/>
    <Icon name="b-duo 4x shake"  color="blue"  className="mar-2"/>
    <br/>
    <Icon name="badger-duo 4x flip-horizontal" color="red"    className="mar-2"/>
    <Icon name="badger-duo 4x flip-vertical"   color="orange" className="mar-2"/>
    <Icon name="badger-duo 4x rotate-90"       color="yellow" className="mar-2"/>
    <Icon name="badger-duo 4x rotate-180"      color="green"  className="mar-2"/>
    <Icon name="badger-duo 4x rotate-270"      color="blue"   className="mar-2"/>
  </>

