import React from 'react';

export default {
  title: 'Styles/Tooltips'
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Tooltip</h1>
</>

export const Tooltip = () =>
  <>
    <p>
      Add the <code className="code">tooltip</code> class to an element along
      with <code className="code">left</code>, <code className="code">top</code>,{' '}
      <code className="code">bottom</code> or <code className="code">right</code> to specify
      the position.
      Define the tooltip text as the <code className="code">data-text</code> attribute.
    </p>
    <div className="text-center">
      <span
        data-text="This is a tooltip on the top"
        className="tooltip top"
      >Top tooltip</span>
      <br/>
      <span
        data-text="This is a tooltip on the left"
        className="tooltip left"
      >Left tooltip</span> &nbsp;
      <span
        data-text="This is a tooltip on the right"
        className="tooltip right"
      >Right tooltip</span>
      <br/>
      <span
        data-text="This is a tooltip on the bottom"
        className="tooltip bottom"
      >Bottom tooltip</span>
    </div>
  </>
