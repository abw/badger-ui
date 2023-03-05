import React from 'react'
import { Themed } from '../../utils';
import { Error } from '../Alert'

const Errors = ({
  errors,
  className,
  icon,
  headlineOne, headlineMany,
  titleOne, titleMany
}) => <Error
  className={className}
  icon={icon}
  headline={errors.length === 1 ? headlineOne : headlineMany}
  title={errors.length === 1 ? titleOne : titleMany}
>
  <table className="validation-errors">
    <tbody>
      {errors.map(
        (error, index) =>
          <tr key={index}>
            <td className="key">{error.label||error.field}:</td>
            <td className="value">{error.message}</td>
          </tr>
      )}
    </tbody>
  </table>
</Error>

Errors.defaultProps = {
  className:    'small',
  icon:         'alert',
  headlineOne:  'Form Error',
  headlineMany: 'Form Errors',
  titleOne:     'Please correct the following issue',
  titleMany:    'Please correct the following issues',
};

export default Themed(Errors, 'FormErrors');
