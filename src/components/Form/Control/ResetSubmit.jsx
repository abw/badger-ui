import React from 'react'
import Reset from './Reset';
import Submit from './Submit';

const ResetSubmit = ({
  className="flex space stack-mobile mar-t",
  reset={},
  submit={},
  ...props
}) =>
  <div className={className}>
    <Reset  {...reset}/>
    <Submit {...submit}/>
  </div>

export default ResetSubmit
