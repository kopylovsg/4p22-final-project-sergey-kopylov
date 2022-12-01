import React, {useEffect, useState} from 'react';
import { useSearchParams } from "react-router-dom";
import CatalogBody from "../CatalogBody/CatalogBody";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import './Catalog.css';
import Pagination from "../../components/Pagination/Pagination";

export const defaultCategory = 'All';

const itemsPerPage = 8;

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([defaultCategory]);
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt( searchParams.get('page') ?? 1);
  const filteredVisibleProduct = filteredProducts.slice((page -1) * itemsPerPage, page * itemsPerPage);
  const totalPage = Math.round(filteredProducts.length / itemsPerPage);
  const setPageNumber = (pageNumber) => {
    setSearchParams({ page: pageNumber.toString() })
  }

  const getCategoriesFromProducts = (products) => {
    const allCategoryNames = products.map(({ category }) => category)
    const uniqueCategoryNames = new Set(allCategoryNames)


    return Array.from(uniqueCategoryNames)
  }

  useEffect(() => {
    setPageNumber(1)
  }, [activeCategory])

  const fetchProducts = () => {
    fetch('/products.json')
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
      <CatalogBody className="catalog__body" products = {filteredVisibleProduct}/>
      <Pagination
        totalPages={totalPage}
        currentPage={page}
        setPageNumber={setPageNumber}
      />

    </div>
  );
};

export default Catalog;