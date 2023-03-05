import React from 'react'
import { Themed } from '../../utils'
import { Button } from '../Button'
import Context from './Context'

const Pagination = ({
  page, setPageNo,
  prevIcon='arrow-left',
  prevColor='blue',
  prevText='Previous',
  pageColor='teal',
  thisPageColor='black',
  nextIcon='arrow-right',
  nextColor='blue',
  nextText='Next Page',
  solidButtons=false
}) =>
  <div className="pagination">
    <div className="prev">
      { page.less &&
        <Button
          className="paginate-prev"
          aria-label="Goto previous page"
          iconLeft={prevIcon}
          color={prevColor}
          text={prevText}
          solid={solidButtons}
          onClick={() => setPageNo(page.prevPage)}
        />
      }
    </div>
    <div className="list">
      { page.showFirst &&
        <Button
          className="link"
          aria-label="Goto page 1"
          color={pageColor}
          text="1"
          solid={solidButtons}
          onClick={() => setPageNo(1)}
        />
      }
      {page.separateFirst &&
      <span className="etc">&hellip;</span>
      }
      { page.pageRange && page.pageRange.map(
        pageNo => <Button
          key={pageNo}
          className="link"
          aria-label={`Goto page ${pageNo}`}
          color={pageNo === page.pageNo ? thisPageColor : pageColor}
          text={pageNo.toString()}
          solid={solidButtons}
          onClick={() => setPageNo(pageNo)}
        />
      )
      }
      { page.separateLast &&
      <span className="etc">&hellip;</span>
      }
      { page.showLast &&
      <Button
        className="link"
        aria-label={`Goto page ${page.lastPage}`}
        color={pageColor}
        text={page.lastPage.toString()}
        solid={solidButtons}
        onClick={() => setPageNo(page.lastPage)}
      />
      }
    </div>
    <div className="next">
      { page.more &&
        <Button
          className="next"
          aria-label="Goto next page"
          iconRight={nextIcon}
          color={nextColor}
          text={nextText}
          solid={solidButtons}
          onClick={() => setPageNo(page.nextPage)}
        />
      }
    </div>
  </div>

export default Context.Consumer(
  Themed(Pagination, 'DataTable')
);
