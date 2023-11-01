import React from 'react'
import ListItem from './ListItem'

function List({items,removeItem}) {
  return (<div className="items">
        <h3>List of items</h3>
        {items.map(item=><ListItem key={item.id} item={item} removeItem={removeItem}/>)}
    </div>
  )
}

export default List