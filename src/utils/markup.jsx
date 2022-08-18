import React from 'react'
import { currency, splitLines } from '@abw/badger-utils'
export {
  capitalize, capitalizeWords,
  inflect, Inflect, pluralise,
  commas, currency, splitLines
} from '@abw/badger-utils'

export const Paragraphs = ({text, className="", firstClass=""}) => <>
  { splitLines(text).map(
      (para, n) => <p key={n} className={n===0 ? firstClass : className}>{para}</p>
  )}
</>

export const pounds = n =>
  currency(n, { locale: 'en-GB', currency: 'GBP', maximumFractionDigits: 0 })
