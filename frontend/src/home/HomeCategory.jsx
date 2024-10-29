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
        title: "Smart Watch",
    },
    {
        imgUrl : "src/assets/images/category/03.jpg",
        imgAlt: "catgory rakbra",
        iconName: "icofont-brand-android",
        title: "Smart TV",
    },
    {
        imgUrl : "src/assets/images/category/04.jpg",
        imgAlt: "catgory rakbra",
        iconName: "icofont-brand-skype",
        title: "Smart Speaker",
    },
    {
        imgUrl : "src/assets/images/category/05.jpg",
        imgAlt: "catgory rakbra",
        iconName: "icofont-brand-play-station",
        title: "Video Game",
    },
    {
        imgUrl : "src/assets/images/category/06.jpg",
        imgAlt: "catgory rakbra",
        iconName: "icofont-brand-android",
        title: "Smart Watch",
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
                                    <div className='category-thumb'>
                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                    </div>

                                </div>
                            </Link>
                       </div> ))
                    }
                </div>

            </div>
        </div>
    </div>
  )
}

export default HomeCategory
