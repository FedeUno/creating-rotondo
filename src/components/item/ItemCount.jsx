import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function ItemCount({ stock, initial, onAdd, tocart }) {
  const { useCounter } = useContext(CartContext);

  const first = useCounter(stock, initial);

  return (
    <>
      {tocart ? (
        <>
          <div>
            <button onClick={first.decrement}> - </button>
            <span> {first.counter} </span>
            <button onClick={first.increase}> + </button>
          </div>
          <br />
          <button
            disabled={first.counter === 0}
            onClick={() => {
              onAdd(first.counter);
            }}
          >
            Add to cart
          </button>
          <br />
        </>
      ) : (
        <>
          <div>
            <Link to={"/cart"}>
              {" "}
              <button>Go to cart</button>{" "}
            </Link>
            <br />
            <br />
            <Link to={"/"}>
              {" "}
              <button> Keep buying</button>{" "}
            </Link>
          </div>
        </>
      )}
    </>
  );
}
