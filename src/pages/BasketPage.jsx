import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../context";

const BasketPage = () => {

  const {
    basketItems,

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
      {(products || []).map(({title, image, amount, price, id}) => {
         let amountPrice = (amount*price).toFixed(2);
        return <div key={id} className="" style={{displey: "flex"}}>
          <div>{title}</div>
          <div>{amount} x {price.toFixed(2)}</div>
          <div>Всего по наименованию: {amountPrice}</div>
        </div>;
      })}
      <div>Total amount: {totalAmount}</div>
    </div>
  );
};

export default BasketPage;