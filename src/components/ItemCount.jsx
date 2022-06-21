import React from 'react';
import { Link } from 'react-router-dom';



export default function ItemCount({quantity, setQuantity, stock, onAdd, tocart}) {
  
  

  function handlerPlus (){
    if(quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  function handlerMinus (){
    if(quantity > 1) {
      setQuantity(quantity - 1)
    }
  }



  return (
    <>
    { tocart? 
      <> 
        <button onClick={handlerMinus}> -  </button>
        <span> {quantity} </span>
        <button onClick={handlerPlus}> + </button>
        <br/>
        <br/>
        <button onClick={onAdd} >Add to cart</button> 
        <br/>      
        
      </>
      :
      <>
        <Link to={'/cart'} > <button>Go to cart</button>  </Link>
        <br/>
        <br/>
        <Link to={'/'} > <button>Keep buying</button>  </Link>
      </>    
    }
    
    </>
  )
}
