import React from 'react'
import Context from './Context'
import { Themed } from '../../utils';
import { Loader } from '../Spinner';

const Saving = ({form, icon, color, bgColor, overlayColor, className, message}) => <Loader
  icon={form.savingIcon||icon}
  color={form.savingColor||color}
  bgColor={form.savingBgColor||bgColor}
  overlayColor={form.savingOverlayColor||overlayColor}
  className={form.savingClass||className}
  message={form.savingMessage||message}
/>

Saving.defaultProps = {
  icon:         'cog',
  color:        'orange',
  bgColor:      'white',
  overlayColor: 'white',
  className:    'normal',
  message:      'Saving...'
}

export default Context.Consumer(
  Themed(Saving, 'FormSaving')
);
