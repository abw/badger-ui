import React from 'react'
import { Error } from '../Alert'

const Errors = ({errors}) => <Error
  className="small"
  icon="alert"
  headline={`Form Error${errors.length === 1 ? '' : 's'}`}
  title={`Please correct the following issue${errors.length === 1 ? '' : 's'}.`}
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

export default Errors
