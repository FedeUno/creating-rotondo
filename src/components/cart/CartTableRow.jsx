import { TableCell, TableRow, Fab } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { DeleteForever } from "@mui/icons-material";

export default function CartDetailTableRow({ item }) {
  const { id, pictureUrl, title, qty, price } = item;

  const { removeItem } = useContext(CartContext);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center" sx={{ verticalAlign: "middle", padding: 1 }}>
        <img
          height={70}
          width={70}
          src={pictureUrl}
          alt={title}
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      </TableCell>
      <TableCell align="center">{title}</TableCell>
      <TableCell align="center">{qty}</TableCell>
      <TableCell align="center">${price}</TableCell>
      <TableCell align="center">${price * qty}</TableCell>
      <TableCell>
        <Fab size="small">
          <DeleteForever
            onClick={() => {
              removeItem(id);
            }}
            className="buttoncontainer"
            style={{ backgroundColor: "black" }}
          />
        </Fab>
      </TableCell>
    </TableRow>
  );
}
