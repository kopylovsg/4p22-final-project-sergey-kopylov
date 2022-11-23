import React, {useEffect, useState} from 'react';

import CatalogBody from "../CatalogBody/CatalogBody";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import './Catalog.css';

export const defaultCategory = 'All'



const Catalog = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([defaultCategory])

console.log(products)
  // const [activeCategory, setActiveCategory] = useState(defaultCategory)
  //
  // const getCategoriesFromProducts = (products) => {
  //   const allCategoryNames = products.map(({ category }) => category)
  //   const uniqueCategoryNames = new Set(allCategoryNames)
  //
  //   console.log(allCategoryNames)
  //   return Array.from(uniqueCategoryNames)
  // }

  const fetchProducts = () => {
    fetch(`4p22-final-project-sergey-kopylov/products.json`)
      .then((response) => response.json())
      .then((response) => {
        const newProducts = response.map((product) => ({
          ...product,

        }))
        const newCategories = Array.from(new Set(response.map(product => product.category)));


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
        // activeCategory={activeCategory}
        // setActiveCategory={setActiveCategory}


      />
      <CatalogBody className="catalog__body" products = {filteredProducts}/>
    </div>
  );
};

export default Catalog;