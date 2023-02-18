import React from 'react'
import { Icon } from '../Icon'

const Content = props =>
  <>
    {props.icon &&
      <Icon icon={props.icon} />
    }
    {props.iconLeft &&
      <Icon icon={props.iconLeft} fixedWidth className={`left on-left ${props.iconLeftClass || ''}`} />
    }
    {props.bare
      ? props.text || props.children
      : <span className="text">{props.text || props.children}</span>
    }
    {props.iconRight &&
      <Icon icon={props.iconRight} fixedWidth className={`right on-right ${props.iconRightClass || ''}`} />
    }
  </>

export default Content
