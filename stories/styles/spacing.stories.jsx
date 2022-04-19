import React from 'react'
import { Button } from '../../src/components/Button'

export default {
  title: 'Styles/Spacing'
};

export const Overview = () =>
  <>
    <h1 className="mar-t-none mar-l-none">Element Spacing</h1>
    <p className="intro">
      Various utility classes for adding or removing spacing inside
      or around elements.
    </p>
  </>

export const Padding = () =>
  <>
    <p>
      The <code className="code">pad</code> class adds a single unit of padding
      (0.5rem) to each side of the element.
    </p>
    <p>
      A character can be added to designate which side or sides
      to apply padding to: <code className="code">pad-t</code> for the
      top, <code className="code">pad-b</code> for the bottom, <code className="code">pad-l</code>{' '}
      for the left and <code className="code">pad-r</code> for the right.{' '}
      <code className="code">pad-v</code> (&quot;v&quot; for &quot;vertical&quot;) applies it to both the top and bottom
      and <code className="code">pad-h</code> (&quot;h&quot; for &quot;horizontal&quot;) applies it to both the left and right.
      These will all add a single unit (0.5rem) of padding to the
      relevant side(s).
    </p>
    <p>
      A number can be added after that to specify the number of
      padding units.  e.g. <code className="code">pad-t-2</code> for 2 units on the
      top, <code className="code">pad-t-3</code> for 3, and so on.  A number can also be
      used to indicate all-round padding, e.g. <code className="code">pad-4</code>.
      Numbers range from 1 to 10 in units (1, 2, 3 ... 10), then from 12 to 20 by steps of 2
      (12, 14, 16, 18, 20), then from 24 to 40 in steps of 4 (24, 28, 32 ... 40).
    </p>
    <p>
      The <code className="code">-none</code> suffix can be used to remove any existing
      padding from any or all sides
    </p>
    <div className="bg-red white pad mar-b">
      There is one unit (0.5em) of padding all around this container element.
    </div>
    <div className="bg-orange white pad-t mar-b">
      There is one unit (0.5em) of padding on the top of this container element.
    </div>
    <div className="bg-yellow white pad-t pad-l-2 pad-r-3 pad-b-4 mar-b">
      There is one unit (0.5em) of padding on the top of this container element,
      two units (1em) on the left, three units (1.5em) on the right and
      4 units (2em) on the bottom.
    </div>
    <div className="bg-green white pad-v-3 pad-h-6 mar-b">
      There are three units (1.5em) of padding on the top and bottom of this container
      (vertically) and 6 units on the left and right (horizontally).
    </div>
    <div className="bg-blue white pad-4 mar-b">
      There are four units (2em) of padding all around.
    </div>
    <div className="bg-violet white pad-5 mar-b">
      There are five units (2.5em) of padding all around.
    </div>
    { [6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40].map(
      n => <div className={`bg-magenta white pad-l-${n} mar-b mar-r`}>
        pad-l-{n}
      </div>
    )}
    <Button solid text="Default Padding" />
    <Button solid className="pad-h-none" text="No Horiz." />
    <Button solid className="pad-none" text="No Padding" />
  </>

export const Margin = () =>
  <>
    <h3>Margin</h3>
    <p>
      The <code className="code">mar</code> class can be added to add a single
      unit of margin to all sides of the element.
    </p>
    <p>
      As with padding, you can specify sides to apply a margin to
      and the amount of margin units.  e.g. <code className="code">mar-b-3</code> to
      add 3 units (1.5rem) of padding to the bottom.
    </p>
    <div className="bg-red white mar-b">
      One unit of margin (0.5em) on the bottom.
    </div>
    <div className="bg-green white mar-b mar-l-4">
      One unit of margin (0.5em) on the bottom and
      4 units (2em) on the left.
    </div>
    <div className="bg-blue white mar-h-6">
      Six units of margin (3em) on the left and right
      side (horizontally).
    </div>
  </>

export const Gutters = () =>
  <>
    <h3>Gutters</h3>
    <p>
      Gutters are a special case of padding/margin used in conjunction
      with the <code className="code">split-N</code> grid classes.  A gutter is padding
      applied to either side (e.g. <code className="code">gut-r-N</code> or <code className="code">gut-l-N</code> which
      will be removed when the grid elements stack.
    </p>

    <h3>No Gutters</h3>
    <p>
      No spacing between columns.
    </p>
    <div className="row stack-desktop mar-b-2">
      <div className="split-2">
        <div className="bg-red white pad">
          split-2
        </div>
      </div>
      <div className="split-2">
        <div className="bg-blue white pad">
          split-2
        </div>
      </div>
    </div>

    <h3>With Padding</h3>
    <p>
      Padding for spacing, but remains when elements stack
      on smaller screens.
    </p>
    <p>
      Resize the browser window to see the effect.
    </p>
    <div className="row stack-desktop mar-b-2">
      <div className="split-2 pad-r">
        <div className="bg-red white pad">
          split-2 pad-r
        </div>
      </div>
      <div className="split-2 pad-l">
        <div className="bg-blue white pad">
          split-2 pad-l
        </div>
      </div>
    </div>

    <h3>With Gutters</h3>
    <p>
      Gutters for spacing, collapse when elements stack.
    </p>
    <div className="row stack-desktop">
      <div className="split-2 gut-r">
        <div className="bg-red white pad">
          split-2 gut-r
        </div>
      </div>
      <div className="split-2 gut-l">
        <div className="bg-blue white pad">
          split-2 gut-l
        </div>
      </div>
    </div>
  </>
