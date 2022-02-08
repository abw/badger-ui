import React from 'react';
import Button from '../../src/components/Button'

export default {
  title: 'Styles/Bar'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Bar</h1>
  <p className="intro">
    The <code className="code">bar</code> class can be used to create
    navigation bars, buttons bars, and similar things were some content
    appears on the left (<code className="code">bar-left</code>) and some appears
    on the right (<code className="code">bar-right</code> ).
  </p>
</>

export const ButtonBar = () =>
  <div className="bar">
    <div className="bar-left">
      <Button text="Go Back" iconLeft="arrow-left"/>
    </div>
    <div className="bar-right">
      <Button text="Next Page" iconRight="arrow-right"/>
    </div>
  </div>
