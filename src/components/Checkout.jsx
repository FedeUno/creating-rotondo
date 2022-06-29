import React, {useState} from 'react';


export default function Checkout() {

const [name, setName]= useState('') 
const [celphone, setCelphone]= useState('') 
const [email, setEmail]= useState('') 

const total = 100;

const cart = [
  {id:1, name: 'tshirt',  price: 5000, quantity: 10}, 
  {id:2, name: 'jean',  price: 2000, quantity: 2},
]

function handleClick(){

  const order = {
  buyer:{name, email, celphone},
  itmems:cart,
  total
  };
  console.log(order);

}




  return (
    <>
      <h1> COMPLETE SU COMPRA  </h1>
      <input style={{color:'black'}} type="text" onChange={(e)=>setName(e.target.value)} placeholder='nombre'/> 
      <input style={{color:'black'}} type="number"  onChange={(e)=>setCelphone(e.target.value)} placeholder='celular'/>   
      <input style={{color:'black'}} type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='mail'/>  
      <button onClick={handleClick}>Terminar Compra</button>
    </>
  )
}
