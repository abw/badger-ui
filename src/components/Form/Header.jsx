import React from 'react';
import Context from './Context.jsx';
import Errors from './Errors.jsx';
import Icon from '../Icon/index.jsx';
import { Error } from '../Alert/index.jsx';

const Header = ({ form }) => {
  const errors = form.errors && form.errors.length;
  const error = form.error;
  if (error || errors || form.title || form.icon) {
    return (
      <header className="form-header">
        {form.icon || form.title ? (
          <h3 className="title">
            {form.icon && (
              <Icon
                name={form.icon}
                fixedWidth
                className="form-title-icon mar-r"
              />
            )}
            {form.title}
          </h3>
        ) : null}
        {errors && form.errorsInHeader ? <Errors errors={form.errors} /> : null}
        {error && form.errorsInHeader && !errors ? (
          <Error
            text={error}
            icon={form.errorIcon}
            headline={form.errorHeadline}
            headIcon={form.errorHeadIcon}
          />
        ) : null}
      </header>
    );
  }
  else {
    return null;
  }
};

export default Context.Consumer(Header);
