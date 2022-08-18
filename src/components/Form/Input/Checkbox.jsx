import React from 'react';
import UICheckbox from '../../Checkbox'
import { objSubset } from '@abw/badger-utils';

export const Checkbox = ({field}) =>
  <UICheckbox
    { ...objSubset(
        field,
        "name text disabled className onFocus onBlur checkedIcon uncheckedIcon"
      )
    }
    value={field.value ? true : false}
    onChange={checked => field.onChangeValue(checked ? 1 : 0)}
  />

export default Checkbox
