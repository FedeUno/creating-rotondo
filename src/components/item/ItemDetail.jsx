import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { Card, Box, Typography } from "@mui/material";

export default function ItemDetail({ detail }) {
  const { isInCart, addItem, qtyInCart } = useContext(CartContext);
  const { title, description, pictureUrl, id, stock, price } = detail;
  const [tocart, setTocart] = useState(true);

  const onAdd = (q) => {
    isInCart(id);
    addItem(detail, q);
    setTocart(!tocart);
  };

  return (
    <>
      {pictureUrl ? (
        <Card
          sx={{
            backgroundColor: "transparent",
            width: "100%",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            gap: 3,
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: { xs: "100%", md: "50%" },
              overflow: "hidden",
              borderRadius: "20px",
            }}
          >
            <img
              className="imagenDetail"
              src={pictureUrl}
              alt={title}
              sx={{
                flexShrink: 1,
                minWidth: "100%",
                minHeight: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "50%" },
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              gap: 2,
              maxWidth: { xs: "auto", md: "400px" },
              margin: "auto",
            }}
          >
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1">{description}</Typography>
            <Typography variant="h4">$ {price}</Typography>
            <Typography variant="body1">stock: {stock}</Typography>
            <br />

            <ItemCount
              onAdd={onAdd}
              tocart={tocart}
              initial={qtyInCart(id) === stock ? 0 : 1}
              stock={qtyInCart(id) ? stock - qtyInCart(id) : stock}
            />
          </Box>
        </Card>
      ) : null}
    </>
  );
}
