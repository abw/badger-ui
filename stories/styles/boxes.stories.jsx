import React from 'react';

export default {
  title: 'Styles/Boxes'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Boxes, Border and Shading</h1>
  <p className="intro">
    Some utility classes for defining boxed areas.
  </p>
</>

export const BoxClasses = () => <>
  <div className="row mar-b-2">
    <div className="split-3 gut-r">
      <div className="border text-center pad">border</div>
    </div>
    <div className="split-3 gut-h">
      <div className="shade text-center pad">shade</div>
    </div>
    <div className="split-3 gut-l">
      <div className="border shade text-center pad">border shade</div>
    </div>
  </div>
  <div className="row mar-b-2">
    <div className="split-3 gut-r">
      <div className="rounded border text-center pad">rounded border</div>
    </div>
    <div className="split-3 gut-h">
      <div className="rounded shade text-center pad">rounded shade</div>
    </div>
    <div className="split-3 gut-l">
      <div className="rounded border shade text-center pad">rounded border shade</div>
    </div>
  </div>
</>


export const FeedbackClasses = () => <>
  <div className="row mar-b-2">
    <div className="split-3 gut-r">
      <div className="text-center pad positive">positive</div>
    </div>
    <div className="split-3 gut-h">
      <div className="text-center pad negative">negative</div>
    </div>
    <div className="split-3 gut-l">
      <div className="text-center pad saving">saving</div>
    </div>
  </div>
  <div className="row">
    <div className="split-3 gut-r">
      <div className="text-center pad border positive">positive border</div>
    </div>
    <div className="split-3 gut-h">
      <div className="text-center pad border negative">negative border</div>
    </div>
    <div className="split-3 gut-l">
      <div className="text-center pad border saving">saving border</div>
    </div>
  </div>
</>;
