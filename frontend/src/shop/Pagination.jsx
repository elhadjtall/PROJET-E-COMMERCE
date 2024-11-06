import React from 'react'

const Pagination = ({productsPerPage, totalProducts, pagination, activePage}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <ul className='default-pagination lab-ul'>
    {
      pageNumbers.map(number => (
      <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
        <button onClick={() => paginate(number)} className='bg-transparent border-0'>
          {number}
        </button>
      </li>
    ))}
  </ul>
  
  )
}

export default Pagination
