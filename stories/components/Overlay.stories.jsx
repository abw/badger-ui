import React from 'react';
import { Overlay } from '../../src/components/Overlay';
import { Button } from '../../src/components/Button';

export default {
  title: 'Components/Overlay',
  component: Overlay,
}

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Content Overlay</h1>
  <p className="intro">
    The <code className="code">Overlay</code> component can be used
    to create an overlay to cover content.
  </p>
</>

export const WhiteOverlay = () => {
  const [overlay, showOverlay] = React.useState(false);
  return <div className="relative pad vh-20 border shade">
    <Button
      color="green" text="Show Overlay"
      onClick={() => showOverlay(true)}
    />
    {overlay &&
      <Overlay className="pad text-center">
        <h1>Hello World!</h1>
        <Button
          color="red" text="Hide Overlay"
          onClick={() => showOverlay(false)}
        />
      </Overlay>
    }
  </div>
}

export const BlackOverlay = () => {
  const [overlay, showOverlay] = React.useState(false);
  return <div className="relative pad vh-20 border shade">
    <Button
      color="green" text="Show Black Overlay" solid
      onClick={() => showOverlay(true)}
    />
    {overlay &&
      <Overlay className="pad text-center" color="black">
        <h1 className="white">Hello World!</h1>
        <Button
          color="red" text="Hide Overlay" solid
          onClick={() => showOverlay(false)}
        />
      </Overlay>
    }
  </div>
}
