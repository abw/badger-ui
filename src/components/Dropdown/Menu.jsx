import React, { useState } from 'react'
import { Dropdown } from './Dropdown'
import { Item } from './Item'
import { Separator } from './Separator'

export const Menu = ({items, ...rest}) => {
  let [clicked, setClicked] = useState(0);

  return <Dropdown {...rest} clicked={clicked} setClicked={setClicked}>
    <div className="menu">
    { items.map(
      (item, n) => item.separator
        ? <Separator {...item} key={item.key || n}/>
        : <Item {...item} key={item.key || n} setClicked={setClicked}/>
      )
    }
    </div>
  </Dropdown>
}

export default Menu
