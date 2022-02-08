import React from 'react';

export default {
  title: 'Styles/Sizes'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Sizes</h1>
  <p className="intro">
    Various utility classes for setting the size of text and other
    elements.
  </p>
</>

export const TextSizes = () =>
  <>
    <p className="smallest">Smallest text</p>
    <p className="smaller">Smaller text</p>
    <p className="small">Small text</p>
    <p className="smallish">Smallish text</p>
    <p>Normal size text</p>
    <p className="largish">Largish text</p>
    <p className="large">Large text</p>
    <p className="larger">Larger text</p>
    <p className="largest">Largest text</p>
  </>

export const SizeMultipliers = () =>
  <>
    <div className="x2">x2</div>
    <div className="x3">x3</div>
    <div className="x4">x4</div>
    <div className="x5">x5</div>
    <div className="x6">x6</div>
    <div className="x7">x7</div>
    <div className="x8">x8</div>
    <div className="x9">x9</div>
    <div className="x10">x10</div>
  </>
