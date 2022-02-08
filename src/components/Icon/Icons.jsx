import React from 'react'

export const Icons = ({ children, className = '' }) =>
  <span className={`fa-layers fa-fw ${className}`}>
    {children}
  </span>

export default Icons;
