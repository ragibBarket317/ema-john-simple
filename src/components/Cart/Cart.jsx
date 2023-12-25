import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleClearCart, children }) => {
  console.log(cart);
  let totalPrice = 0;
  let quantity = 0;
  let shipping = 0;

  for (const product of cart) {
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    totalPrice = totalPrice + product.price * product.quantity;
    quantity = quantity + product.quantity;
    shipping = shipping + product.shipping;
  }
  const grandTotal = totalPrice + quantity + shipping;
  const tax = (10 * totalPrice) / 100;
  return (
    <div>
      <div className="summery-info">
        <p>Select Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Shiping Charge: ${shipping}</p>
        <p>Tax: {tax}</p>
        <h4>Grand Total: ${grandTotal}</h4>
      </div>

      <div className="clear-btn">
        <button onClick={handleClearCart}>Clear Cart</button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
