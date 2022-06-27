import  React, {createContext,useState} from 'react';



export const CartContext = createContext()

const { Provider } = CartContext


export default function MyProvider( { children } ) {

  const [ cart, setCart ] = useState( [] )


  const isInCart = ( id ) => {
    return cart.some( x => x.id === id )
  }

  const addItem = ( item, qty ) => {

    const newItem = {
      ...item,
      qty
    }

    if( isInCart( newItem.id ) ){
      const findProduct = cart.find( x => x.id === newItem.id )
      const productIndex = cart.indexOf( findProduct )
      const auxArray = [ ...cart ]
      auxArray[ productIndex ].qty += qty
      setCart( auxArray )
    }else{
      setCart( [ ...cart,newItem ] )
    }

  }

  
  const emptyCart = () => { 
    setCart( [] )
  }



  const  removeItem = ( id ) => {
    return setCart( cart.filter( x => x.id !== id ) )
   }

  

  const getItemQuantity = () => { 
    return cart.reduce( ( acum,x ) => acum += x.qty, 0 )
  }
  
  const getItemPrice = () => {
    return cart.reduce( ( acum,x ) => acum += x.qty * x.price, 0 )
   } 

  const qtyInCart = ( id ) => {
    const item = cart.find(i => i.id === id);
    if (item) {
      return item.qty;
    }
    return 0;
  }
 
  return (
    <Provider value={{
      cart, 
      isInCart,
      addItem, 
      removeItem,
      emptyCart,
      getItemQuantity,
      getItemPrice,
      qtyInCart     
    }}>
      { children }
    </Provider>
  )
}
