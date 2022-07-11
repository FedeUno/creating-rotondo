import { DeleteForever } from "@mui/icons-material";
import { Box, Fab, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ qty, stock, remove }) {
  /* , onIncrease, onDecrease */

  const { useCounter } = useContext(CartContext);

  const second = useCounter(stock, qty);

  return (
    <>
      <Box sx={{ marginX: "auto", minWidth: "160px", maxWidth: "200px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Fab
            style={{ color: "red" }}
            size="small"
            variant="primary"
            onClick={second.decrement}
          >
            -
          </Fab>
          <Typography
            style={{ color: "black" }}
            variant="body10"
            sx={{ userSelect: "none" }}
          >
            {second.counter}
          </Typography>
          <Fab
            style={{ color: "red" }}
            disabled={second.counter === stock}
            size="small"
            variant="primary"
            onClick={second.increase}
          >
            +
          </Fab>
          <Fab
            size="small"
            variant="danger"
            onClick={remove}
            style={{ marginLeft: 20 }}
          >
            <DeleteForever
              className="buttoncontainer"
              style={{ backgroundColor: "black" }}
            />
          </Fab>
        </Box>
      </Box>
    </>
  );
}
