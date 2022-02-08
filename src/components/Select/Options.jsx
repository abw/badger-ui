import React from 'react'
import { isDefined } from '../../utils'

const Options = ({options, cursor, setCursor, onChange, optionClass, disabled}) => options.map(
  option => {
    const selected = isDefined(cursor) && cursor === option.index;
    const click = onChange && ! disabled && ! option.disabled
      ? () => onChange(option)
      : null;

    return <React.Fragment key={option.index || option.text}>
      { isDefined(option.value)
        ? <div
            className={`option ${optionClass||''} ${option.className||''} ${option.disabled ? 'disabled' : ''} ${selected ? 'selected' : ''}`}
            onClick={click} onMouseEnter={() => setCursor(option.index)}>
            {option.text}
          </div>
        : <div className="option heading">
            {option.text}
          </div>
      }
      { isDefined(option.options) && option.options.length
        ? <div className="subset">
            <Options
              options={option.options} cursor={cursor}
              setCursor={setCursor} onChange={onChange}
              optionClass={optionClass}
            />
          </div>
        : null
      }
    </React.Fragment>
  }
)

export default Options
