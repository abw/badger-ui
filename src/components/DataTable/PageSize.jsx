import React from 'react'
import Context from './Context.jsx'
import { Checkbox } from '../Checkbox/index.jsx'
import { Dropdown } from '../Dropdown/index.jsx'

export const PageSize = ({
  page,
  setPageSize,
  solidButtons,
  dropdownColor
}) =>
  <Dropdown
    text={`${page.pageSize} per page`} right className="mar-r"
    solid={solidButtons} color={dropdownColor}
  >
    <div className="menu pad pad-b-none">
      { [10, 25, 50, 100, 250, 500, 1000].map(
        size => <Checkbox
          key={size} className="wide"
          text={`${size} per page`}
          value={size === page.pageSize}
          onChange={() => setPageSize(size)}
          checkedIcon="dotted" uncheckedIcon="undotted"
        />
      )}
    </div>
  </Dropdown>

export default Context.Consumer(PageSize)
