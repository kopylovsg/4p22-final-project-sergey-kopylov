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
      .then((responseData) => {
        const allProducts = responseData;
        const newProducts = [];

        console.log(responseData)

        allProducts.forEach(({product}) => {
          const productInBasket = basketItems.find(({ id }) => id === product.productId)
         console.log(productInBasket)
          const  { amount } = productInBasket

          if (productInBasket) {
            newProducts.push({
              ...product,
              amount,
            })
          }

        })
        setProducts(newProducts)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <div>
       КОРЗИНА
      {/*<div>Total price: {basketTotalPrice.toFixed(2)} &#8381;</div>*/}
      <div>Total amount: {totalAmount}</div>
    </div>
  );
};

export default BasketPage;