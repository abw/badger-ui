import React from 'react'
import Cancel from './Cancel.jsx';
import Reset from './Reset.jsx';
import Submit from './Submit.jsx';

const CancelResetSubmit = ({
  className='flex start space stack-mobile mar-t',
  cancel={},
  reset={},
  submit={},
}) =>
  <div className={className}>
    <div>
      <Cancel {...cancel}/>
      <Reset  {...reset}/>
    </div>
    <Submit {...submit}/>
  </div>

export default CancelResetSubmit
