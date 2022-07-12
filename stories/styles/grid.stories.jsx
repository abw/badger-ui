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
      <code className="code">stack-tablet</code>, <code className="code">stack-laptop</code>, <code className="code">stack-desktop</code> or{' '}
      <code className="code">stack-widescreen</code> classes to the container to have the horizontal layout
      stack vertically for screen widths below the corresponding breakpoint.  Resize your
      browser window to see the layouts change in the examples below.
    </p>

    <h4><code className="code">grid-3 gap-2 stack-mobile</code> - <span className="mobile-width"></span></h4>
    <div className="grid-3 gap-2 stack-mobile mar-b-4">
      <div className="bg-red white pad">One</div>
      <div className="bg-brown white pad">Two</div>
      <div className="bg-orange white pad">Three</div>
    </div>

    <h4><code className="code">grid-3 gap-2 stack-tablet</code> - <span className="tablet-width"></span></h4>
    <div className="grid-3 gap-2 stack-tablet mar-b-4">
      <div className="bg-red white pad">One</div>
      <div className="bg-brown white pad">Two</div>
      <div className="bg-orange white pad">Three</div>
    </div>

    <h4><code className="code">grid-3 gap-2 stack-laptop</code> - <span className="laptop-width"></span></h4>
    <div className="grid-3 gap-2 stack-laptop mar-b-4">
      <div className="bg-red white pad">One</div>
      <div className="bg-brown white pad">Two</div>
      <div className="bg-orange white pad">Three</div>
    </div>

    <h4><code className="code">grid-3 gap-2 stack-desktop</code> - <span className="desktop-width"></span></h4>
    <div className="grid-3 gap-2 stack-desktop mar-b-4">
      <div className="bg-red white pad">One</div>
      <div className="bg-brown white pad">Two</div>
      <div className="bg-orange white pad">Three</div>
    </div>

    <h4><code className="code">grid-3 gap-2 stack-widescreen</code> - <span className="widescreen-width"></span></h4>
    <div className="grid-3 gap-2 stack-widescreen mar-b-2">
      <div className="bg-red white pad">One</div>
      <div className="bg-brown white pad">Two</div>
      <div className="bg-orange white pad">Three</div>
    </div>
  </>

export const StackingSplits = () =>
  <>
    <p className="mar-t-none">
      The <code className="code">stack-XXX</code> classes
      also work in conjunction with the <code className="code">split-XXX</code> classes.
      Use the <code className="code">gut-X</code> classes to add gutters (implemented as padding)
      between elements that will be removed when the elements stack.  This is a bit of a cludgy hack that
      was required before the gods of CSS blessed us with grids.  If you're writing new
      code then you're probably better off using the grid classes.
    </p>

    <h4><code className="code">row stack-mobile</code> - <span className="mobile-width"></span></h4>
    <div className="row stack-mobile mar-b-4">
      <div className="split-3 gut-r">
        <div className="bg-red white pad"><code className="code">split-3 gut-r</code></div>
      </div>
      <div className="split-3 gut-h">
        <div className="bg-brown white pad"><code className="code">split-3 gut-h</code></div>
      </div>
      <div className="split-3 gut-l">
        <div className="bg-orange white pad"><code className="code">split-3 gut-l</code></div>
      </div>
    </div>

    <h4><code className="code">row stack-tablet</code> - <span className="tablet-width"></span></h4>
    <div className="row stack-tablet mar-b-4">
      <div className="split-3 gut-r">
        <div className="bg-red white pad"><code className="code">split-3 gut-r</code></div>
      </div>
      <div className="split-3 gut-h">
        <div className="bg-brown white pad"><code className="code">split-3 gut-h</code></div>
      </div>
      <div className="split-3 gut-l">
        <div className="bg-orange white pad"><code className="code">split-3 gut-l</code></div>
      </div>
    </div>

    <h4><code className="code">row stack-laptop</code> - <span className="laptop-width"></span></h4>
    <div className="row stack-laptop mar-b-4">
      <div className="split-3 gut-r">
        <div className="bg-red white pad"><code className="code">split-3 gut-r</code></div>
      </div>
      <div className="split-3 gut-h">
        <div className="bg-brown white pad"><code className="code">split-3 gut-h</code></div>
      </div>
      <div className="split-3 gut-l">
        <div className="bg-orange white pad"><code className="code">split-3 gut-l</code></div>
      </div>
    </div>

    <h4><code className="code">row stack-desktop</code> - <span className="desktop-width"></span></h4>
    <div className="row stack-desktop mar-b-4">
      <div className="split-3 gut-r">
        <div className="bg-red white pad"><code className="code">split-3 gut-r</code></div>
      </div>
      <div className="split-3 gut-h">
        <div className="bg-brown white pad"><code className="code">split-3 gut-h</code></div>
      </div>
      <div className="split-3 gut-l">
        <div className="bg-orange white pad"><code className="code">split-3 gut-l</code></div>
      </div>
    </div>

    <h4><code className="code">row stack-widescreen</code> - <span className="widescreen-width"></span></h4>
    <div className="row stack-widescreen mar-b-4">
      <div className="split-3 gut-r">
        <div className="bg-red white pad"><code className="code">split-3 gut-r</code></div>
      </div>
      <div className="split-3 gut-h">
        <div className="bg-brown white pad"><code className="code">split-3 gut-h</code></div>
      </div>
      <div className="split-3 gut-l">
        <div className="bg-orange white pad"><code className="code">split-3 gut-l</code></div>
      </div>
    </div>
  </>
