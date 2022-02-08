import React from 'react'
import { Icon } from '../../Icon'

export const Help = ({field}) => {
    let {help, message} = field;

    if (message) {
        return <p className="help"><Icon name="caret-up" fixedWidth/>{message}</p>
    }
    if (help) {
        return <p className="help">{help}</p>
    }
    return null;
}

export default Help
