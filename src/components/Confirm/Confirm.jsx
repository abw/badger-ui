import React, { useState } from 'react'
import Button from '../Button/index.jsx'
import { Themed, preventDefault } from '../../utils/index.js'

const Confirm = ({
  initiallyRevealed = false,
  confirmIcon,
  confirmText,
  confirmColor,
  cancelIcon,
  cancelText,
  cancelColor,
  prompt,
  className = '',
  buttonClass = '',
  buttonsClass = '',
  cancelClass = '',
  confirmClass = '',
  promptClass = '',
  solid=false,
  or=false,
  onClick = () => window.alert('No confirm action defined'),
  ...props
}) => {
  const [revealed, setRevealed] = useState(initiallyRevealed);
  return <div className={`confirm ${className} ${solid ? 'solid' : ''}`}>
    {revealed
      ? <div className="verify">
          {prompt
            ? <span className={`prompt ${promptClass}`}>{prompt}</span>
            : null
          }
          <div className={`buttons ${buttonsClass}`}>
            <Button
              iconRight={cancelIcon} className={`cancel-button ${cancelClass} ${cancelColor}`}
              text={cancelText} onClick={preventDefault(() => setRevealed(false))} solid={solid} />
            {or ? <div className="or"></div> : null}
            <Button
              {...props} iconRight={confirmIcon} color={confirmColor}
              className={`confirm-button ${confirmClass}`} solid={solid}
              text={confirmText}
              onClick={
                preventDefault(
                  () => {
                    setRevealed(false); onClick()
                  }
                )
              }
            />
          </div>
        </div>
      : <Button
          {...props} className={`initial-button ${buttonClass}`} solid={solid}
          onClick={preventDefault(() => setRevealed(true))}
        />
    }
  </div>
}

Confirm.defaultProps = {
  confirmIcon:  'check',
  confirmText:  'Confirm',
  confirmColor: 'red',
  cancelIcon:   'times',
  cancelText:   'Cancel',
  cancelColor:  'grey',
  prompt:       'Are you sure?',
  solid:        false,
}

export default Themed(Confirm, 'Confirm')
