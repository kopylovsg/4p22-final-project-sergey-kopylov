import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context';
import BasketCard from '../BasketCard/BasketCard';
import './Basket.css'

const Basket = () => {
  const { basketItems } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [basketProducts, setBasketProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    const items = (basketItems || []).reduce((result, basketItem) => {
      const product = products.find(({ id }) => id === basketItem.id);

      if (product) {
        result.push({
          ...product,
          amount: basketItem.amount,
        });
      }

      return result;
    }, []);

    setBasketProducts(items);
  }, [products, basketItems]);

  const { totalAmount, totalPrice } = basketProducts.reduce(
    (res, next) => ({
      totalAmount: res.totalAmount + next.amount,
      totalPrice: res.totalPrice + next.amount * next.price,
    }),
    {
      totalAmount: 0,
      totalPrice: 0,
    },
  );

  return (

    <div className='basket'>
      <div className='basket__body'>
        <h1 className='basket__title'>Ваша корзина</h1>
        {basketItems.length ? (
          <ul className='basket__list'>
            {basketProducts.map((product) => (
              <li className='basket__item' key={product.id}>
                <BasketCard product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <div className='basket__empty-message'>ПУСТА!</div>
        )}
      </div>
      <div className='basket__summary'>
        <div className='basket__summary-info'>
          ИТОГО {totalAmount} на сумму: {totalPrice.toFixed(2)} &#8381;
        </div>
        <button className='basket__summary-submit-button' type='button'>
          Купить
        </button>
      </div>
    </div>
  );
};

export default Basket;
