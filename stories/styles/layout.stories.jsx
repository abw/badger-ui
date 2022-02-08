import React from 'react';
import { Button } from '../../src/components/Button'

export default {
  title: 'Styles/Layout'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Layout Styles</h1>
  <p className="intro">
    Various utility classes for common layout styles.
  </p>
</>

export const TextAlignment = () =>
  <>
    <p>
      Use the <code className="code">text-left</code>, <code className="code">text-center</code> and {' '}
      <code className="code">text-right</code> classes
      to align text to the left, centre or right of an element.  We would like to
      apologise for the incorrect spelling of &quot;centre&quot;.  As with &quot;color&quot;, it&apos;s what CSS
      uses and it avoids confusion in the long run.
    </p>
    <div className="text-left bg-red white pad mar-b">text-left</div>
    <div className="text-center bg-brown white pad mar-b">text-center</div>
    <div className="text-right bg-orange white pad mar-b">text-right</div>
  </>

export const DisplayStyles = () =>
  <>
    <p>
      Use the <code className="code">inline</code>, <code className="code">block</code> and {' '}
      <code className="code">inline-block</code> utility classes to to set the <code className="code">display</code> property
      to force an element to display as an inline, block or inline-block element.  Then
      take a shower because you feel dirty.
    </p>
    <div className="mar-b-2">
      <div className="inline bg-red white pad">This is an <code className="code">inline</code> div</div>
      <div className="inline bg-orange white pad">This is an <code className="code">inline</code> div</div>
    </div>
    <span className="block bg-yellow white pad mar-b-2">This is displayed as a <code className="code">block</code> even though it&apos;s an inline element</span>
    <span className="inline-block bg-green white pad">This is an <code className="code">inline-block</code></span>
    <span className="inline-block bg-blue white pad">So is this</span>
  </>

export const BlockAlignment = () =>
  <>
    <p>
      Use the <code className="code">block-left</code>, <code className="code">block-center</code> and {' '}
      <code className="code">block-right</code> classes
      to align a block to the left, centre or right.  Note that you must also provide a class
      or other styling that sets the block width.  In this example we&apos;re using <code className="code">split-2</code> to
      set the width to 50%.
    </p>
    <div className="block-left   split-2 pad bg-red white">Left aligned block</div>
    <div className="block-center split-2 pad bg-orange white">Centre aligned block</div>
    <div className="block-right  split-2 pad bg-yellow white">Right aligned block</div>
  </>;

export const FloatAlignment = () =>
  <>
    <p>
      Use the <code className="code">float-left</code> and <code className="code">float-right</code> classes
      to float an element to the left or right.  You can use <code className="code">float-none</code> if
      an element is already floating and you want to explicitly stop it.
    </p>
    <p>
      The <code className="code">clear-left</code>, <code className="code">clear-right</code> and {' '}
      <code className="code">clear-both</code> classes
      can be used to clear an element on the left, right or both sides after floating elements.
    </p>
    <p>
      Now that your boat is floating, you might want to go and read
      about Flexbox which is often a better approach
      when you want items aligned in a particular way.
    </p>
    <div className="float-left  pad bg-red white">Left floated block</div>
    <div className="float-right pad bg-orange white">Right floated block</div>
    <div className="clear-right pad float-right bg-yellow white">Yellow</div>
    <div className="float-right pad bg-green white">Green</div>
    <div className="clear-right pad float-right bg-blue white">Blue</div>
  </>

export const Positioning = () =>
  <>
    <p>
      The <code className="code">relative</code>, <code className="code">absolute</code> and <code className="code">fixed</code> utility
      classed can be used to set how an element is positioned.
    </p>
    <p>
      The <code className="code">top</code>, <code className="code">bottom</code>, <code className="code">left</code> and <code className="code">right</code> classes
      can be used to position absolute elements relative to their container.
    </p>
    <div className="relative border shade" style={{ height: '140px' }}>
      <div className="absolute top left white bg-orange pad">Top Left</div>
      <div className="absolute top right white bg-orange pad">Top Right</div>
      <div className="absolute bottom left white bg-orange pad">Bottom Left</div>
      <div className="absolute bottom right white bg-orange pad">Bottom Right</div>
    </div>
  </>

export const ThinAndWide = () =>
  <>
    <p>
      The <code className="code">thin</code> class sets an element&apos;s width to 600px or the
      full width of the container (whichever is smaller) and aligns
      it to the centre of the container.  This is typically used for narrow
      forms that you want in the centre of the page (e.g. login forms).
    </p>
    <p className="thin bg-blue white pad">This is thin</p>
    <p>
      The <code className="code">wide</code> class sets an element&apos;s width to 100%.  This is
      particularly useful for buttons, inputs, etc., that you want to span
      the whole width of the container.
    </p>
    <Button color="red" text="Normal Button" />
    <Button color="green" className="wide" text="Wide Button" />
  </>
