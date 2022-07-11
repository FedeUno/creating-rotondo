import { useContext } from "react";
import { Box } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import CartTable from "./CartTable";
import CartEmpty from "./CartEmpty";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <Box
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        maxWidth: "950px",
        margin: "auto",
        marginTop: "3rem",
        marginBottom: "4rem",
      }}
    >
      {cart.length ? <CartTable /> : <CartEmpty />}
    </Box>
  );
}
