import React from 'react'
import Cancel from './Cancel.jsx';
import Submit from './Submit.jsx';

const CancelSubmit = ({
  className='flex start space stack-mobile mar-t',
  cancel={},
  submit={}
}) =>
  <div className={className}>
    <Cancel {...cancel}/>
    <Submit {...submit}/>
  </div>

export default CancelSubmit
