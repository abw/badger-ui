import React from "react";
import { Label } from "../../src/components/Label";
import { colors } from '../../src/config/colors'
import { iconNames } from '../../src/config/iconNames'

export default {
  title: "Components/Label",
  component: Label,
  args: {
    text: 'Hello World',
  },
  argTypes: {
    color: {
      options: colors,
      control: { type: 'select' },
    },
    text: {
    },
    iconLeft: {
      options: iconNames,
      control: { type: 'select' },
    },
    iconRight: {
      options: iconNames,
      control: { type: 'select' },
    },
  },
};

export const Example = (props) =>
  <>
    <h1 className="mar-t-none mar-l-none">Labels</h1>
    <p className="intro">
      The <code className="code">Label</code> component renders small
      labels in various colours, with options to include icons.
    </p>
    <Label {...props} />
  </>

export const ColouredLabels = () =>
  <>
    <Label text="Label" />
    {colors.map(
      col => <Label key={col} text={`${col} label`} color={col} />
    )}
  </>

export const LabelsWithIcons = () =>
  <>
    <Label text="Icon on Left" iconLeft="arrow-left" />
    <Label text="Icon on Right" iconRight="arrow-right" />
  </>
