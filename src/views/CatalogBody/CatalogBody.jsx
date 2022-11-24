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
        {products.map(({ id, title, image, description, price}) =>(
          <li className="catalog-body__item" key={id}>
            <ProductCard
              id={id}
              title={title}
              description={description}
              onClic={() => console.log(title, price)}
              imgSrc={image}
              price={price}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogBody;