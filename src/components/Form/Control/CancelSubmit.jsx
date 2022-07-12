import React from 'react'
import Button from '../../Button';
import Cancel from './Cancel';
import Submit from './Submit';

const CancelSubmit = ({
  className="flex start space stack-mobile mar-t",
  cancel={},
  submit={}
}) =>
  <div className={className}>
    <Cancel {...cancel}/>
    <Submit {...submit}/>
  </div>

export default CancelSubmit
