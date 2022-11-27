import React, {useEffect} from 'react';
import cart from "../../components/images/cart.png";
import './Product.css'

const Product = (props) => {
  const {
    title,
    image,
    price,
    description,
  } = props

  useEffect(() => {
  });

  return (
    <div className="product">

      <img
        className="product__image"
        src={`/${image}`}
        alt={title}
        width="440"
        height="326"
        loading="lazy"/>
      <h1 className="product__title">{title}</h1>
      <div className="product__description">{description}</div>
      <div className="product__info">
        <div className="product__price">{price.toFixed(2)} &#8381;</div>
        <button className="product__price-bottom" type="button">
          <img width="22" height="22" src={cart} alt="cart"/>
        </button>
      </div>
    </div>
  );
};

export default Product;