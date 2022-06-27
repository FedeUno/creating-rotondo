import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../src/helpers/arreglox';
import ItemList from './ItemList';


export default function ItemListContainer() {

  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    setResultado([]);
    setLoading(true);
    setError(false);
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        !id? res(products): res(products.filter(e => e.category === id)); 
      }, 2000);    
    });    
    promesa
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
    <ItemList items={resultado}/> 
  </>
  )
}