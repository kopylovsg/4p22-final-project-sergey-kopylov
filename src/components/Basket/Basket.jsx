import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../../context";
import BasketCard from "../BasketCard/BasketCard";

const Basket = () => {

  const {
    basketItems,
  } = useContext(AppContext);

  const uniqueBasketItems = Object.keys(basketItems).length

  const totalAmount = Object.values(basketItems).reduce((total, amount) => total += amount, 0)

  const [products, setProducts] = useState([]);


  // const totalPrice = products.reduce((total, { amount, price }) => total += amount * price, 0)

  const [totalPrice, setTotalPrice] = useState(0)

  console.log(totalPrice)

  const updateProductsAmountValues = () => {
    const newProducts = products.map((product) => ({
      ...product,
      amount: basketItems[product.id]
    }))

    setProducts(newProducts)
  }


  const updateTotalPrice = () => {
    const newTotalPrice = products.reduce((total, { amount, price }) => total += amount * price, 0)
    const newTotalPriceFormatted = newTotalPrice.toFixed(2)

    setTotalPrice(newTotalPriceFormatted)
  }



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
  }, [uniqueBasketItems]);

  useEffect(() => {
    updateProductsAmountValues()
  }, [basketItems]);

  useEffect(() => {
    updateTotalPrice()
  }, [products])



  return (
    // <div>
    //    КОРЗИНА
    //   {(products || []).map(({title, image, amount, price, id}) => {
    //      let amountPrice = (amount*price).toFixed(2);
    //     return <div key={id} className="" style={{displey: "flex"}}>
    //       <div>{title}</div>
    //       <div>{amount} x {price.toFixed(2)}</div>
    //       <div>Всего по наименованию: {amountPrice}</div>
    //     </div>;
    //   })}
    //   <div>Total amount: {totalAmount}</div>
    // </div>
    <div className="basket">
      <div className="basket__body">
        <h1 className="basket__title">Your Cart</h1>
        {basketItems.length ? (
          <ul className="basket__list">
            {products.map((product) => {
              const {
                category,
                title,
                price,
                id,
                amount,
                image,
              } = product

              return (
                <li className="basket__item" key={id}>
                  <BasketCard
                    title={title}
                    category={category}
                    price={price}
                    id={id}
                    amount={amount}
                    image={image}
                  />
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="basket__empty-message">
            Basket is empty
          </div>
        )}
      </div>
      <div className="basket__summary">
        <div className="basket__summary-info">
         *ИТОГО {totalAmount} на сумму: {totalPrice}
        </div>
        <button className="basket__summary-submit-button" type="button">
          Checkout
        </button>
      </div>
    </div>





  );
};

export default Basket;