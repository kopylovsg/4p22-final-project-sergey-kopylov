import React, {useEffect, useState} from 'react';

import CatalogBody from "../CatalogBody/CatalogBody";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import './Catalog.css';

export const defaultCategory = 'All'


const Catalog = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([defaultCategory])
  const [activeCategory, setActiveCategory] = useState(defaultCategory)

  const getCategoriesFromProducts = (products) => {
    const allCategoryNames = products.map(({ category }) => category)
    const uniqueCategoryNames = new Set(allCategoryNames)


    return Array.from(uniqueCategoryNames)
  }

  const fetchProducts = () => {
    fetch('products.json')
      .then((response) => response.json())
      .then((response) => {
        const newProducts = response.map((product) => ({
          ...product,
        }))
        const newCategories = getCategoriesFromProducts(newProducts)

        setProducts(newProducts)
        setFilteredProducts(newProducts)
        setCategories([...categories, ...newCategories])
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [] )


  return (
    <div className="catalog">
      <CatalogFilter
        className="catalog__filter"
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <CatalogBody className="catalog__body" products = {filteredProducts}/>
    </div>
  );
};

export default Catalog;