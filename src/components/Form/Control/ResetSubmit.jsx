import React from 'react'
import Reset from './Reset';
import Submit from './Submit';

const ResetSubmit = ({
  className='flex start space stack-mobile mar-t',
  reset={},
  submit={},
}) =>
  <div className={className}>
    <Reset  {...reset}/>
    <Submit {...submit}/>
  </div>

export default ResetSubmit
