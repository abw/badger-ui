import React from 'react'
import { Icon } from '../Icon'

export const Content = (props) => <>
  { props.iconLeft
    ? <Icon
        name={props.iconLeft}
        color={props.iconLeftColor}
        transform="grow-4"
        className={`mar-r ${props.iconLeftClass||''}`}
        fixedWidth
      />
    : null
  }
  <span className="caption">{props.text}</span>
  { props.iconRight
    ? <Icon
        name={props.iconRight}
        color={props.iconRightColor}
        className={props.iconRightClass}
        fixedWidth
      />
    : null
  }
</>

export default Content
