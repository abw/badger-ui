import React from 'react'
import { isDefined, pounds, commas, capitalize, price } from '../../utils'
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

export const displayBoolean = ({value}) =>
  value
    ? <Label iconLeft="check-circle" color="green" text="Yes" className="small wide outline"/>
    : <Label iconLeft="times-circle" color="red" text="No"    className="small wide outline"/>

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
