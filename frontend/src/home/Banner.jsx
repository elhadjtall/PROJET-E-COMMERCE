import React from 'react';
import { useState } from 'react';
import productData from '../products.json'

const title = <h2>Search Your One From <span>Thousand</span>of Products </h2>
const desc = "We have the largest collection of products"
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers"
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent"
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online"
    },
];

const Banner = () => {

    const {searchInput, setSearchInput} = useState('');
    const {filteredProducts, setFilteredProducts} = useState([]);

    // Après l'importation du fichier json, nous pouvons l'utiliser pour la recherche d'un produit
    console.log(productData);
  return (
    // banner section permet d'afficher le text de recherche d'un produit au milieu de la page
    <div className='banner-section style-4'> 
        <div className='container'>
            <div className='banner-content'>{title}</div>
                <form>
                <input type='text' name='search' id='search' placeholder='Serach your product'/>
                </form>
        </div>
    </div>
  )
}

export default Banner
