import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Data from '../products.json';
import ProductCards from './ProductCards';
import Pagination from './Pagination';

const Shop = () => {
  const showResults = "Showing 1–9 of 20 results"; // Déclarez la variable showResults ici
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data); // Corrigez ici en utilisant Data sans tableau imbriqué
  console.log(products);


  // Ajout de la page de pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  }
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop"/>
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            {/* left side le bloc de gauche */}
            <div className="col-lg-8 col-12">
             <article>
              {/* layout and title here */}
              <div className='shop-title d-flex flex-wrap justify-content-between'>
                <p>{showResults}</p>
                <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                  <a className='grid' onClick={() => setGridList(true)}>
                    <i className="icofont-ghost"></i>
                  </a>
                  <a className='list' onClick={() => setGridList(false)}>
                    <i className="icofont-listine-dots"></i>
                  </a>
                </div>
              </div>

              <div>
                <ProductCards GridList={GridList} products={products}/>
              </div>

              {/* pagination page */}
              <Pagination 
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              activePage={currentPage}
              />

             </article>
            </div>
            {/* fin du bloc */}
            {/* Debut right side le bloc de droite */}
            <div className="col-lg-4 col-12">
              right side
            </div>
            {/* fin du bloc de droite */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;