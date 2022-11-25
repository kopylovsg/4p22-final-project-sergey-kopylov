import React, {useContext} from 'react';
import './ProductCard.css'
import cart from "../../components/images/cart.png";
import {Link} from "react-router-dom";
import AppContext from "../../context";


const ProductCard = (props) => {
  const  {

    id,
    title,
    imgSrc,
    price,
    description,

  } = props;

  const {

    basketItems,
    setBasketItems,
  } = useContext(AppContext)

  const href = `/catalog/${id}`;
  
  const onBuyButtonClick =() => {
    const existingBasketProductIndex = basketItems.findIndex((basketItem) => basketItem.id ===id);
    const isExistInBasket = existingBasketProductIndex >= 0 && typeof existingBasketProductIndex === 'number';
    let newBasketItems = [...basketItems]

    if (isExistInBasket) {
      newBasketItems[existingBasketProductIndex].amount ++
    } else {
      newBasketItems = [...newBasketItems, {
        id,
        amount: 1
      }]
    }

    setBasketItems(newBasketItems);
  }

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
      <div className="product-card__info">
        <div className="product-card__price">{price.toFixed(2)} &#8381;</div>
        <button
          className="product-card__price-bottom"
          type="button"
          onClick={onBuyButtonClick}>
          <img width="22" height="20" src={cart} alt="cart"/>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;