import React from 'react';
import { Spinner, Loader, Loading, Saving } from '../../src/components/Spinner';
import { sizes } from '../../src/config/sizes'
import { iconNames } from '../../src/config/iconNames'
import { colors } from '../../src/config/colors'

export default {
  title: 'Components/Spinner',
  component: Spinner,
  args: {
  },
  argTypes: {
    icon: {
      options: iconNames,
      description: 'Icon to display in spinner',
      control: { type: 'select' },
    },
    size: {
      options: sizes,
      description: 'Spinner size',
      control: { type: 'select' },
    },
    color: {
      options: colors,
      description: 'Icon color',
      control: { type: 'select' },
    },
    bgColor: {
      options: colors,
      description: 'Background color',
      control: { type: 'select' },
    },
  },
};

export const Overview = (props) => <>
  <h1 className="mar-t-none mar-l-none">Spinner</h1>
  <p className="intro">
    The <code className="code">Spinner</code> component spins an icon.
    The <code className="code">Loader</code> component displays a spinner
    with a message.
    The <code className="code">Loading</code> and
    The <code className="code">Saving</code> components are instances
    of the <code className="code">Loader</code> that default the message
    to &quot;Loading...&quot; or &quot;Saving...&quot; respectively.
  </p>
  <Spinner {...props} />
</>

export const SimpleSpinner = () =>
  <Spinner />

export const CustomSpinners = () =>
  <div className="text-center">
    <div className="pad-v">
      <Spinner size="large" />
    </div>
    <div className="pad-v">
      <Spinner size="larger" icon="radiation" bgColor="yellow" color="black" />
    </div>
    <div className="pad-v">
      <Spinner size="largest" icon="asterisk" transform="shrink-1" bgColor="red" color="white" />
    </div>
  </div>

export const LoadingMessage = () =>
  <Loading />

export const CustomLoadingMessage = () =>
  <Loading
    overlayColor="black"
    color="green"
    icon="cat"
    transform="shrink-2"
    message="Cat in the Washing Machine"
  />


export const SavingMessage = () =>
  <Saving />

export const CustomLoading = () =>
  <Loading
    message="Working..."
    color="red" icon="radiation"
    className="large border bg-pale-red"
    textSize="smallish"
  />

export const CustomLoader = () =>
  <div className="relative outline pad-4">
    <h1 className="text-center">Loader Overlay</h1>
    <Loader
      message="Spinny" textSize="small" icon="radiation"
      overlayColor="black" color="black" bgColor="orange"
    />
  </div>
