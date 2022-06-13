import React from 'react'
import Item from './Item'

export default function ItemList({items}) {

return (
  <div className='ItemList'>
    {items?.map(e=> <Item key={e.id} item={e}/>)}
  </div>  
) 
}