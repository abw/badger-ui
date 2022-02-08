import React from 'react'
import { classNames } from '../../utils'

export const Container = (props) =>
  <div className={classNames(props, 'container')} id={props.id}>
    {props.children}
  </div>

export default Container
