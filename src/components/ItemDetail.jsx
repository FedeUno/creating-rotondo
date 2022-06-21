import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';




export default function ItemDetail({detail}) {

  const {title, description, pictureUrl} = detail;
  
  const [tocart, setTocart] = useState(true) 
 
  const [quantity, setQuantity] = useState(1) 

  const {isInCart, addItem} = useContext(CartContext)
 
  const onAdd = () => {
    isInCart(detail.id)
    addItem(detail, quantity)
    setTocart(!tocart)
  }


  return(
  
      <> 

    <Card className='Card'>
      {pictureUrl && (
      <Card.Img className='CardImg' variant="top" src={`../${pictureUrl}`}/>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='CardText'>
          {description} 
        </Card.Text>
       {pictureUrl? <ItemCount 
          onAdd={onAdd} 
          tocart={tocart}
          quantity={quantity}
          setQuantity={setQuantity} 
          stock={10}  // 👈 debería ir detail.stock (configurar arreglox.js)
          />
          : null}      
      </Card.Body>      
    
    </Card>
    <br />   
    
  </>
  )
}
