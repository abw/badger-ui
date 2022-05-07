import React from "react";
import { Button, Buttons } from "../../src/components/Button";
import { colors } from '../../src/config/colors'
import { sizes } from '../../src/config/sizes'
import { iconNames } from '../../src/config/iconNames'

export default {
  title: "Components/Button",
  component: Button,
  args: {
    text: 'Hello World',
  },
  argTypes: {
    type: {
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
      buttons in various colours.  The default outline button style
      can be changed to solid.  Icons can also be added.
    </p>
    <Button {...props} />
  </>

export const OutlineButtons = () =>
  <>
    <Button text="I am a button" />
    {colors.map(
      col => <Button key={col} text={`${col} button`} color={col} />
    )}
  </>

export const SolidButtons = () =>
  <>
    <Button text="I am a solid button" solid />
    {colors.map(
      col => <Button key={col} text={`solid ${col} button`} color={col} solid />
    )}
  </>

export const IconButtons = () =>
  <>
    <Button icon="warning" color="red" />
    <Button iconLeft="warning" color="green" text="warning" />
    <Button iconRight="warning" color="blue" text="warning" />
    <Button solid icon="warning" color="red" />
    <Button solid iconLeft="warning" color="green" text="warning" />
    <Button solid iconRight="warning" color="blue" text="warning" />
  </>

export const ButtonSets = () =>
  <>
    <Buttons buttons={[
      { iconLeft: "arrow-left", color: "red", text: "Left" },
      { icon: "arrow-up", color: "green" },
      { iconRight: "arrow-right", color: "blue", text: "Right" }
    ]} />
    <br />
    <Buttons buttons={[
      { iconLeft: "arrow-left", color: "red", text: "Left", solid: true },
      { icon: "arrow-up", color: "green" },
      { iconRight: "arrow-right", color: "blue", text: "Right", solid: true }
    ]} />
    <br />
    <Buttons solid buttons={[
      { iconLeft: "arrow-left", color: "red", text: "Left" },
      { icon: "arrow-up", color: "green" },
      { iconRight: "arrow-right", color: "blue", text: "Right" }
    ]} />
  </>

export const DisabledButton = () =>
  <>
    <Button
      iconLeft="arrow-left" color="red" text="Left" disabled={true}
    />
  </>
