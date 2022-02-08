import React from 'react'
import { Button } from '../Button'

const Pagination = ({page, setPageNo}) => <div className="pagination">
  <div className="prev">
  { page.less &&
      <Button
        className="paginate-prev"
        aria-label="Goto previous page"
        iconLeft="arrow-left"
        color="blue"
        text="Previous"
        onClick={() => setPageNo(page.prevPage)}
      />
  }
  </div>
  <div className="list">
  { page.showFirst &&
      <Button
        className="link"
        aria-label="Goto page 1"
        color="teal"
        text="1"
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
        color={pageNo === page.pageNo ? 'black' : 'teal'}
        text={pageNo.toString()}
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
      color="teal"
      text={page.lastPage.toString()}
      onClick={() => setPageNo(page.lastPage)}
    />
  }
  </div>
  <div className="next">
  { page.more &&
      <Button
        className="next"
        aria-label="Goto next page"
        iconRight="arrow-right"
        color="blue"
        text="Next page"
        onClick={() => setPageNo(page.nextPage)}
    />
  }
  </div>
</div>

export default Pagination
