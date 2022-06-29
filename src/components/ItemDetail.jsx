import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import { Box, Card, Typography } from "@mui/material";




export default function ItemDetail({detail}) {
 
  const {isInCart, addItem, qtyInCart} = useContext(CartContext)
  const {title, description, pictureUrl, id, stock,price} = detail;
  const [tocart, setTocart] = useState(true) 
   
  const onAdd = (q) => {
    isInCart(id)
    addItem(detail, q)
    setTocart(!tocart)
  }

  return (
    <>
     {pictureUrl?  
      <Card sx={{
        backgroundColor: 'transparent',
        width: '100%',
        borderRadius: '20px',
        paddingTop: '3rem',
        display: 'flex',
        gap: 2,
        height: {
          xs: 'auto',
          md: '500px'
        },
        flexDirection: {
          xs: 'column',
          md: 'row'
        }
      }}
    >
  
   
  
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: {xs: '100%', md:'50%'},
          height: {xs: '280px', sm: '420px', md: 'auto'},//
          overflow: 'hidden',
          borderRadius: '20px' 
        }}
      >
        <img className='imagenDetail' src={pictureUrl} alt={title} sx={{flexShrink: 1, minWidth: '100%', minHeight: '100%',  objectFit: 'cover' }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: {xs: '100%', md: '50%'},
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 2,
          maxWidth: {xs: 'auto', md: '400px'},
          margin: 'auto'
        }}
      >
        

        <Typography variant='h4'>{ title }</Typography>
        <Typography variant='body1'>{ description }</Typography>
        <Typography variant='h4'>$ { price }</Typography>
        <br/>
      

     <ItemCount 
            onAdd={onAdd} 
            tocart={tocart}         
            initial={ qtyInCart(id) === stock ? 0 : 1 }
            stock={ qtyInCart(id) ? stock - qtyInCart(id) : stock } 
           
      />
      
    </Box>
    </Card>
   :null}  
  </>
  )
}

 
