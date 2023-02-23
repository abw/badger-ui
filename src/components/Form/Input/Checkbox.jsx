import React from 'react';
import UICheckbox from '../../Checkbox'
import { extract } from '@abw/badger-utils';

export const Checkbox = ({field}) =>
  <UICheckbox
    { ...extract(
        field,
        "name text disabled className onFocus onBlur checkedText uncheckedText checkedIcon uncheckedIcon"
      )
    }
    value={field.value ? true : false}
    onChange={checked => field.onChangeValue(checked ? 1 : 0)}
  />

export default Checkbox
