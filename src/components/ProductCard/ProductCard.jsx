import React from 'react';
import './ProductCard.css'

const ProductCard = (props) => {
  const  {
    id,
    title,
    imgSrc,

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
    </article>
  );
};

export default ProductCard;