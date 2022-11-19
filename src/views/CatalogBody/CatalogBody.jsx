import React from 'react';
import './CatalogBody.css'
import ProductCard from "../../components/ProductCard/ProductCard";

const CatalogBody = (props) => {
  const {
    products = []
  } = props;

  return (
    <div className="catalog__body">
      <ul className="catalog-body__list">
        {products.map(({ id, title, thumbnailUrl }) =>(
          <li className="catalog-body__item" key={id}>
            <ProductCard
              id={id}
              title={title}
              imgSrc={thumbnailUrl}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogBody;