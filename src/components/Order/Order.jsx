import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const saveCart = useLoaderData();

  const [cart, setCart] = useState(saveCart);
  console.log(cart);

  const handleDeleteBtn = (id) => {
    const fiterCart = cart.filter((pd) => pd.id !== id);
    setCart(fiterCart);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((cart) => (
          <ReviewItem
            key={cart.id}
            cart={cart}
            handleDeleteBtn={handleDeleteBtn}
          ></ReviewItem>
        ))}
      </div>

      <div className="order-summery">
        <h3>Order Summary</h3>
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/checkout">
            <button>Procced to Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
