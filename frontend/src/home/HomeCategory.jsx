import React from 'react';
import { Link } from 'react-router-dom';

const subTitle = "Choose Any Product";
const title = "Buy Everything xith Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl : "src/assets/images/category/01.jpg",
        imgAlt: "catgory rakbra",
        iconName: "icofont-brand-windows",
        title: "DSLR Camera",
    },
    {
        imgUrl : "src/assets/images/category/02.jpg",
        imgAlt: "catgory rakbra",
        iconName: "icofont-brand-apple",
        title: "Shoes",
    },
    {
        imgUrl : "src/assets/images/category/03.jpg",
        imgAlt: "catgory rakbra",
        iconName: "icofont-brand-android",
        title: "Photography Camera",
    },
    {
        imgUrl : "src/assets/images/category/04.jpg",
        imgAlt: "catgory rakbra",
        iconName: "icofont-brand-skype",
        title: "Formal Dress",
    },
    {
        imgUrl : "src/assets/images/category/05.jpg",
        imgAlt: "catgory rakbra",
        iconName: "icofont-brand-play-station",
        title: "Colorful Bags",
    },
    {
        imgUrl : "src/assets/images/category/06.jpg",
        imgAlt: "catgory rakbra",
        iconName: "icofont-brand-android",
        title: "Home Decor",
    },
]
const HomeCategory = () => {
  return (
    <div className='category-section style-4 padding-tb'>
        <div className='container'>
            {/* section header pour afficher le titre et le sous-titre */}
            <div className='section-header text-center'>
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>
            {/* section du cadre */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((val, i) => (<div key={i} className='col'>
                            <Link to="/shop" className='category-item'>
                                <div className='category-inner'>
                                    {/* images en miniature */}
                                    <div className='category-thumb'>
                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                    </div>

                                    {/* nom de la categorie */}
                                    <div className='category-content'>
                                        <div className='cate-icon'>
                                            <i className={val.iconName}></i>
                                        </div>
                                        {/* nom de la categorie en lien ce code donne la visibilité au lien */}
                                        <Link to="/shop"><h6>{val.title}</h6></Link>
                                    </div>
                                </div>
                            </Link>
                       </div> ))
                    }
                </div>

                {/* bouton pour rediriger vers le shop */}
                <div className='text-center mt-5'>
                    <Link to="/shop" className='lab-btn'><span>{btnText}</span></Link>  
                </div>

            </div>
        </div>
    </div>
  )
}

export default HomeCategory
