import React, { useState, useContext } from 'react';
import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';




export default function FBCheckout() {

const [name, setName]= useState('') 
const [celphone, setCelphone]= useState('') 
const [email, setEmail]= useState('') 
const [idBuy, setIdBuy] = useState('');
const [disabled, setDisabled] = useState(false)

const{cart, getItemPrice, emptyCart} = useContext(CartContext)

const db = getFirestore();
const orderCollection = collection(db,'orders');



function handleClick  () {
  setDisabled(!disabled) 
 

  const order =  {
    buyer:{name,email, celphone},
    date: new Date(Timestamp.now().seconds *1000),
    total: getItemPrice(),
    items: [...cart]
  }
       
  addDoc(orderCollection, order).then(({id})=> {
    setIdBuy(id)  
  });
  emptyCart()
}



  //falta validación de los datos ingresados  👈 ❌⭕⭕🛑

 



return (
    <>
      {!idBuy?
      <>
        <h1> Please complete your purchase </h1>
        <br />
        <input style={{color:'black'}} type="text" onChange={(e)=>setName(e.target.value)} placeholder='name'/> 
        <br />
        <br />
        <input style={{color:'black'}} type="number"  onChange={(e)=>setCelphone(e.target.value)} placeholder='celphone'/>   
        <br />
        <br />
        <input style={{color:'black'}} type="text" onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>  
        <br />
        <br />
        <button onClick={handleClick} disabled={disabled}>FINISH BUYING</button>
        <br />
        <br />
        <br />
    </>    
    :
    <>
        <br />
        <h1>Thanks for your purchase</h1>
        <h2>Your order is being processed </h2>
        <br />
        <h2>Your purchase number is: {idBuy} </h2>
        <br />
        <br />
        <h3>Customer's information:</h3>
          <h4>name: {name}</h4>
          <h4>celphone: {celphone}</h4>
          <h4>email: {email}</h4>
        <br />
        <br />
        <h3>Thanks for trusting us</h3> 
        <br />    
        </>
    }
  </>
)
}
