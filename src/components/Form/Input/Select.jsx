import React from 'react';
import UISelect from '../../Select';
import { extract } from '@abw/badger-utils';

export const Select = ({field})=>
  <UISelect
    { ...extract(
      field,
      'value options name disabled placeholder onFocus onBlur'
    )
    }
    onChange={option => field.onChangeValue(option.value)}
    className={`${field.className} select`}
  />

export default Select
