import React from 'react';
import { colors } from '../../src/config/colors'

export default {
  title: 'Styles/Label'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Label Style</h1>
  <p className="intro">
    Add the <code className="code">label</code> CSS class to create a small label,
    along with an optional color class.
  </p>
  <p>
    Also see the <code className="code">Label</code> React component which can add
    icons for you.
  </p>
</>

export const LabelColors = () => <>
  {colors.map(
    col => <span key={col} className={`label ${col}`}>{col} label</span>
  )}
</>;
