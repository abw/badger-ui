import React from 'react'
import { Button } from '../Button'
import { Select } from '../Select'
import { commas } from '../../utils'
import FieldSelect from './FieldSelect'
import PageSize from './PageSize'

export const Summary = ({
  page,
  setPageSize,
  setPageNo,
  ...props
}) => {
  return <div className="summary">
    { page.less
      ? <Button
          className="paginate prev"
          aria-label="Goto previous page"
          icon="arrow-left"
          color="blue"
          onClick={() => setPageNo(page.prevPage)}
        />
      : <Button
          className="paginate prev disabled"
          aria-label="Goto previous page"
          icon="arrow-left"
          color="smoke"
          disabled={true}
        />
    }
    <div className="page-no">
      Page {page.pageNo} of {page.lastPage}
    </div>
    <div className="page-records">
      { page.none ? <span>There are no records to display</span>
      : page.one  ? <span>Showing the only record</span>
      : page.all  ? <span>Showing all {commas(page.total)} records</span>
      :             <span>Showing {page.size} of {commas(page.total)} records from {commas(page.from)} to {commas(page.to)}</span>
      }
    </div>
    <div className="field-select">
      <FieldSelect {...props}/>
    </div>
    <div className="page-size">
      <PageSize page={page} setPageSize={setPageSize}/>
    </div>
    { page.more
      ? <Button
          className="paginate next"
          aria-label="Goto next page"
          icon="arrow-right"
          color="blue"
          onClick={() => setPageNo(page.nextPage)}
        />
      : <Button
          className="paginate prev disabled"
          aria-label="Goto next page"
          icon="arrow-right"
          color="smoke"
          disabled={true}
        />
    }
  </div>
}

export default Summary
