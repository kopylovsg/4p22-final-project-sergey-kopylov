import React from 'react';
import './Pagination.css'

const Pagination = (props) => {
  const {
    className = '',
    totalPages,
    currentPage = 1,
    setPageNumber,
  } = props;

  if (totalPages < 2) return null;

  const setPreviousPage = () => {
    if (currentPage > 1) {
      setPageNumber(currentPage - 1)
    }
  };

  const setNextPage = () => {
    if (currentPage < totalPages) {
      setPageNumber(currentPage +1)
    }

  };

  const items = [...Array(totalPages).keys()].map((number) => number + 1);


  return (
    <nav className={`${className} pagination`}>
      <ul className="pagination__list">
        <li className="pagination__items">
          <button
            className="pagination__button"
            type="button"
            onClick={setPreviousPage}
            disabled={currentPage === 1}
          >
            ←
          </button>
        </li>
        {items.map((number) => {
          const isActive = number === currentPage

          return (
            <li className="pagination__item" key={number.toString()}>
              <button
                className={`pagination__button ${isActive ? 'is-active' : ''}`}
                type="button"
                onClick={() => setPageNumber(number)}
              >
                {number}
              </button>
            </li>
          )
        })}
        <li className="pagination__items">
          <button
            className="pagination__button"
            type="button"
            onClick={setNextPage}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </li>
      </ul>

    </nav>
  );
};

export default Pagination;