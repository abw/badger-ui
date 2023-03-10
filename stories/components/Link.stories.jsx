import React from 'react';
import { Link } from '../../src/components/Link';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Components/Link',
  component: Link,
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Link</h1>
  <p className="intro">
    This is a wrapper around the <code className="code">NavLink</code> component
    from React Router v6.  It adds some convenient functionality, e.g. to add icons.
  </p>
</>

export const DefaultExample = () =>
  <Router>
    <Link to="nowhere" text="Example Link" />
  </Router>

export const LinkWithLabel = () =>
  <Router>
    <Link to="nowhere" text="Example Link with Label" label="badger"/>
  </Router>

export const LinkWithIcons = () =>
  <Router>
    <Link to="nowhere" text="Example Link" iconLeft="badger2" iconRight="arrow-right" />
  </Router>

export const ButtonLink = () =>
  <Router>
    <Link to="nowhere" text="Button Link" className="solid green button" iconLeft="check" iconRight="arrow-right" />
  </Router>
