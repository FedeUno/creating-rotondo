import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';




export default function ItemCount({initial, stock, onAdd, tocart}) {
  
  const [count, setCount] = useState(initial) 

  function increase (){
    if(count < stock) {
      setCount(count + 1)
    }
  }

  function decrease (){
    if(count > 1) {
      setCount(count - 1)
    }
  }


  return (
    <>
    { tocart? 
      <> 
        <div>
          <button onClick={decrease}> -  </button>
          <span> {count} </span>
          <button onClick={increase}> + </button>
        </div>        
        <br/>
        <button disabled={count === 0} onClick={()=>{onAdd(count)}} >Add to cart</button> 
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
