import React from "react";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import ItemList from "./ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");

    if (id) {
      const q = query(itemsCollection, where("category", "==", id));
      getDocs(q)
        .then((snapshot) => {
          setResolved(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          setResolved(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loading"> Loading... </div>
      ) : error ? (
        <Navigate to="/404" />
      ) : (
        <ItemList items={resolved} />
      )}
    </>
  );
}
