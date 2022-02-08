import React from 'react';
import { Search } from '../../Search'

const SearchInput = ({field}) =>
  <Search
    inputClass="inform"
    value={field.value}
    className={field.className}
    placeholder={field.placeholder}
    minLength={field.minLength}
    debounceTime={field.debounceTime}
    onSearch={field.onSearch}
    renderResult={field.renderResult}
    displayValue={field.displayValue}
    onSelect={field.onChangeValue}
    onFocus={field.onFocus}
    onBlur={field.onBlur}
    onClear={() => field.onChangeValue(undefined)}
    ref={field.setRef}
/>

export default SearchInput
