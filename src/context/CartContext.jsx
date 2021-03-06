import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;

export default function MyProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );

  const useCounter = (q, i) => {
    const [counter, setCounter] = useState(i);

    const increase = counter < q ? () => setCounter(counter + 1) : null;
    const decrement = counter > 1 ? () => setCounter(counter - 1) : null;

    return {
      counter,
      increase,
      decrement,
    };
  };

  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  const addItem = (item, qty) => {
    const newItem = {
      ...item,
      qty,
    };

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].qty += qty;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };

  const getItemQuantity = () => {
    return cart.reduce((acum, x) => (acum += x.qty), 0);
  };

  const getItemPrice = () => {
    return cart.reduce((acum, x) => (acum += x.qty * x.price), 0);
  };

  const qtyInCart = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      return item.qty;
    }
    return 0;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  return (
    <Provider
      value={{
        cart,
        useCounter,
        isInCart,
        addItem,
        removeItem,
        emptyCart,
        getItemQuantity,
        getItemPrice,
        qtyInCart,
      }}
    >
      {children}
    </Provider>
  );
}
