import React from 'react'
import { useState } from 'react';
import Ratting from '../components/Ratting';
import { Link } from 'react-router-dom';

const title = "Our Products";

const subTitle = "Choose Any Product";

const productData = [
    {
        imgUrl : "src/assets/images/categoryTab/01.jpg",
        cate: "Shoes",
        title: "Nike Premier X",
        author: "assets/images/courses/author/01.jpg",
        brand: "Nike",
        price: "50.00",
        id: 1,
    },
    {
        imgUrl : "src/assets/images/categoryTab/02.jpg",
        cate: "Shoes",
        title: "Nike Premier X",
        author: "assets/images/courses/author/02.jpg",
        brand: "Nike",
        price: "50.00",
        id: 2,
    },
    {
        imgUrl : "src/assets/images/categoryTab/03.jpg",
        cate: "Shoes",
        title: "Nike Premier X",
        author: "assets/images/courses/author/03.jpg",
        brand: "Nike",
        price: "50.00",
        id: 3,
    },
    {
        imgUrl : "src/assets/images/categoryTab/04.jpg",
        cate: "Shoes",
        title: "Nike Premier X",
        author: "assets/images/courses/author/04.jpg",
        brand: "Nike",
        price: "50.00",
        id: 4,
    },
    {
        imgUrl : "src/assets/images/categoryTab/05.jpg",
        cate: "Shoes",
        title: "Nike Premier X",
        author: "assets/images/courses/author/05.jpg",
        brand: "Nike",
        price: "50.00",
        id: 5,
    },
    {
        imgUrl : "src/assets/images/categoryTab/06.jpg",
        cate: "Shoes",
        title: "Nike Premier X",
        author: "assets/images/courses/author/06.jpg",
        brand: "Nike",
        price: "50.00",
        id: 6,
    },
    {
        imgUrl : "src/assets/images/categoryTab/07.jpg",
        cate: "Shoes",
        title: "Nike Premier X",
        author: "assets/images/courses/author/07.jpg",
        brand: "Nike",
        price: "50.00",
        id: 7,
    },
    {
        imgUrl : "src/assets/images/categoryTab/08.jpg",
        cate: "Shoes",
        title: "Nike Premier X",
        author: "assets/images/courses/author/08.jpg",
        brand: "Nike",
        price: "50.00",
        id: 8,
    },
]
const CategoryShowCase = () => {
    // selection des product data
    const [items, setItems] = useState(productData);
  return (
    <div className='course-section style-3 padding-tb'>
        {/* main shapes */}
        <div className='course-shape one'><img src="src/assets/images/shape-img/icon/01.png" alt="" /></div>
        <div className='course-shape two'><img src="src/assets/images/shape-img/icon/02.png" alt="" /></div>

        {/* main section */}
        <div className='container'>
            {/* section header pour afficher le titre et le sous-titre */}
            <div className='section-header text-center'>
                <h2 className='title'>{title}</h2>
                <div className='course-filter-group'>
                    <ul className='lab-ul'>
                        <li onClick={() => filterItem("All")}>All</li>
                        <li onClick={() => filterItem("Shoes")}>Shoes</li>
                        <li onClick={() => filterItem("Bags")}>Bags</li>
                        <li onClick={() => filterItem("Phones")}>Phones</li>
                        <li onClick={() => filterItem("Beauty")}>Beauty</li>
                    </ul>
                </div>
            </div>
            {/* section bod */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1'>
                    {
                        items.map((product) => <div key={product.id} className='col'>
                            <div className='course-item'>
                                <div className='course-inner'>
                                    <div className='course-thumb'>
                                        <img src={product.imgUrl} alt="" />
                                        <div className='course-category'>
                                        <div className='course-cate'>
                                            <a href="#">{product.cate}</a>
                                        </div>
                                        <div className='course-review'>
                                            <Ratting/>
                                        </div>
                                        </div>
                                    </div>

                                    {/* content */}
                                    <div className='course-content'>
                                        <Link to={"/shop/${product.id}"}><h5>{product.title}</h5></Link>
                                        <div className='course-footer'>
                                            <div className='course-author'>
                                            <Link to="/" className='ca-name'>{product.brand}</Link>
                                            </div>
                                            <div className='course-price'>
                                                {product.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryShowCase
