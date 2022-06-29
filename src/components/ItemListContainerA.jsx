import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import products from '../../src/helpers/arreglox';
import ItemList from './ItemList';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';


export default function ItemListContainerA() {

  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resolved, setResolved] = useState([]);


  useEffect( () => { 
    const db = getFirestore();

    const itemsCollection = collection(db, 'items')
  
    if(id){ 
      const q = query(itemsCollection, where('category', '==', id))
      getDocs(q)
          .then((snapshot) => {
          setResolved(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
        })   
        .catch((error)=>{
        console.log(error)
        setError(true)})
        .finally(() => {
          setLoading(false)
        });
    }else{ 

        getDocs(itemsCollection)
          .then((snapshot) => {
            setResolved(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
          })   
          .catch((error)=>{
          console.log(error)
          setError(true)})
          .finally(() => {
            setLoading(false)
          });
    }
}, [id] );
 

  return(
  <>    
    <div className='loading'> {loading && 'Loading...'} </div>
    <div> {error && 'Load error'} </div>      
    <ItemList items={resolved}/> 
  </>
  )
}