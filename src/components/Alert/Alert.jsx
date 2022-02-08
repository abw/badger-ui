import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import propClasses from '../../utils/propClasses'
import { sizes, fasizes } from '../../config/sizes'
import { types } from '../../config/alert'

export const Alert = ({
  title, headline, headIcon, type, size, stripe, shadow, className, icon, text, children,
  iconSize = '2x', dismissable = false, revealable = false, initiallyRevealed = false,
  onDismiss
}) => {
  const [revealed, reveal] = useState(initiallyRevealed || !revealable);
  const [dismissed, setDismissed] = useState(false);
  const classes = [
    'alert', type, size, className,
    propClasses({ icon, revealable, revealed, dismissable, dismissed, headline, stripe, shadow })
  ];
  const cname = classes.filter(i => !!i).join(' ');
  const dismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
    setDismissed(true);
  }

  if (dismissed) {
    return null;
  }

  return <div className={cname}>
    {headline
      ? <div className="headline" onClick={revealable ? () => reveal(!revealed) : null}>
        {headIcon &&
          <Icon icon={headIcon} fixedWidth className="mar-r" />
        }
        <span className="text">{headline}</span>
        {dismissable &&
          <span className="dismiss">
            <Icon icon="times-circle" fixedWidth className="message-control" onClick={() => dismiss(true)} />
          </span>
        }
        {revealable &&
          <span className="reveal">
            {revealed
              ? <Icon
                icon="caret-down" fixedWidth className="message-control" transform="grow-8"
                onClick={() => reveal(false)}
              />
              : <Icon
                icon="caret-left" fixedWidth className="message-control" transform="grow-8 down-1"
                onClick={() => reveal(true)}
              />
            }
          </span>
        }
      </div>
      : null
    }
    {revealed &&
      <div className="body">
        {icon ? <Icon icon={icon} size={iconSize} className="body-icon"/> : null}
        <div className="content">
          {title && <div className="title">{title}</div>}
          {text || children}
        </div>
      </div>
    }
  </div>
}

export const Info = (props) =>
  <Alert {...props} type='info' />
export const Success = (props) =>
  <Alert {...props} type='success' />
export const Warning = (props) =>
  <Alert {...props} type='warning' />
export const Error = (props) =>
  <Alert {...props} type='error' />

Alert.Info    = Info
Alert.Success = Success
Alert.Warning = Warning
Alert.Error   = Error

Alert.propTypes = {
  /** Any custom css `class` for the container element. */
  className: PropTypes.string,
  /** Alert type. */
  type: PropTypes.oneOf(types),
  /** Title for the body text. */
  title: PropTypes.string,
  /** Body text. */
  text: PropTypes.string,
  /** Custom React content for the alert as an alternative to `text`. */
  children: PropTypes.node,
  /** Name of an icon to display alongside the body text. */
  icon: PropTypes.string,
  /** Size of icon to display alongside the body text. */
  iconSize: PropTypes.oneOf(fasizes),
  /** Headline text. */
  headline: PropTypes.string,
  /** Name of an icon to display in the headline. */
  headIcon: PropTypes.string,
  /** Alert size. */
  size: PropTypes.oneOf(sizes),
  /** Flag to indicate that the alert body can be revealed. */
  revealable: PropTypes.bool,
  /** Flag to indicate that revealable content is initially revealed. */
  initiallyRevealed: PropTypes.bool,
  /** Flag to indicate that the alert can be dismissed. */
  dismissable: PropTypes.bool,
  /** Handler to be called when alert is dismissed. */
  onDismiss: PropTypes.func,
};

export default Alert
