import React from 'react';
import './ProductCard.css'
import cart from "../../components/images/cart.png";


const ProductCard = (props) => {
  const  {

    id,
    title,
    imgSrc,
    price,
    category,
    onClic,
  } = props
  return (
    <article className="product-card">

      <img
        className="product-cart__image"
        src={imgSrc}
        alt={title}
        width="250"
        height="230"
        loading="lazy"
      />
      <div className="product-card__title">{title}</div>
      <div className="product-card__price">
        <div className="card-price">{price.toFixed(2)} &#8381;</div>
        <div onClick={onClic}>
          <img width="22" height="20" src={cart} alt="cart"/>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;