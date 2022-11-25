import React from 'react';
import cart from "../../components/images/cart.png";

const Product = (props) => {
  const {

    title,
    image,
    price,
    description,
  } = props

  return (
    <div className="product">

      <img
        className="product__image"
        src={image}
        alt={title}
        width="400"
        height="326"
        loading="lazy"/>
      <h1 className="product__title">{title}</h1>
      <div className="product__description">{description}</div>
      <div className="product__info">
        <div className="product__price">{price} &#8381;</div>
        <button className="product__price-bottom" type="button">
          <img width="22" height="20" src={cart} alt="cart"/>
        </button>
      </div>
    </div>
  );
};

export default Product;