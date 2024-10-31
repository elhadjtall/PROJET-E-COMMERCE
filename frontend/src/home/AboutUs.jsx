import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';


const subTitle = "Why Choose Us";
const title = "Become a Marchant";

const desc = 
    "Take courses on your device with our app & enjoy your time what you want. Just download & install & start to shopping";

const btnText = "Apply Now";

const countList = [
    {
        iconName: "icofont-users-alt-4",
        count: "12600",
        title: "More than 2000 Merchants",
    },
    {
        iconName: "icofont-notification",
        count: "30",
        title: "More than 2000 Merchants",
       
    },
    {
        iconName: "icofont-globe",
        count: "100",
        title: "More than 2000 Merchants",
    },
]
const AboutUs = () => {
  return (
    <div className='instructor-section style-2 padding-tb section-bg-ash'>
        <div className='container'>
            <div className='section-wrapper'>
                {/* c'est le div principal du code qui permet d'alligner les elements */}
                <div className='row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3 '>
                    <div className='col'>
                        {
                            countList.map((val, i) => (
                                <div key={i} className='count-item'>
                                    <div className='count-inner'>
                                        <div className='count-icon'>
                                            <i className={val.iconName}></i>
                                        </div>
                                        <div className='count-content'>
                                            <h2>
                                                <span className='count'><CountUp end={val.count}/></span>
                                                <span>+</span>
                                            </h2>
                                            <p>{val.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* ce code permet d'afficher le titre et le sous-titre sur la droite puis le bouton Apply Now */}
                    <div className='col'>
                        <div className='instructor-content'>
                            <span className='subtitle'>{subTitle}</span>
                            <h2 className='title'>{title}</h2>
                            <p>{desc}</p>
                            <Link to="/sign-up" className='lab-btn'>{btnText}</Link>
                        </div>
                    </div>

                    {/* ce code permet d'afficher l'image */}
                    <div className='col'>
                        <div className='instructor-thumb'>
                            <img src="src/assets/images/instructor/01.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
