import React from 'react'
import { Content } from './Content'
import { Link as DefaultLink } from '../Link'
import { Themed } from '../../utils';

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
