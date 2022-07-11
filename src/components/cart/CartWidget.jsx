import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { getItemQuantity } = useContext(CartContext);

  return (
    <>
      {getItemQuantity() !== 0 ? (
        <div className="container">
          <Link className="link" to={"/cart"}>
            <ShoppingCartIcon />
          </Link>
          <span className="num">{getItemQuantity()}</span>
        </div>
      ) : null}
    </>
  );
}
