import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../src/helpers/arreglox'
import ItemDetail from './ItemDetail';





export default function ItemDetailContainer() {

  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);  

  
  useEffect(() => {
    setResultado([]);
    setLoading(true);
    setError(false);
    const promes = new Promise((res, rej) => {
      setTimeout(() => {
        res(products[id - 1 ]);              
      }, 2000); 
    });

    promes
      .then((result) => {
        setResultado(result);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);


  return(
  <>    
    <div className='loading'> {loading && 'Loading...'} </div>
    <div> {error && 'Load error'} </div>    
    <ItemDetail detail={resultado}/> 
  </>
  )
}