import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function CartWidget({num}) {

  return (
    <>
      <div className='container'>
        <ShoppingCartIcon />       
        <span className='num'>{num}</span>
      </div>
      
    </>
  )
}
