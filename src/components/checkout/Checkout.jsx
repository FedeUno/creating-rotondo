import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Box } from "@mui/material";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "../../context/CartContext";
import CheckoutDetail from "./CheckoutDetail";

export default function FBCheckout() {
  const navigate = useNavigate();

  const [idBuy, setIdBuy] = useState("");

  const { cart, getItemPrice } = useContext(CartContext);

  useEffect(() => {
    if (!cart.length) {
      navigate("/");
    }
  }, []);

  return (
    <Box
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "900px",
        margin: "auto",
        marginTop: "1rem",
      }}
    >
      <Card
        sx={{
          backgroundColor: "transparent",
          width: "100%",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {idBuy ? (
          <>
            <h1>Thanks for your purchase</h1>
            <h2>Your order is being processed </h2>
            <br />
            <h2>Your purchase number is: {idBuy} </h2>
            <br />
            <br />
            <h3>Thanks for trusting us</h3>
            <br />
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
            }}
          >
            <CheckoutDetail cart={cart} getItemPrice={getItemPrice()} />

            <CheckoutForm setIdBuy={setIdBuy} />
          </Box>
        )}
      </Card>
    </Box>
  );
}
