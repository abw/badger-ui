import React from 'react';

export default {
  title: 'Styles/Breakpoints'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Breakpoints</h1>
  <p className="intro">
    Add the <code className="code">mobile</code>, <code className="code">tablet</code>,{' '}
    <code className="code">desktop</code> or <code className="code">widescreen</code> classes
    to set an element to be no wider than the corresponding breakpoint.
  </p>
</>

export const Breakpoints = () => <>
  <div className="widescreen bg-red pad-2 white">
    widescreen <span className="widescreen-width"></span>
  </div>
  <div className="desktop bg-brown pad-2 white">
    desktop <span className="desktop-width"></span>
  </div>
  <div className="tablet bg-orange pad-2 white">
    tablet <span className="tablet-width"></span>
  </div>
  <div className="mobile bg-yellow pad-2 white">
    mobile <span className="mobile-width"></span>
  </div>
  <div className="potato bg-green pad-2 white">
    potato <span className="potato-width"></span>
  </div>
</>

export const CenterElements = () => <>
  <div className="widescreen bg-red pad-2 white center">
    widescreen center <span className="widescreen-width"></span>
  </div>
  <div className="desktop bg-brown pad-2 white center">
    desktop center <span className="desktop-width"></span>
  </div>
  <div className="tablet bg-orange pad-2 white center">
    tablet center <span className="tablet-width"></span>
  </div>
  <div className="mobile bg-yellow pad-2 white center">
    mobile center <span className="mobile-width"></span>
  </div>
  <div className="potato bg-green pad-2 white center">
    potato center <span className="potato-width"></span>
  </div>
</>
