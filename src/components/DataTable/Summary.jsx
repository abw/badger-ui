import React from 'react'
import FieldSelect from './FieldSelect.jsx'
import PageSize from './PageSize.jsx'
import Context from './Context.jsx'
import { commas } from '@abw/badger-utils'
import { Button } from '../Button/index.jsx'
import { Themed } from '../../utils/index.js'

const Summary = ({
  page,
  setPageNo,
  prevIcon='arrow-left',
  prevColor='blue',
  nextIcon='arrow-right',
  nextColor='blue',
  disabledColor='smoke',
  solidButtons=false,
  summaryClass='',
}) => {
  return <div className={`summary ${summaryClass}`}>
    { page.less
      ? <Button
          className="paginate prev"
          aria-label="Goto previous page"
          icon={prevIcon}
          color={prevColor}
          solid={solidButtons}
          onClick={() => setPageNo(page.prevPage)}
        />
      : <Button
          className="paginate prev disabled"
          aria-label="Goto previous page"
          icon={prevIcon}
          color={disabledColor}
          disabled={true}
          solid={solidButtons}
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
      <FieldSelect/>
    </div>
    <div className="page-size">
      <PageSize/>
    </div>
    { page.more
      ? <Button
          className="paginate next"
          aria-label="Goto next page"
          icon={nextIcon}
          color={nextColor}
          solid={solidButtons}
          onClick={() => setPageNo(page.nextPage)}
        />
      : <Button
          className="paginate prev disabled"
          aria-label="Goto next page"
          icon={nextIcon}
          color={disabledColor}
          disabled={true}
          solid={solidButtons}
        />
    }
  </div>
}

export default Context.Consumer(
  Themed(Summary, 'DataTable')
)
