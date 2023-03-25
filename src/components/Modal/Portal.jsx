import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({id, children}) => {
  const [mounted, setMounted] = useState(false)
  const [element, setElement] = useState(false)

  useEffect(
    () => {
      let created = false;
      let elem = document.getElementById(id);
      console.log(`id ${id} is`, elem);
      if (! elem) {
        console.log('creating new element');
        elem = document.createElement('div');
        document.body.appendChild(elem);
        created = true;
      }
      setElement(elem);
      setMounted(true)

      return () => {
        if (created && element) {
          document.body.removeChild(element)
          created = false
        }
        setMounted(false)
      }
    },
    []
  )
  if (! mounted || ! element) {
    return null;
  }
  return createPortal(children, element)
}

export default Portal
