import React from 'react'
import { Content } from './Content'
import { Link } from '../Link'

export const Item = (props) => props.disabled
  ? <div className={'item disabled'} aria-disabled={true}>
      <Content {...props}/>
    </div>
  : props.to ?
    <Link to={props.to||'/'} label={props.label||props.text} className="item" onClick={() => props.setClicked(1)}>
      <Content {...props}/>
    </Link>
  : props.href ?
    <a href={props.href} target={props.target} label={props.label} className="item" onClick={() => props.setClicked(1)}>
      <Content {...props}/>
    </a>
  : <span
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

export default Item
