import { range } from '../../utils'

export const paginate = ({rows, pageNo=1, pageSize=rows.length}) => {
  const total = rows.length;

  //console.log(
  //  "paginate(%s): total items %s, pageSize: %s  pageNo: %s ",
  //  msg||'default', total, pageSize, pageNo
  //);

  let firstIndex = pageSize * (pageNo - 1);
  let lastIndex  = firstIndex + pageSize;

  //console.log("paginating items from %s to %s", firstIndex, lastIndex);

  // NOTE: JS Array.slice(start, end) does NOT include the end item
  let items = rows.slice(firstIndex, lastIndex);

  // we may have got less than a whole page so we might as well re-calculate lastIndex
  lastIndex = firstIndex + items.length - 1;
  //console.log("sliced %s items, lastIndex is", items.length, lastIndex);

  const thisSize    = items.length;
  const onFirstPage = (pageNo === 1);
  const onLastPage  = (lastIndex >= total - 1);
  const lastPage    = Math.ceil(total / pageSize);
  let rangeFrom   = (pageNo > 1 ? pageNo - 1 : pageNo);
  let rangeTo     = (pageNo < lastPage ? pageNo + 1 : lastPage);

  // I think this is crazy logic to handle the case where page size is changed
  // and leaves the range sitting outside the number of rows.
  if (rangeTo - rangeFrom < 2) {
    if (rangeFrom > 1) {
      rangeFrom--;
    }
    else if (rangeTo < lastPage) {
      rangeTo++;
    }
  }
  if (rangeFrom > rangeTo) {
    rangeFrom = 0;
    rangeTo   = 0;
  }

  // There's a subtle bug here.  If you set page size to 10, for example,
  // and select page 8 for the last page of 85 results, then set page size
  // to 100.
  //console.log("FIXED rangeFrom: %s   rangeTo: %s", rangeFrom, rangeTo);

  return {
    rows:          items,
    from:          firstIndex + 1,
    to:            lastIndex + 1,
    size:          thisSize,
    total:         total,
    all:           onFirstPage && onLastPage,
    one:           (total === 1),
    none:          ! total,
    less:          ! onFirstPage,
    more:          ! onLastPage,
    pageNo:        pageNo,
    pageSize:      pageSize,
    thisPageSize:  thisSize,
    onFirstPage:   onFirstPage,
    onLastPage:    onLastPage,
    prevPage:      onFirstPage ? undefined : pageNo - 1,
    nextPage:      onLastPage ? undefined : pageNo + 1,
    lastPage:      lastPage,
    pageRange:     rangeFrom && rangeTo ? range(rangeFrom, rangeTo + 1) : [ ],
    showFirst:     rangeFrom > 1,
    showLast:      rangeTo < lastPage,
    separateFirst: rangeFrom - 1 > 1,
    separateLast:  lastPage - rangeTo > 1,
  };
}

export default paginate
