import React from 'react'
import Cancel from './Cancel';
import Reset from './Reset';
import Submit from './Submit';

const CancelResetSubmit = ({
  className="flex space stack-mobile mar-t",
  cancel={},
  reset={},
  submit={},
  ...props
}) =>
  <div className={className}>
    <div>
      <Cancel {...cancel}/>
      <Reset  {...reset}/>
    </div>
    <Submit {...submit}/>
  </div>

export default CancelResetSubmit
