import React from 'react'
import Link from './Link.jsx'
import { Content } from './Content.jsx'

export const Item = (props) => {
  if (props.disabled) {
    return (
      <div className={'item disabled'} aria-disabled={true}>
        <Content {...props}/>
      </div>
    )
  }
  if (props.to) {
    return (
      <Link {...props} className="item" onClick={() => props.setClicked(1)}/>
    )
  }
  if (props.href) {
    return (
      <a href={props.href} target={props.target} label={props.label} className="item" onClick={() => props.setClicked(1)}>
        <Content {...props}/>
      </a>
    )
  }
  return (
    <span
      className="item"
      onClick={
        () => {
          props.setClicked(1);
          props.onClick()
        }
      }
    >
      <Content {...props}/>
    </span>
  )
}

export default Item
