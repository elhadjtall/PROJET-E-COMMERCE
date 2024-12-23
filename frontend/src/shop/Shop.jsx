import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Data from '../products.json';
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';

const Shop = () => {
  const showResults = "Showing 1–9 of 20 results";
  const [GridList, setGridList] = useState(true);
  const [products, setproducts] = useState(Data);

  // Ajout de la page de pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Affichage des produits en fonction du type de produits pour le vendeur ou pour le client
  const [selectedCategory, setSelectedCategory] = useState('All');
  const menuItems = [...new Set(Data.map((val) => val.category))];
  const filterItem = (category) => {

    const filterItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    })

    setSelectedCategory(curcat);
    setproducts(newItem);
  }
  

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop"/>
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
                <ProductCards GridList={GridList} products={currentProducts} />
              </div>

              {/* pagination page */}
              <Pagination 
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                pagination={paginate} // Renommage de la prop en "pagination"
                activePage={currentPage}
              />
             </article>
            </div>
            {/* fin du bloc */}

            {/* Debut right side le bloc de droite */}
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList}/>

                {/* Différent type de produits pour le vendeur */}
                <ShopCategory 
                filterItem={filterItem}
                setItem={setproducts}
                menuItems={menuItems}
                setProducts={setproducts}
                selectedCategory={selectedCategory}
                />
              </aside>
            </div>
            {/* fin du bloc de droite */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;