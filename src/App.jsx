import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './views/Layout/Layout';
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';
import FeedbackPage from './pages/FeedbackPage';
import ProductPage from './pages/ProductPage';
import AppContext from './context';

const App = () => {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (id) => {
    let updatedBasketItems = [...basketItems];

    const idx = updatedBasketItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      updatedBasketItems[idx].amount += 1;
    } else {
      updatedBasketItems.push({
        id,
        amount: 1,
      });
    }
    setBasketItems(updatedBasketItems);
  };

  const updateBasketAmount = (id, isIncrease = true) => {
    let updatedBasketItems = [...basketItems];
    const idx = updatedBasketItems.findIndex((item) => item.id === id);

    if (idx !== -1) {
      if (isIncrease) {
        updatedBasketItems[idx].amount += 1;
      } else {
        const currentAmount = updatedBasketItems[idx].amount;
        if (currentAmount > 1) {
          updatedBasketItems[idx].amount -= 1;
        // } else {
        //   delete updatedBasketItems[idx]
        }
      }
    }
    setBasketItems(updatedBasketItems);
  };

  const increaseBasketItem = (id) => updateBasketAmount(id);

  const decreaseBasketItem = (id) => updateBasketAmount(id, false);

  const removeFromBasket = (id) => {
    const idx = basketItems.findIndex((item) => item.id === id);

    if (idx !== -1) {
      setBasketItems([
        ...basketItems.slice(0, idx),
        ...basketItems.slice(idx + 1),
      ]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        addToBasket,
        basketItems,
        setBasketItems,
        removeFromBasket,
        increaseBasketItem,
        decreaseBasketItem,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/basket' element={<BasketPage />} />
            <Route path='/feedback' element={<FeedbackPage />} />
            <Route path='/catalog/:id' element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
