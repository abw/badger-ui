import React from 'react';

export default {
  title: 'Styles/Typography'
};

export const Headings = () => <>
  <h1>h1: The Quick Brown Fox Jumped Over the Lazy Dog</h1>
  <h2>h2: The Quick Brown Fox Jumped Over the Lazy Dog</h2>
  <h3>h3: The Quick Brown Fox Jumped Over the Lazy Dog</h3>
  <h4>h4: The Quick Brown Fox Jumped Over the Lazy Dog</h4>
  <h5>h5: The Quick Brown Fox Jumped Over the Lazy Dog</h5>
  <h6>h6: The Quick Brown Fox Jumped Over the Lazy Dog</h6>
</>

export const BodyText = () => <>
  <p className="intro">
    This is a paragraph with the <code className="code">intro</code> class
    added.  It increases the text size a little to make the first paragraph
    stand out a bit more
  </p>
  <p>
    This is a regular paragraph.  Here is some <b>bold text</b> and here is some
    <i>italic text</i>.  The <code className="code">code</code> class can be
    added to render text in a monospaced font and some additional styling.
  </p>
</>
