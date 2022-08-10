import React from "react";
import { Alert, Info } from "../../src/components/Alert";
import { sizes, fasizes } from '../../src/config/sizes'
import { iconNames } from '../../src/config/iconNames'

export default {
  title: "Components/Alert",
  component: Alert,
  args: {
    headline: 'Alert Headline',
    headIcon: 'warning',
    text: 'Hello World',
    title: 'Alert Title',
    icon: 'cloop',
  },
  argTypes: {
    type: {
      options: ['info', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
    headline: {
    },
    headIcon: {
      options: iconNames,
      control: { type: 'select' },
    },
    text: {
    },
    title: {
    },
    icon: {
      options: iconNames,
      control: { type: 'select' },
    },
    iconSize: {
      options: fasizes,
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      control: { type: 'select' },
    },
  },
};
export const Example = (props) =>
  <>
    <h1 className="mar-t-none mar-l-none">Alert Boxes</h1>
    <p className="intro">
      The <code className="code">Alert</code> component renders an alert box in various styles.
    </p>
    <Alert {...props} />
    <div className="grid-2 gap-2">
      <Alert type="info"    text="Minimal Info"    stripe shadow className="small mar-v-none"/>
      <Alert type="success" text="Minimal Success" stripe shadow className="small mar-v-none"/>
      <Alert type="warning" text="Minimal Warning" stripe shadow className="small mar-v-none"/>
      <Alert type="error"   text="Minimal Error"   stripe shadow className="small mar-v-none"/>
    </div>
  </>

export const InfoAlert = () =>
  <>
    <Alert
      type="info"
      size="small"
      title="Simple Info Alert"
      text="This is an example of a small and simple info alert"
    />
    <Alert
      type="info"
      headline="Info Alert" headIcon="info"
      icon="info" title="Info Alert"
      text="This is an example of a more complex info alert"
    />
    <Info
      headline="Info Alert" headIcon="info"
      icon="info" title="Info Alert"
      text="This is an example of a more complex info alert"
    />
  </>

export const Success = () =>
  <>
    <Alert
      type="success"
      size="small"
      title="Simple Success Alert"
      text="This is an example of a small and simple success alert"
    />
    <Alert
      type="success"
      headline="Success Alert" headIcon="check"
      icon="ok" title="Success Alert"
      text="This is an example of a more complex success alert"
    />
  </>

export const Warning = () =>
  <>
    <Alert
      type="warning"
      size="small"
      title="Simple Warning Alert"
      text="This is an example of a small and simple warning alert"
    />
    <Alert
      type="warning"
      headline="Warning Alert" headIcon="warning"
      icon="alert" title="Warning Alert"
      text="This is an example of a warning alert"
    />
  </>

export const Error = () =>
  <>
    <Alert
      type="error"
      size="small"
      title="Simple Error Alert"
      text="This is an example of a small and simple error alert"
    />
    <Alert
      type="error"
      headline="Error Alert" headIcon="warning"
      icon="alert" title="Error Alert"
      text="This is an example of an error alert"
    />
  </>

export const Revealable = () =>
  <>
    <Alert
      type="info" revealable={true}
      headline="Revealable Alert" headIcon="info"
      icon="badger2" title="Mr Badger's Revealable Alert"
      text="This is an example of a revealable alert"
    />
  </>

export const Dismissable = () =>
  <>
    <Alert
      type="info" dismissable={true}
      headline="Dismissable Alert" headIcon="info"
      icon="badger2" title="Mr Badger's Dismissable Alert"
      text="This is an example of a dismissable alert"
    />
  </>

export const OnDismiss = () =>
  <>
    <Alert
      type="info" dismissable={true}
      headline="Dismissable Alert" headIcon="info"
      icon="badger2" title="Mr Badger's Dismissable Alert"
      text="This is an example of a dismissable alert with an onDismiss handler"
      onDismiss={() => window.alert("You can't dismiss me that easily!")}
    />
  </>

export const Stripe = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">stripe</code> property for a simpler style.
      These work well on grey backgrounds.
    </p>
    <div className="bg-grey-90 pad-2">
      <Alert
        className="small" stripe
        icon="cloop"
        title="Stripe Alert"
        text='This is an alert with the "stripe" property'
      />
      <Alert
        type="info"
        icon="info"
        className="small" stripe
        title="Stripe Info Alert"
        text='This is an info alert with the "stripe" property'
      />
      <Alert
        type="success"
        icon="ok"
        className="small" stripe
        title="Stripe Success Alert"
        text='This is a success alert with the "stripe" property'
      />
      <Alert
        type="warning"
        icon="alert"
        className="small" stripe
        title="Stripe Warning Alert"
        text='This is a warning alert with the "stripe" property'
      />
      <Alert
        type="error"
        icon="alert"
        className="small" stripe
        title="Stripe Error Alert"
        text='This is an error alert with the "stripe" property'
      />
    </div>

  </>

export const Shadow = () =>
  <>
    <p className="mar-t-none">
      Add the <code className="code">shadow</code> property for a subtle drop shadow.
      This works well with the <code className="code">strip</code> property on a white
      background to lift the alert up a little.
    </p>
    <Alert
      className="small" stripe shadow
      icon="cloop"
      title="Stripe Alert"
      text='This is an alert with the "stripe" and "shadow" properties'
    />
    <Alert
      type="info"
      icon="info"
      className="small" stripe shadow
      title="Stripe Info Alert"
      text='This is an info alert with the "stripe" and "shadow" properties'
    />
    <Alert
      type="success"
      icon="ok"
      className="small" stripe shadow
      title="Stripe Success Alert"
      text='This is a success alert with the "stripe" and "shadow" properties'
    />
    <Alert
      type="warning"
      icon="alert"
      className="small" stripe shadow
      title="Stripe Warning Alert"
      text='This is a warning alert with the "stripe" and "shadow" properties'
    />
    <Alert
      type="error"
      icon="alert"
      className="small" stripe shadow
      title="Stripe Error Alert"
      text='This is an error alert with the "stripe" and "shadow" properties'
    />
  </>

