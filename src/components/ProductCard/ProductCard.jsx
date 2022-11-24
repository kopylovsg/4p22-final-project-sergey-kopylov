import React from 'react';
import './ProductCard.css'
import cart from "../../components/images/cart.png";
import {Link} from "react-router-dom";


const ProductCard = (props) => {
  const  {

    id,
    title,
    imgSrc,
    price,
    description,
    onClic,
  } = props;

  const href = `/catalog/${id}`;
  


  return (
    <article className="product-card">
      <Link className="product-card__image-wrapper" to={href}>
        <img
          className="product-cart__image"
          src={imgSrc}
          alt={title}
          width="250"
          height="230"
          loading="lazy"
        />
      </Link>
      <Link className="product-card__title" to={href}>{title}</Link>
      <div className="product-card__description" title={description}>{description}</div>
      <div className="product-card__price">
        <div className="card-price">{price.toFixed(2)} &#8381;</div>
        <div className="product-card__price-bottom" onClick={onClic}>
          <img width="22" height="20" src={cart} alt="cart"/>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;