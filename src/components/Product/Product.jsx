import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, seller, ratings, img } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5>{name}</h5>
        <p className="product-price">Price: ${price}</p>
        <div className="info">
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings} Stars</p>
        </div>
      </div>
      <button className="cart-btn">Add to Cart</button>
    </div>
  );
};

export default Product;
