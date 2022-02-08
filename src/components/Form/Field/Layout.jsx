import React from 'react'
import Label from './Label'
import Help from './Help'
import { propClasses } from '../../../utils'
import { Icon } from '../../Icon'

export const Layout = ({form, field}) => {
  const {
    iconLeft, iconRight, prefix, suffix,
    disabled, label, required,
    valid, invalid, focus,
    fieldClass, Input
  } = field;
  const labelled = label || required;
  const fieldClasses = propClasses(
    { disabled, required, valid, invalid },
    fieldClass,
    iconLeft ? 'icon-left' : '', iconRight ? 'icon-right' : '',
    prefix && 'prefixed', suffix && 'suffixed',
    focus ? 'focus' : ''
  ) || '';

  return <div className={`field ${fieldClasses}`}>
    {labelled && <Label field={field}/>}
    <div className="inputs">
      {iconLeft
        ? <div className="input-icon icon-left">
            <Icon name={iconLeft} fixedWidth/>
          </div>
        : prefix
          ? <div className="prefix">
              {prefix}
            </div>
          : null
      }
      <div className="control">
        <Input form={form} field={{ ...field }}/>
      </div>
      {iconRight
        ? <div className="input-icon icon-right">
            <Icon name={iconRight} fixedWidth/>
          </div>
        : suffix
          ? <div className="suffix">
              {suffix}
            </div>
          : null
      }
    </div>
    <Help field={field}/>
  </div>
}

export default Layout

