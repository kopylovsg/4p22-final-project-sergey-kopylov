import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./views/Layout/Layout";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import FeedbackPage from "./pages/FeedbackPage";
import ProductPage from "./pages/ProductPage";
import AppContext from "./context";


const App = () => {
  const [basketItems, setBasketItems] = useState([])

  const addToBasket = (id) => {
    const newBasketItems = { ...basketItems }
    const isAlreadyExistInBasket = newBasketItems.hasOwnProperty(id)

    isAlreadyExistInBasket
      ? newBasketItems[id] += 1
      : newBasketItems[id] = 1

    setBasketItems(newBasketItems)
  }


  const changeBasketAmount = (id, isIncrease = true) => {
    const newBasketItems = { ...basketItems }

    if (isIncrease) {
      newBasketItems[id]++
    } else {
      const currentAmount = newBasketItems[id]
      if (currentAmount > 1) {
        newBasketItems[id]--
      }
    }

    setBasketItems(newBasketItems)
  }


  const increaseBasketItem = (id) => {
    changeBasketAmount(id)
  }

  const decreaseBasketItem = (id) => {
    changeBasketAmount(id, false)
  }

  const removeFromBasket = (id) => {
    const newBasketItems = { ...basketItems }

    delete newBasketItems[id]

    setBasketItems(newBasketItems)
  }


  return (
    <AppContext.Provider
      value={{
        addToBasket,
        basketItems,
        setBasketItems,
        removeFromBasket,
        increaseBasketItem,
        decreaseBasketItem,

      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/catalog/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
    );
};

export default App;