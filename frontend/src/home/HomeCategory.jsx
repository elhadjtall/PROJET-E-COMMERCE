import React from 'react';

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
            {/* section header */}
            <div className='section-header text-center'>
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>
        </div>
     HomeCategory
    </div>
  )
}

export default HomeCategory
