import React, {useContext} from 'react';
import './ProductCard.css'
import cart from "../../components/images/cart.png";
import {Link} from "react-router-dom";
import AppContext from "../../context";


const ProductCard = ({product}) => {
  const  {
    id,
    title,
    image,
    price,
    description,
  } = product;

  const {
    addToBasket,
  } = useContext(AppContext)

  const href = `/catalog/${id}`;

  return (
    <article className="product-card">
      <Link className="product-card__image-wrapper" to={href}>
        <img
          className="product-cart__image"
          src={image}
          alt={title}
          width="250"
          height="230"
          loading="lazy"
        />
      </Link>
      <Link className="product-card__title" to={href}>{title}</Link>
      <div className="product-card__description" title={description}>{description}</div>
      <div className="product-card__info">
        <div className="product-card__price">{price.toFixed(2)} &#8381;</div>
        <div
          className="product-card__price-bottom"
          onClick={() => addToBasket(id)}>
          <img className="product-card__price-cart" width="22" height="20" src={cart} alt="cart"/>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;