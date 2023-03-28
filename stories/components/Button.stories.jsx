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
    <div className="pad-2">
      <Button text="Outline button" />
      {colors.map(
        col => <Button key={col} text={`Outline ${col} outline button`} color={col} />
      )}
    </div>
    <div className="bg-grey-30 pad-2">
      <Button text="Outline button" />
      {colors.map(
        col => <Button key={col} text={`Outline ${col} outline button`} color={col} />
      )}
    </div>
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
      the <code className="code">shade</code> property to add some subtle shading
      to the buttons.  The default amount is a respectable 5% but you
      can change that using the <code className="code">$button-shade-amount</code> SASS
      configuration option.  The default angle is 175 degrees (almost straight
      down but slightly to the right), which you can change with
      the <code className="code">$button-shade-angle</code> option.
    </p>
    <p>
      If you don&apos;t think you&apos;ll use shaded buttons then you can set
      the <code className="code">$include-button-shade</code> SASS
      option to <code className="code">false</code> to avoid generating the
      CSS for them.
    </p>

    <Button text="Shade button" shade />
    {colors.map(
      col => <Button key={col} text={`Shade ${col} button`} color={col} shade />
    )}
  </>

export const GradientButtons = () =>
  <>
    <p>
      What&apos;s that you say?  Shading is out and gradients are in?
      Add the <code className="code">gradient</code> property to add a gradient
      to the buttons.  The default hue shift is a 15deg but you
      can change that using the <code className="code">$button-gradient-hue-shift</code> SASS
      configuration option.  The default angle is 145 degrees (down and to the
      right), which you can change with
      the <code className="code">$button-gradient-angle</code> option.
    </p>
    <p>
      If you think gradient buttons are far too new-fangled and modern then
      you can set the <code className="code">$include-button-gradient</code> SASS
      option to <code className="code">false</code> and save yourself a bit of
      generated CSS.
    </p>
    <Button text="Gradient button" gradient />
    {colors.map(
      col => <Button key={col} text={`Gradient ${col} button`} color={col} gradient />
    )}
  </>

export const RoundedButtons = () =>
  <>
    <p>
      Add the <code className="code">round</code> property for rounded buttons.
    </p>
    <div className="row stack-tablet">
      <div className="split-4">
        <Button text="Round" round />
      </div>
      <div className="split-4">
        <Button text="Round solid" round solid />
      </div>
      <div className="split-4">
        <Button text="Round shade" round shade />
      </div>
      <div className="split-4">
        <Button text="Round gradient" round gradient />
      </div>
    </div>
    {colors.map(
      col =>
        <div key={col} className="row stack-tablet">
          <div className="split-4">
            <Button key={col} text={`Round ${col}`} color={col} round/>
          </div>
          <div className="split-4">
            <Button key={col} text={`Round ${col} solid`} color={col} round solid/>
          </div>
          <div className="split-4">
            <Button key={col} text={`Round ${col} shade`} color={col} round shade/>
          </div>
          <div className="split-4">
            <Button key={col} text={`Round ${col} gradient`} color={col} round gradient/>
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

export const ButtonSets = () =>
  <>
    <p className="mar-t-none pad-b-2">
      Use the <code className="code">Buttons</code> component with an
      array of <code className="code">buttons</code> to create a button set.
      You can add any of the <code className="code">color</code>,{' '}
      <code className="code">solid</code>,{' '}
      <code className="code">shade</code> or <code className="code">round</code>{' '}
      properties to the <code className="code">Buttons</code> component to have
      those styles applied to the buttons in it.  Or you can apply them to
      the buttons on an individual basis.
    </p>
    <Buttons
      color="red"
      buttons={[
        { iconLeft: 'arrow-left', text: 'Left' },
        { icon: 'arrow-up' },
        { iconRight: 'arrow-right', text: 'Right' }
      ]}
    />
    <br />
    <Buttons
      color="magenta" round
      buttons={[
        { iconLeft: 'arrow-left', text: 'Left' },
        { icon: 'arrow-up' },
        { iconRight: 'arrow-right', text: 'Right' }
      ]}
    />
    <br />
    <Buttons
      color="brown" solid
      buttons={[
        { iconLeft: 'arrow-left', text: 'Left' },
        { icon: 'arrow-up' },
        { iconRight: 'arrow-right', text: 'Right' }
      ]}
    />
    <br />
    <Buttons
      color="orange" shade
      buttons={[
        { iconLeft: 'arrow-left', text: 'Left' },
        { icon: 'arrow-up' },
        { iconRight: 'arrow-right', text: 'Right' }
      ]}
    />
    <br />
    <Buttons
      color="blue" gradient
      buttons={[
        { iconLeft: 'arrow-left', text: 'Left' },
        { icon: 'arrow-up' },
        { iconRight: 'arrow-right', text: 'Right' }
      ]}
    />
    <br />
    <Buttons
      color="teal" round solid
      buttons={[
        { iconLeft: 'arrow-left', text: 'Left' },
        { icon: 'arrow-up' },
        { iconRight: 'arrow-right', text: 'Right' }
      ]}
    />
    <br />
    <Buttons solid buttons={[
      { iconLeft: 'arrow-left', color: 'red', text: 'Left' },
      { icon: 'arrow-up', color: 'green' },
      { iconRight: 'arrow-right', color: 'blue', text: 'Right' }
    ]} />
    <br />
    <Buttons shade buttons={[
      { iconLeft: 'arrow-left', color: 'red', text: 'Left', round: true },
      { icon: 'arrow-up', color: 'green' },
      { iconRight: 'arrow-right', color: 'blue', text: 'Right' }
    ]} />
  </>

