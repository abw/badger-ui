import React from 'react';
import { Button, Buttons } from '../../src/components/Button';
import { colors } from '../../src/config/colors'
import { sizes } from '../../src/config/sizes'
import { iconNames } from '../../src/config/iconNames'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    text: 'Hello World',
  },
  argTypes: {
    type: {
      description: 'type attribute for the button element',
      control: { type: 'select' },
      options: ['button', 'submit', 'reset']
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
    outline: {
      control: 'boolean',
    },
    solid: {
      control: 'boolean',
    },
    shade: {
      control: 'boolean',
    },
    text: {
    },
    icon: {
      options: iconNames,
      control: { type: 'select' },
    },
    iconLeft: {
      options: iconNames,
      control: { type: 'select' },
    },
    iconRight: {
      options: iconNames,
      control: { type: 'select' },
    },
    disabled: {
    },
    tabIndex: {
    }
  },
};
export const Example = (props) =>
  <>
    <h1 className="mar-t-none mar-l-none">Buttons</h1>
    <p className="intro">
      The <code className="code">Button</code> component renders
      buttons in various colours.
    </p>
    <Button {...props} />
  </>

export const OutlineButtons = () =>
  <>
    <p>
      The default style is outlined.  You can explicitly set this style
      (e.g. if you&apos;ve themed your buttons to be solid by default) with
      the <code className="code">outline</code> property.  You can customise
      almost any element of the button style using{' '}
      <a href="https://github.com/abw/badger-ui/blob/master/src/styles/config/components/button.scss">SASS variables</a>,
      including
      <code className="code">$button-pad-v</code> (vertical padding),{' '}
      <code className="code">$button-pad-h</code> (horizontal padding),
      <code className="code">$button-radius</code> (corner radius),{' '}
      <code className="code">$button-border-width</code>
      <code className="code">$button-text-shadow</code> and more.
    </p>
    <Button text="Outline button" />
    {colors.map(
      col => <Button key={col} text={`Outline ${col} outline button`} color={col} />
    )}
  </>

export const SolidButtons = () =>
  <>
    <p>
      Add the <code className="code">solid</code> property for solid buttons.
      Note that the yellow and olive buttons use black text instead of white
      to increase contrast.
    </p>
    <Button text="Solid button" solid />
    {colors.map(
      col => <Button key={col} text={`Solid ${col} button`} color={col} solid />
    )}
  </>

export const ShadeButtons = () =>
  <>
    <p>
      Flat design has dominated the web for the last ten years or so.  So
      it&apos;s only a matter of time until everyone starts putting shading
      back on their buttons.  Be ahead of the curve with
      the <code className="code">shade</code> property to add a subtle gradient
      to the buttons.  The default amount is a respectably subtle 5% but you
      can change that using the <code className="code">$button-shade-amount</code> SASS
      configuration option.  The default angle is 175 degrees (almost straight
      down but slightly to the right), which you can change with
      the <code className="code">$button-shade-angle</code> option.
    </p>
    <Button text="Shaded button" shade />
    {colors.map(
      col => <Button key={col} text={`Shaded ${col} button`} color={col} shade />
    )}
  </>

export const RoundedButtons = () =>
  <>
    <p>
      Add the <code className="code">round</code> property for rounded buttons.
    </p>
    <div className="row stack-tablet">
      <div className="split-3">
        <Button text="Round button" round />
      </div>
      <div className="split-3">
        <Button text="Round solid button" round solid />
      </div>
      <div className="split-3">
        <Button text="Round shade button" round shade />
      </div>
    </div>
    {colors.map(
      col =>
        <div key={col} className="row stack-tablet">
          <div className="split-3">
            <Button key={col} text={`Round ${col} button`} color={col} round/>
          </div>
          <div className="split-3">
            <Button key={col} text={`Round ${col} solid button`} color={col} round solid/>
          </div>
          <div className="split-3">
            <Button key={col} text={`Round ${col} shade button`} color={col} round shade/>
          </div>
        </div>
    )}
  </>

export const IconButtons = () =>
  <>
    <p className="mar-t-none pad-b-2">
      Use the <code className="code">icon</code> property for an icon-only
      button, <code className="code">iconLeft</code> for an icon on the left
      and/or <code className="code">iconRight</code> for an icon on the right.
      You can add animation modifiers like <code className="code">flip</code>,{' '}
      <code className="code">bounce</code> and <code className="code">spin</code>{' '}
      after the icon name.
    </p>
    <Button icon="warning" color="red" />
    <Button iconLeft="warning" color="green" text="warning" />
    <Button iconRight="warning" color="blue" text="warning" />
    <Button solid icon="warning" color="red" />
    <Button solid iconLeft="warning flip" color="orange" text="warning" />
    <Button solid iconRight="warning bounce" color="orange" text="warning" />
    <Button solid iconRight="radiation spin" color="green" text="Saving"/>
  </>

export const ButtonSets = () =>
  <>
    <p className="mar-t-none pad-b-2">
      Use the <code className="code">Buttons</code> component with an
      array of <code className="code">buttons</code> to create a button set.
      You can add any of the <code className="code">solid</code>,{' '}
      <code className="code">shade</code> or <code className="code">round</code>{' '}
      properties to the <code className="code">Buttons</code> component to have
      those styles applied to the buttons in it.
    </p>
    <Buttons buttons={[
      { iconLeft: 'arrow-left', color: 'red', text: 'Left' },
      { icon: 'arrow-up', color: 'green' },
      { iconRight: 'arrow-right', color: 'blue', text: 'Right' }
    ]} />
    <br />
    <Buttons buttons={[
      { iconLeft: 'arrow-left', color: 'red', text: 'Left', solid: true },
      { icon: 'arrow-up', color: 'green' },
      { iconRight: 'arrow-right', color: 'blue', text: 'Right', solid: true }
    ]} />
    <br />
    <Buttons solid buttons={[
      { iconLeft: 'arrow-left', color: 'red', text: 'Left' },
      { icon: 'arrow-up', color: 'green' },
      { iconRight: 'arrow-right', color: 'blue', text: 'Right' }
    ]} />
    <br />
    <Buttons shade buttons={[
      { iconLeft: 'arrow-left', color: 'red', text: 'Left' },
      { icon: 'arrow-up', color: 'green' },
      { iconRight: 'arrow-right', color: 'blue', text: 'Right' }
    ]} />
    <br/>
    <Buttons solid round buttons={[
      { iconLeft: 'arrow-left', color: 'red', text: 'Left' },
      { icon: 'arrow-up', color: 'green' },
      { iconRight: 'arrow-right', color: 'blue', text: 'Right' }
    ]} />
  </>

export const DisabledButton = () =>
  <>
    <p className="mar-t-none pad-b-2">
      Add the <code className="code">disabled</code> property to disable
      a button
    </p>

    <Button
      iconLeft="alert" color="red" text="Disabled Outline" disabled={true}
    />
    <Button
      iconLeft="alert" color="red" text="Disabled Solid" solid disabled={true}
    />
    <Button
      iconLeft="alert" color="red" text="Disabled Shade" shade disabled={true}
    />
  </>
