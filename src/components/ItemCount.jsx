import React, {useState} from 'react';
import { Link } from 'react-router-dom';



export default function ItemCount({initial, stock}) {
  
  const [counter, setCounter] = useState(initial)
  const [tocart, setTocart] = useState(true)
  

  function onAdd (){
    if(counter < stock) setCounter(counter + 1)
  }

  function subtract (){
    if(counter > 1) {setCounter(counter - 1)}
  }

  function go(){
    setTocart(tocart? false: true)
  }

  return (
    <>
    { tocart? 
      <> 
        <button onClick={subtract}> -  </button>
        <span> {counter} </span>
        <button onClick={onAdd}> + </button>
        <br/>
        <br/>
        <button onClick={go} >Add to cart</button> 
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
