import React from 'react'
import { useState } from 'react';

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
                        <li onClick={() => filterItem("All")}>Shoes</li>
                        <li onClick={() => filterItem("All")}>Bags</li>
                        <li onClick={() => filterItem("All")}>Phones</li>
                        <li onClick={() => filterItem("All")}>Beauty</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryShowCase
