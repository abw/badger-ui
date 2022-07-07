import React from 'react'
import { Checkbox } from '../Checkbox'
import { Dropdown } from '../Dropdown'
import Context from './Context'

export const PageSize = ({ page, setPageSize }) =>
  <Dropdown text={`${page.pageSize} per page`} right className="mar-r">
    <div className="menu pad pad-b-none">
    { [10, 25, 50, 100, 250, 500, 1000].map(
        size => <Checkbox
          key={size} className="wide"
          text={`${size} per page`}
          value={size === page.pageSize}
          onChange={checked => setPageSize(size)}
          checkedIcon="dotted" uncheckedIcon="undotted"
        />
    )}
    </div>
  </Dropdown>

export default Context.Consumer(PageSize)
