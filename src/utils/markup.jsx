import React from 'react'
import { splitParas } from '@abw/badger-utils'
export {
  capitalize, capitalizeWords,
  inflect, Inflect, pluralise,
  commas, price, priceOrPOA, priceOrZero, pounds, splitParas
} from '@abw/badger-utils'

export const Paragraphs = ({text, className="", firstClass=""}) => <>
  { splitParas(text).map(
      (para, n) => <p key={n} className={n===0 ? firstClass : className}>{para}</p>
  )}
</>
