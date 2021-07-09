import React, { useEffect } from 'react'
import Item from './Item'

const List = (props) => {

  //// map through all items in list and display them

  useEffect(() => {
    //// get items by listID function from dispatch in App.js, when added
  }, [])
  return (
    <div className="item-display">
      i'm a list

      <ul>
        <li><Item /></li>
        <li><Item /></li>
        <li><Item /></li>
        <li><Item /></li>
      </ul>
    </div>
  )
}

export default List