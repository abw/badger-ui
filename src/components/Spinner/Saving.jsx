import React from 'react'
import Loading from './Loading'
import { Themed } from '../../utils';

const Saving = (props) =>
  <Loading {...props} />

Saving.defaultProps = {
  color:   'orange',
  message: 'Saving...',
};

export default Themed(Saving, 'Saving')
