import React from 'react';
import { isDefined } from '../../../utils'

export const Static = ({field}) =>
  <div className={`input static ${field.className||''}`}>
    {isDefined(field.value) ? field.value : ''}
  </div>

export default Static
