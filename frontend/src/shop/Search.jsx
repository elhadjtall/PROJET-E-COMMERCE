import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Search = ({products, GridList}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className='widget widget-search'>
      <form className='search-wrapper mb-3'>
        <input type="text" name="search" id="search" placeholder="Search..." defaultValue={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>

      {/* showing search result ce code permet de afficher les produits correspondants au terme de recherche*/}
        <div>
          {
            searchTerm && filteredProducts.map((product) => (
              <Link key={product.id} to={`/shop/${product.id}`}>
              <div className='d-flex gap-3 p-2'>
                  <div>
                    <div>
                      <img src={product.img} alt='' width={70} className='flex-grow-0' />
                    </div>
                  </div>
                  <div className="produtct-content">
                    {/* filtrer les produits avec le nom du produit qui affiche devant */}
                    <p>
                      <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </p>
                    {/* filtrer les produits avec le prix du produit qui affiche devant */}
                    <h6>${product.price}</h6>
                  </div>
                </div>
              </Link>
              ))
            }
        </div>
    </div>
  )
}

export default Search
