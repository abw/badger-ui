import React from 'react'
import Loader from './Loader'
import { Themed } from '../../utils';

const Loading = ({
  className='',
  ...props
}) =>
  <div className={`loader-buffer ${className}`}>
    <Loader {...props}/>
  </div>

Loading.defaultProps = {
  message: 'Loading...',
};

export default Themed(Loading, 'Loading')
