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

  return (
    <AppContext.Provider
      value={{
        basketItems,
        setBasketItems,
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/feedbaсk" element={<FeedbackPage />} />
            <Route path="/catalog/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;