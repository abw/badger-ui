import { extract } from '@abw/badger-utils';
import React from 'react';
import UIRadio from '../../Radio';

export const Radio = ({field}) =>
  <UIRadio
    { ...extract(
        field,
        "options value name disabled placeholder onFocus onBlur optionClass checkedIcon uncheckedIcon"
      )
    }
    onChange={option => field.onChangeValue(option.value)}
    className={`${field.className} radio`}
  />

export default Radio
