import React, {useState} from 'react';
import './CatalogFilter.css'
import Input from "../../components/Input/Input";

const CatalogFilter = (props) => {
  const {
    products,
    setFilteredProducts,
  } = props

  const [searchQuery, setSearchQuery] = useState('')

  const onInputChange = ({ target }) => {
    const newSearchQuery = target.value
    const newFilteredProducts = products.filter(({ title }) => {
      return title.toLowerCase().includes(newSearchQuery.toLowerCase())
    });
    setSearchQuery(newSearchQuery)
    setFilteredProducts(newFilteredProducts)
  }

  return (
    <div className="catalog-filter">
      <div className="catalog-filter__title">
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.165558 1.3577C0.449883 0.757422 1.05445 0.375 1.71875 0.375H20.2812C20.9473 0.375 21.5488 0.757422 21.8324 1.3577C22.1203 1.95797 22.0301 2.66824 21.5746 3.18215L13.75 12.7887V18.25C13.75 18.7699 13.4578 19.2469 12.9895 19.4789C12.5254 19.7109 11.9668 19.6637 11.55 19.35L8.8 17.2875C8.45195 17.0297 8.25 16.6215 8.25 16.1875V12.7887L0.388523 3.18215C-0.0320119 2.66824 -0.118809 1.95797 0.165601 1.3577H0.165558Z" fill="#FF8F52"/>
        </svg>
        <span>Filtering</span>
      </div>
      <Input
        className="catalog-filter__input"
        placeholder="Search..."
        value={searchQuery}
        onChange={onInputChange}
        />
      <div className="catalog-filter__cheep">
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.78 8.625H17.914C18.6749 8.625 19.292 8.00926 19.292 7.25C19.292 6.49074 18.6749 5.875 17.914 5.875H13.8187C13.0578 5.875 12.4407 6.49074 12.4407 7.25C12.4407 8.00926 13.0178 8.625 13.78 8.625ZM13.78 14.125H20.67C21.4309 14.125 22.0479 13.5093 22.0479 12.75C22.0479 11.9907 21.4309 11.375 20.67 11.375H13.8187C13.0578 11.375 12.4407 11.9907 12.4407 12.75C12.4407 13.5093 13.0178 14.125 13.78 14.125ZM13.78 3.125H15.158C15.9189 3.125 16.4972 2.50926 16.4972 1.75C16.4972 0.990742 15.8801 0.375 15.158 0.375H13.78C13.0191 0.375 12.402 0.990742 12.402 1.75C12.402 2.50926 13.0178 3.125 13.78 3.125ZM23.4259 16.875H13.8187C13.0578 16.875 12.4407 17.4907 12.4407 18.25C12.4407 19.0093 13.0578 19.625 13.8187 19.625H23.4259C24.1869 19.625 24.8039 19.0093 24.8039 18.25C24.8039 17.4907 24.1881 16.875 23.4259 16.875ZM8.28522 13.2098L6.89 14.7309V1.75129C6.89 0.990742 6.2742 0.375 5.512 0.375C4.7498 0.375 4.134 0.990742 4.134 1.75129V14.7278L2.73878 13.2098C2.46697 12.914 2.09543 12.7637 1.72208 12.7637C1.38968 12.7637 1.05591 12.8832 0.791504 13.1253C0.230402 13.6388 0.192937 14.5097 0.706714 15.0705L4.45745 19.1994C4.97936 19.7691 5.96721 19.7691 6.48956 19.1994L10.2403 15.0705C10.7545 14.5097 10.7166 13.6392 10.1555 13.1253C9.67182 12.6125 8.80196 12.6512 8.28522 13.2098Z" fill="#FF8F52"/>
        </svg>
        <span>Cheep</span>
      </div>
    </div>
  );
};

export default CatalogFilter;