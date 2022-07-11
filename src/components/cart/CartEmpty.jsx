import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function CartEmpty() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        margin: "auto",
        marginTop: "1rem",
        marginBottom: "4rem",
        gap: 3,
      }}
    >
      <ShoppingCart
        color="primary"
        sx={{ fontSize: "100px", margin: "3rem" }}
      />

      <Typography className="gretting" variant="h5">
        Your cart is empty
      </Typography>

      <Link to={"/"}>
        <button> ♻ HOME </button>
      </Link>
    </Box>
  );
}
