import React from 'react';

export default {
  title: 'Styles/Breakpoints'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Breakpoints</h1>
  <p className="intro">
    The following breakpoints are defined.
  </p>
  <table className="compact celled detail table">
    <tbody>
      <tr>
        <td className="key">mobile</td>
        <td className="mobile-width"></td>
      </tr>
      <tr>
        <td className="key">tablet</td>
        <td className="tablet-width"></td>
      </tr>
      <tr>
        <td className="key">laptop</td>
        <td className="laptop-width"></td>
      </tr>
      <tr>
        <td className="key">desktop</td>
        <td className="desktop-width"></td>
      </tr>
      <tr>
        <td className="key">widescreen</td>
        <td className="widescreen-width"></td>
      </tr>
    </tbody>
  </table>
</>

export const Breakpoints = () => <>
  <p>
    Add the <code className="code">mobile</code>, <code className="code">tablet</code>,{' '}
    <code className="code">laptop</code>, <code className="code">desktop</code> or <code className="code">widescreen</code> classes
    to set an element to be no wider than the corresponding breakpoint.
  </p>
  <div className="widescreen bg-red pad-2 white">
    widescreen <span className="widescreen-width"></span>
  </div>
  <div className="desktop bg-brown pad-2 white">
    desktop <span className="desktop-width"></span>
  </div>
  <div className="laptop bg-orange pad-2 white">
    laptop <span className="laptop-width"></span>
  </div>
  <div className="tablet bg-yellow pad-2 white">
    tablet <span className="tablet-width"></span>
  </div>
  <div className="mobile bg-green pad-2 white">
    mobile <span className="mobile-width"></span>
  </div>
</>

export const CenterElements = () => <>
  <p>
    Add the <code className="code">center</code> class
    to have it centered horizontally.
  </p>

  <div className="widescreen bg-red pad-2 white center">
    widescreen center <span className="widescreen-width"></span>
  </div>
  <div className="desktop bg-brown pad-2 white center">
    desktop center <span className="desktop-width"></span>
  </div>
  <div className="laptop bg-orange pad-2 white center">
    laptop center <span className="laptop-width"></span>
  </div>
  <div className="tablet bg-yellow pad-2 white center">
    tablet center <span className="tablet-width"></span>
  </div>
  <div className="mobile bg-green pad-2 white center">
    mobile center <span className="mobile-width"></span>
  </div>
</>

export const VisibleAndHiddenElements = () => <>
  <p>
    Add the <code className="code">lt-&lt;breakpoint&gt;</code> class
    to an element to have it only appear when the screen width is less than
    or equal to the breakpoint size.
  </p>
  <p>
    Add the <code className="code">gt-&lt;breakpoint&gt;</code> class
    if you only want it to appear when the screen width is greater than
    the breakpoint size.
  </p>
  <div className="row">
    <div className="split-2 gut-r">
      <h2>Less than...</h2>
      <div className="lt-mobile bg-red pad-2 white center">
        <code className="code">lt-mobile</code>
        less than mobile <span className="mobile-width"></span>
      </div>
      <div className="lt-tablet bg-brown pad-2 white center">
        <code className="code">lt-tablet</code>
        less than tablet <span className="tablet-width"></span>
      </div>
      <div className="lt-laptop bg-orange pad-2 white center">
        <code className="code">lt-laptop</code>
        less than laptop <span className="laptop-width"></span>
      </div>
      <div className="lt-desktop bg-yellow pad-2 white center">
        <code className="code">lt-desktop</code>
        less than desktop <span className="desktop-width"></span>
      </div>
      <div className="lt-widescreen bg-green pad-2 white center">
        <code className="code">lt-widescreen</code>
        less than widescreen <span className="widescreen-width"></span>
      </div>
    </div>
    <div className="split-2 gut-l">
      <h2>Greater than...</h2>
      <div className="gt-mobile bg-red pad-2 white center">
        <code className="code">gt-mobile</code>
        greater than mobile <span className="mobile-width"></span>
      </div>
      <div className="gt-tablet bg-brown pad-2 white center">
        <code className="code">gt-tablet</code>
        greater than tablet <span className="tablet-width"></span>
      </div>
      <div className="gt-laptop bg-orange pad-2 white center">
        <code className="code">gt-laptop</code>
        greater than laptop <span className="laptop-width"></span>
      </div>
      <div className="gt-desktop bg-yellow pad-2 white center">
        <code className="code">gt-desktop</code>
        greater than desktop <span className="desktop-width"></span>
      </div>
      <div className="gt-widescreen bg-green pad-2 white center">
        <code className="code">gt-widescreen</code>
        greater than widescreen <span className="widescreen-width"></span>
      </div>
    </div>
  </div>
</>
