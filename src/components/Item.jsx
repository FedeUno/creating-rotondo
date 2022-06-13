import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function Item({item}) {

  const {title, description, pictureUrl} = item;
  
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
          
          <NavLink to={`/item/${item.id}`}>

              <button className='buttoncontainer'>More information</button>

           </NavLink>
          
          </div>
      </Card.Body>
    </Card>
    <br />   
  </>
  )
}
