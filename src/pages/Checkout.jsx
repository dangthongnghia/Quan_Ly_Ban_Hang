import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, dispatch } = useCart();

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
      <button onClick={handleCheckout}>Confirm Purchase</button>
    </div>
  );
};

export default Checkout;
