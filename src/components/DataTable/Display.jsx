import React from 'react'
import { commas, capitalize, currency } from '@abw/badger-utils'
import { isDefined, pounds, Themed } from '../../utils/index.js'
import { Label } from '../Label/index.jsx'

export const displayText = ({value}) =>
  isDefined(value) ? value : '';

export const displayNumber = ({value}) =>
  isDefined(value) ? commas(value) : '';

export const displayPounds = ({value}) =>
  isDefined(value) ? pounds(value) : '';

export const displayPrice = ({value}) =>
  isDefined(value) ? currency(value) : '';

export const displayCapitalized = ({value}) =>
  isDefined(value) ? capitalize(value) : '';

export const displayBoolean = Themed(
  ({value,
    trueIcon='check-circle',
    trueColor='green',
    trueText='Yes',
    falseIcon='times-circle',
    falseColor='red',
    falseText='No',
    booleanClass='small wide outline'
  }) => (
    value
      ? <Label iconLeft={trueIcon}  color={trueColor}  text={trueText}  className={booleanClass}/>
      : <Label iconLeft={falseIcon} color={falseColor} text={falseText} className={booleanClass}/>
  ),
  'DataTable'
)

export const displayTypes = {
  default:    displayText,
  text:       displayText,
  number:     displayNumber,
  price:      displayPrice,
  pounds:     displayPounds,
  boolean:    displayBoolean,
  capitalize: displayCapitalized,
};

export default displayTypes
