import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../context";

const BasketPage = () => {

  const {
    basketItems,
    setBasketItems,
  } = useContext(AppContext);


  const totalAmount = basketItems.reduce((total, {amount}) => total += amount, 0);

  const [products, setProducts] = useState([]);


   const fetchProducts = () => {
    fetch('/products.json')
      .then((response) => response.json())
      .then(products => {

        const productsInBasket = (basketItems || []).reduce((result, basketItem) => {
          const product = products.find(({id}) => id === basketItem.id);

          if (product) {
            result.push({
              ...product,
              amount: basketItem.amount
            });
          }

          return result;
        }, []);

        setProducts(productsInBasket);
      })
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <div>
       КОРЗИНА
      {(products || []).map(({title, amount, price, id}) => {
        return <div key={id} style={{displey: "flex"}}>
          <h2>{title}</h2>
          <div>Price: {amount} x {price}</div>
          <div>Total:{amount*price}</div>
        </div>;
      })}
      <div>Total amount: {totalAmount}</div>
    </div>
  );
};

export default BasketPage;