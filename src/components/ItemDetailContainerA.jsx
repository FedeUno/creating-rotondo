import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getFirestore, doc, getDoc} from 'firebase/firestore';




export default function ItemDetailContainer() {

  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resolved, setResolved] = useState([]);  

  
  useEffect(() => {

    const db = getFirestore();
    const item = doc(db, 'items', id);
    getDoc(item)
        .then((snapshot) => {
          setResolved({...snapshot.data(), id: snapshot.id})
        })   
        .catch((error)=>{
          console.log(error)
          setError(true)})
        .finally(() => {
          setLoading(false)
        });
  }, [id]);


  return(
  <>    
    <div className='loading'> {loading && 'Loading...'} </div>
    <div> {error && 'Load error'} </div>    
    <ItemDetail detail={resolved}/>
  </>
  )
}