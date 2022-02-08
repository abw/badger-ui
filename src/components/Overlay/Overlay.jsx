import React from 'react'

export const Overlay = ({ color = 'white', className = '', children }) =>
  <div className={`overlay ${className} ${color}`}>
    {children}
  </div>

export default Overlay
