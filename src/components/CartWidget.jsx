import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../context/CartContext';


export default function CartWidget() {

  const {getItemQuantity} = useContext(CartContext)

  return (
    <>
      <div className='container'>
        <ShoppingCartIcon />       
        <span className='num'>{getItemQuantity()}</span>
      </div>
      
    </>
  )
}
