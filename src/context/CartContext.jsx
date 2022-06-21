import  React, {useState} from 'react';
import {createContext} from 'react';



export const CartContext = createContext()

const {Provider} = CartContext


export default function MyProvider({children}) {

  const [cart, setCart ] = useState([])


  const isInCart = (id) => {
    return cart.some(x => x.id === id)
  }

  const addItem = (item, quantity) => {

    const newItem = {
      ...item,
      quantity
    }

    if(isInCart(newItem.id)){
      const findProduct = cart.find(x => x.id === newItem.id)
      const productIndex = cart.indexOf(findProduct)
      const auxArray = [...cart]
      auxArray[productIndex].quantity += quantity
      setCart(auxArray)
    }else{
      setCart([...cart,newItem])
    }

  }

  
  const emptyCart = () => { 
    setCart([])
  }



  const  removeItem = (id) => {
    return setCart(cart.filter(x => x.id !== id))
   }

  

  const getItemQuantity = () => { 
    return cart.reduce((acum,x) => acum += x.quantity, 0)
  }
  
  const getItemPrice = () => {
    return cart.reduce((acum,x) => acum += x.quantity * x.price, 0)
   } 

   console.log(cart)
  return (
    <Provider value={{cart, isInCart, addItem, removeItem, emptyCart, getItemQuantity, getItemPrice}}>{children}</Provider>
  )
}
