import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';


export default function ItemDetail({detail}) {

  const {title, description, pictureUrl} = detail;
  
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
       {pictureUrl? <ItemCount initial={1} stock={10} />: null}      
      </Card.Body>      
    
    </Card>
    <br />   
    
  </>
  )
}
