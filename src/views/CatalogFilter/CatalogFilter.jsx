import React, {useEffect, useState} from 'react';
import './CatalogFilter.css'
import Input from "../../components/Input/Input";
import filterpng from "../../components/images/filterpng.png";
import {defaultCategory} from "../Catalog/Catalog";


const CatalogFilter = (props) => {
  const {
    products,
    setFilteredProducts,
    categories,
    setActiveCategory,
    activeCategory,
  } = props;

  const [searchQuery, setSearchQuery] = useState('');
  const onInputChange = ({ target }) => {
    setSearchQuery(target.value);

  }

  const onCategoryButtonClick = (categoryName) => {
    setActiveCategory(categoryName);
  }

  const filter = () => {
    const newFilteredProducts = products.filter(({ title, category }) => {
      const isCategoryTheSame = category === activeCategory;
      const isActiveCategoryDefault = activeCategory === defaultCategory;
      const titleFormatted = title.toLowerCase();
      const searchQueryFormatted = searchQuery.toLowerCase();
      const isNameIncludesSearchQuery = titleFormatted.includes(searchQueryFormatted);

      return (isCategoryTheSame || isActiveCategoryDefault) && isNameIncludesSearchQuery
    });

    setFilteredProducts(newFilteredProducts);
  };

  useEffect(() => {
    filter()
  }, [searchQuery, activeCategory]);

  return (
    <div className="catalog-filter">
      <div className="catalog-filter__title">
        <img width="22" height="20" src={filterpng} alt="filter"/>
        <span>Filtering</span>
      </div>
      <div className="catalog-filter__categories">
        {categories.map((categoryName) => {
          const isActive = categoryName === activeCategory
          let classNameFormatted = 'catalog-filter__category-button'
          if (isActive) {
            classNameFormatted += ' is-active'
          }

          return (
            <button
              key={categoryName}
              className={classNameFormatted}
              type="button"
              onClick={() => onCategoryButtonClick(categoryName)}
            >
              {categoryName}
            </button>
          )
        })}
      </div>

      <Input
        className="catalog-filter__input"
        placeholder="Search..."
        value={searchQuery}
        onChange={onInputChange}
        />
    </div>

  );
};

export default CatalogFilter;