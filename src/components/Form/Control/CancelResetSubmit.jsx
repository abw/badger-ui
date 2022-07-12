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
      <Cancel {...cancel} tabIndex="-1"/>
      <Reset  {...reset} tabIndex="-1"/>
    </div>
    <Submit {...submit}/>
  </div>

export default CancelResetSubmit
