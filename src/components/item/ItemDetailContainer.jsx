import React from "react";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Box } from '@mui/material';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "items", id);
    getDoc(item)
      .then((snapshot) => {
        setResolved({ ...snapshot.data(), id: snapshot.id });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="loading"> Loading... </div>
      ) : error ? (
        <Navigate to="/404" />
      ) : (
        <Box
        sx={{
          backgroundColor: "transparent",
          width: "100%",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          gap: 5,
          height: {
            xs: "auto",
            md: "600px",
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
        >
        <ItemDetail detail={resolved} />
        </Box>
      )}
    </>
  );
}
