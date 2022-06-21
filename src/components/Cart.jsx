import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { CartContext } from '../context/CartContext';




export default function Cart() {

 const {cart, getItemPrice, emptyCart, removeItem} = useContext(CartContext);
 
 const deletex = () => {
   alert('falta programar ese button')
   removeItem()

 }

  return (
    <>

      {cart.length > 0?
      <>
      {cart.map( e => <ul> <li key={e.id}>
        
      <img src={`../${e.pictureUrl} `} alt="imagen" /> .....  
      <span> category: {e.category} .....</span> 
      <span> cant: {e.quantity} .....</span> 
      <span> desc: {e.description} .....</span> 
      <span> price: {e.price} .....</span> 
      <span> subtotal: {e.price * e.quantity} .....</span> 
      <button onClick={deletex}> remove item </button> 
      </li> 
      </ul>)}
      <button onClick={emptyCart}> empty cart </button>
      <br/>
      <br/>
      <br/>
      <div className='gretting2' style={{height:400}}> 
        total:  $ {getItemPrice()}  

      </div>
    
     
      </>

    :
    <>
      <div className='gretting' style={{height:400}}> 
       👉    Your cart is empty
       <p> 🙏 buy please </p> 
     
       <p> ♻  ... at least to test the app </p> 
        
      </div>
    </>
    }
    </>
  )
}

