import React from 'react'
import Field from './Field/index.jsx'
import { splitToList } from '../../utils/index.js'

export const Fields = ({names}) =>
  <>
    { splitToList(names).map(
      name => <Field key={name} name={name}/>
    )}
  </>

export const TwoFields = ({className='', names}) => {
  const name = splitToList(names);
  return <div className={`row ${className}`}>
    <div className="split-2 gut-r">
      <Field name={name[0]}/>
    </div>
    <div className="split-2 gut-l">
      <Field name={name[1]}/>
    </div>
  </div>
}

export const ThreeFields = ({className='', names}) => {
  const name = splitToList(names);
  return <div className={`row ${className}`}>
    <div className="split-3 gut-r">
      <Field name={name[0]}/>
    </div>
    <div className="split-3 gut-h">
      <Field name={name[1]}/>
    </div>
    <div className="split-3 gut-l">
      <Field name={name[2]}/>
    </div>
  </div>
}

export const FourFields = ({className='', names}) => {
  const name = splitToList(names);
  return <div className={`row ${className}`}>
    <div className="split-4 gut-r">
      <Field name={name[0]}/>
    </div>
    <div className="split-4 gut-h">
      <Field name={name[1]}/>
    </div>
    <div className="split-4 gut-h">
      <Field name={name[2]}/>
    </div>
    <div className="split-4 gut-l">
      <Field name={name[3]}/>
    </div>
  </div>
}

export default Fields
