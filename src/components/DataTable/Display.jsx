import React from 'react'
import { isDefined, pounds, commas, capitalize, price, Themed } from '../../utils'
import { Label } from '../Label'

export const displayText = ({value}) =>
  isDefined(value) ? value : '';

export const displayNumber = ({value}) =>
  isDefined(value) ? commas(value) : '';

export const displayPounds = ({value}) =>
  isDefined(value) ? pounds(value) : '';

export const displayPrice = ({value}) =>
  isDefined(value) ? price(value) : '';

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
