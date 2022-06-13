import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function ItemDetail({detail}) {

  const {title, description, pictureUrl} = detail;
  
  return(
  
      <> 

    <Card className='Card'>
      <Card.Img className='CardImg' variant="top" src={`../${pictureUrl}`}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='CardText'>
          {description} 
        </Card.Text>
          <div className='button'>
            <p>acá iría el botón de agregar</p>     
          </div> 


      </Card.Body>
    </Card>
    <br />   
  </>
  )
}
