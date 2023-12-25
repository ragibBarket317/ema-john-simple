import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ cart, handleDeleteBtn }) => {
  const { id, name, img, quantity, price } = cart;
  return (
    <div className="review-item">
      <div className="review-img">
        <img src={img} alt="" />
      </div>
      <div className="review-text">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div>
        <button onClick={() => handleDeleteBtn(id)}>Delete</button>
      </div>
    </div>
  );
};

export default ReviewItem;
