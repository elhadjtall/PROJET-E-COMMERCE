import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const showResults = "Showing 1–9 of 20 results"; // Déclarez la variable showResults ici

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
              <div className='shop-title d-flex flex-wrap justify-content-between'>
                <p>{showResults}</p>
                <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                  <a className='grid' onClick={() => setGridList(!GridList)}>
                    <i className="icofont-ghost"></i>
                  </a>
                  <a className='list' onClick={() => setGridList(!GridList)}>
                    <i className="icofont-listine-dots"></i>
                  </a>
                </div>
              </div>
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