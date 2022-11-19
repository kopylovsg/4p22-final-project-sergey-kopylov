import React from "react";
import './App.css';
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";

const App = () => {
  return (
    <div className="app">
      <Header className="app__header" />
      <Content className="app__content">
        <CatalogPage />
      </Content>
      <Footer className="app__footer" />

    </div>
  )
}

export default App;
