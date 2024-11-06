import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, pagination, activePage }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='default-pagination lab-ul'>
      {/* Bouton pour la page précédente */}
      <li>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          if (activePage > 1) {
            pagination(activePage - 1);
          }
        }}>
          <i className='icofont-rounded-left'></i>
        </a>
      </li>

      {/* Numéros de page */}
      {pageNumbers.map(number => (
        <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
          <button onClick={() => pagination(number)} className='bg-transparent border-0'>
            {number}
          </button>
        </li>
      ))}

      {/* Bouton pour la page suivante */}
      <li>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          if (activePage < pageNumbers.length) {
            pagination(activePage + 1);
          }
        }}>
          <i className='icofont-rounded-right'></i>
        </a>
      </li>
    </ul>
  );
}

export default Pagination;