import { extract } from '@abw/badger-utils';
import React from 'react';
import { Search } from '../../Search'

const SearchInput = ({field}) =>
  <Search
    { ...extract(
      field,
      'value className placeholder minLength debounceTime onSearch onFocus onBlur renderResult displayValue'
    )
    }
    inputClass="inform"
    onSelect={field.onChangeValue}
    onClear={() => field.onChangeValue(undefined)}
    ref={field.setRef}
  />

export default SearchInput
