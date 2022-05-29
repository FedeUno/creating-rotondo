import React from 'react'

export const ItemListContainer = ({gretting = 'Hello!'}) => {
  return (
    <div className='gretting'>
      <h1>{gretting}</h1>
    </div>
  )
}
