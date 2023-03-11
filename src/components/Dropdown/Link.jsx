import React from 'react'
import { Content } from './Content.jsx'
import { Link as DefaultLink } from '../Link/index.jsx'
import { Themed } from '../../utils/index.js';

const DropdownLink = ({
  Link,
  ...props
}) =>
  <Link {...props}>
    <Content {...props}/>
  </Link>

DropdownLink.defaultProps = {
  Link: DefaultLink,
};

export default Themed(DropdownLink, 'DropdownLink');
