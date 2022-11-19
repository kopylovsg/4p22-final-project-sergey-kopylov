import React, {useEffect, useState} from 'react';
import ProductCard from "../../components/ProductCard/ProductCard";
import './CatalogPage.css'
import CatalogBody from "../../views/CatalogBody/CatalogBody";
import CatalogFilter from "../../views/CatalogFilter/CatalogFilter";

const CatalogPage = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState( [])



  const fetchProducts = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
      .then((response) => response.json())
      .then((responseDate) => {

        setProducts(responseDate)
        setFilteredProducts(responseDate)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <div className="catalog">
      <CatalogFilter
        products = {products}
        setFilteredProducts = {setFilteredProducts}
      />
      <CatalogBody products={filteredProducts}/>

    </div>
  );
};

export default CatalogPage;