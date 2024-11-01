import React from 'react';
import { Link } from 'react-router-dom';


const btnText = "Sign for Free";
const title = "Shop Anytime, Anywhere";
const desc = "Take shop on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
            <Link to="/sign-up" className='lab-btn'><span>{btnText}</span></Link>
            <h2 className='title'>{title}</h2>
            <p>{desc}</p>
        </div>
      </div>
      
      {/* section pour ajouter les images google play et app store */}
      <div className='section-wrapper'>
        <div className='lab-ul'>
            <ul>
                <li><Link to="/sign-up" className='app-btn'><img src="src/assets/images/app/01.jpg" alt="" /></Link></li>
                <li><Link to="/sign-up" className='app-btn'><img src="src/assets/images/app/02.jpg" alt="" /></Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default AppSection
