import React from 'react'
import { Content } from './Content'
import { Link } from '../Link'

export const Item = (props) => props.disabled
  ? <div className={'item disabled'}>
      <Content {...props}/>
    </div>
  : props.to ?
    <Link to={props.to||'/'} className="item" onClick={() => props.setClicked(1)}>
      <Content {...props}/>
    </Link>
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
