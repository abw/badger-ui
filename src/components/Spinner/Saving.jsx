import React from 'react'
import Loading from './Loading.jsx'
import { Themed } from '../../utils/index.js';

const Saving = (props) =>
  <Loading {...props} />

Saving.defaultProps = {
  color:   'orange',
  message: 'Saving...',
};

export default Themed(Saving, 'Saving')
