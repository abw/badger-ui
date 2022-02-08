import React from 'react';
import { range } from '../../src/utils'
import { colors } from '../../src/config/colors';

export default {
  title: 'Styles/Grid'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Grid Layout</h1>
  <p className="intro">
    These classes are useful for those times when you want to divide
    a container into an even number of parts.  You can use the slightly
    hacky old <code className="code">split-N</code> classes or the spangly
    new <code className="code">grid-N</code> classes which use CSS grid layout.
  </p>
</>

export const EvenSplits = () => <>
  {range(2, 17).map(
    split => <div key={split} className="row mar-b">
      {range(0, split).map(
        n => <div key={`${n}-${split}`} className={`split-${split} bg-${colors[n % colors.length]} white pad-h`}>
          split-{split}
        </div>
      )}
    </div>
  )}
</>

export const UnevenSplits = () => <>
  <div className="row mar-b">
    <div className="split-3 bg-red white pad-h">split-3</div>
    <div className="split-2-3 bg-brown white pad-h">split-2-3</div>
  </div>
  <div className="row mar-b">
    <div className="split-4 bg-red white pad-h">split-4</div>
    <div className="split-3-4 bg-orange white pad-h">split-3-4</div>
  </div>
  <div className="row mar-b">
    <div className="split-5 bg-red white pad-h">split-5</div>
    <div className="split-4-5 bg-yellow white pad-h">split-4-5</div>
  </div>
  <div className="row mar-b">
    <div className="split-2-5 bg-red white pad-h">split-2-5</div>
    <div className="split-3-5 bg-yellow white pad-h">split-3-5</div>
  </div>
  <div className="row mar-b">
    <div className="split-6 bg-red white pad-h">split-6</div>
    <div className="split-5-6 bg-olive white pad-h">split-5-6</div>
  </div>
  <div className="row mar-b">
    <div className="split-7 bg-red white pad-h">split-7</div>
    <div className="split-6-7 bg-green white pad-h">split-6-7</div>
  </div>
  <div className="row mar-b">
    <div className="split-2-7 bg-red white pad-h">split-2-7</div>
    <div className="split-5-7 bg-green white pad-h">split-5-7</div>
  </div>
  <div className="row mar-b">
    <div className="split-3-7 bg-red white pad-h">split-3-7</div>
    <div className="split-4-7 bg-green white pad-h">split-3-7</div>
  </div>
  <div className="row mar-b">
    <div className="split-8 bg-red white pad-h">split-8</div>
    <div className="split-7-8 bg-teal white pad-h">split-7-8</div>
  </div>
  <div className="row mar-b">
    <div className="split-3-8 bg-red white pad-h">split-3-8</div>
    <div className="split-5-8 bg-teal white pad-h">split-5-8</div>
  </div>
  <div className="row mar-b">
    <div className="split-9 bg-red white pad-h">split-9</div>
    <div className="split-8-9 bg-blue white pad-h">split-8-9</div>
  </div>
  <div className="row mar-b">
    <div className="split-2-9 bg-red white pad-h">split-2-9</div>
    <div className="split-7-9 bg-blue white pad-h">split-7-9</div>
  </div>
  <div className="row mar-b">
    <div className="split-4-9 bg-red white pad-h">split-4-9</div>
    <div className="split-5-9 bg-blue white pad-h">split-5-9</div>
  </div>
  <div className="row mar-b">
    <div className="split-10 bg-red white pad-h">split-10</div>
    <div className="split-9-10 bg-navy white pad-h">split-9-10</div>
  </div>
  <div className="row mar-b">
    <div className="split-3-10 bg-red white pad-h">split-3-10</div>
    <div className="split-7-10 bg-navy white pad-h">split-7-10</div>
  </div>
</>

export const GridLayout = () =>
  <>
    <p className="mar-t-none">
      Use the <code className="code">grid-N</code> classes to display content as a
      grid of N elements across.  Hurrah for grid layout properly supported in CSS!
    </p>
    {range(2, 10).map(
      split => <div key={split} className={`grid-${split}`}>
        {range(0, split).map(
          n => <div key={`${n}-${split}`} className={`bg-${colors[n % colors.length]} white pad-h`}>
            grid-{split}
          </div>
        )}
      </div>
    )}
  </>

export const GridGaps = () =>
  <>
    <p className="mar-t-none">
      Use the <code className="code">gap-N</code> classes to set the horizontal (column)
      and vertical (row) gaps to be N units of 0.5rem.
    </p>
    <div className="grid-3 gap-1">
      <div className="bg-red white pad-h">    grid-3 gap-1</div>
      <div className="bg-brown white pad-h"> grid-3 gap-1</div>
      <div className="bg-orange white pad-h"> grid-3 gap-1</div>
    </div>
    <div className="grid-3 gap-2">
      <div className="bg-red white pad-h">    grid-3 gap-2</div>
      <div className="bg-brown white pad-h"> grid-3 gap-2</div>
      <div className="bg-orange white pad-h"> grid-3 gap-2</div>
    </div>
    <div className="grid-3 gap-3">
      <div className="bg-red white pad-h">    grid-3 gap-3</div>
      <div className="bg-brown white pad-h"> grid-3 gap-3</div>
      <div className="bg-orange white pad-h"> grid-3 gap-3</div>
    </div>
    <div className="grid-3 gap-4">
      <div className="bg-red white pad-h">    grid-3 gap-4</div>
      <div className="bg-brown white pad-h"> grid-3 gap-4</div>
      <div className="bg-orange white pad-h"> grid-3 gap-4</div>
    </div>
    <div className="text-center pad">...and so on..</div>
    <div className="grid-3 gap-16">
      <div className="bg-red white pad-h">    grid-3 gap-16</div>
      <div className="bg-brown white pad-h"> grid-3 gap-16</div>
      <div className="bg-orange white pad-h"> grid-3 gap-16</div>
    </div>
  </>

export const ColumnAndRowGaps = () =>
  <>
    <p className="mar-t-none">
      Use the <code className="code">gap-h-N</code> classes to set the horizontal (column) gap
      to be N units of 0.5rem and <code className="code">gap-v-N</code> for the vertical
      (row) gap.
    </p>
    <div className="grid-3 gap-h-1 gap-v-3">
      <div className="bg-red white pad-h">    grid-3 gap-h-1 gap-v-3</div>
      <div className="bg-brown white pad-h"> grid-3 gap-h-1 gap-v-3</div>
      <div className="bg-orange white pad-h"> grid-3 gap-h-1 gap-v-3</div>
      <div className="bg-red white pad-h">    grid-3 gap-h-1 gap-v-3</div>
      <div className="bg-brown white pad-h"> grid-3 gap-h-1 gap-v-3</div>
      <div className="bg-orange white pad-h"> grid-3 gap-h-1 gap-v-3</div>
    </div>
  </>

export const StackingGrids = () =>
  <>
    <p className="mar-t-none">
      Add any of the <code className="code">stack-mobile</code>,{' '}
      <code className="code">stack-tablet</code>, <code className="code">stack-desktop</code> or{' '}
      <code className="code">stack-widescreen</code> classes to have the horizontal layout
      stack vertically for screen widths below the corresponding breakpoint.  Resize your
      browser window to see the layouts change in the examples below.
    </p>
    <div className="grid-3 gap-2 stack-mobile mar-b-4">
      <div className="bg-red white pad-h">    grid-3 gap-2 stack-mobile</div>
      <div className="bg-brown white pad-h"> grid-3 gap-2 stack-mobile</div>
      <div className="bg-orange white pad-h"> grid-3 gap-2 stack-mobile</div>
    </div>
    <div className="grid-3 gap-2 stack-tablet mar-b-4">
      <div className="bg-yellow white pad-h"> grid-3 gap-2 stack-tablet</div>
      <div className="bg-olive white pad-h"> grid-3 gap-2 stack-tablet</div>
      <div className="bg-green white pad-h"> grid-3 gap-2 stack-tablet</div>
    </div>
    <div className="grid-3 gap-2 stack-desktop mar-b-4">
      <div className="bg-teal white pad-h"> grid-3 gap-2 stack-desktop</div>
      <div className="bg-blue white pad-h"> grid-3 gap-2 stack-desktop</div>
      <div className="bg-navy white pad-h"> grid-3 gap-2 stack-desktop</div>
    </div>
    <div className="grid-3 gap-2 stack-widescreen mar-b-2">
      <div className="bg-indigo white pad-h"> grid-3 gap-2 stack-widescreen</div>
      <div className="bg-violet white pad-h"> grid-3 gap-2 stack-widescreen</div>
      <div className="bg-magenta white pad-h"> grid-3 gap-2 stack-widescreen</div>
    </div>
  </>
