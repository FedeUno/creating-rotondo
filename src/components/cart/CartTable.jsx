import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CartTableRow from "./CartTableRow";
import { useContext } from "react";

export default function CartDetailTable() {
  const { cart, getItemPrice, emptyCart, getItemQuantity } =
    useContext(CartContext);

  return (
    <Card
      style={{ backgroundColor: "transparent" }}
      sx={{
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
      <Typography
        variant="h5"
        className="gretting"
        component="h2"
        sx={{ marginBottom: "10px" }}
      >
        Cart
      </Typography>

      <TableContainer
        elevation={0}
        component={Card}
        sx={{ borderRadius: "20px", boxShadow: "unset" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center">Product</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Unit Price</TableCell>
              <TableCell align="center">Total Price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item) => (
              <CartTableRow key={item.id} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Card
        style={{ backgroundColor: "transparent" }}
        sx={{
          width: "100%",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "20px",
          boxShadow: "unset",
        }}
      >
        <Typography
          variant="h6"
          className="gretting"
          sx={{ fontWeight: "bold" }}
        >
          Total: $ {getItemPrice()}
          &nbsp;({getItemQuantity()} product/s)
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            marginTop: "20px",
            gap: { sm: "300px" },
          }}
        >
          <Button
            className="buttoncontainer gretting2"
            variant="dangerUnfilled"
            sx={{ marginTop: { xs: "20px", sm: 0 } }}
            onClick={emptyCart}
          >
            Empty Cart
          </Button>

          <Link
            style={{
              textDecoration: "none",
              backgroundColor: "transparent",
              color: "white",
            }}
            to="/checkout"
          >
            <Button
              className="buttoncontainer gretting2"
              variant="dangerUnfilled"
              sx={{ marginTop: { xs: "20px", sm: 0 } }}
            >
              Checkout
            </Button>
          </Link>
        </Box>
      </Card>
    </Card>
  );
}
