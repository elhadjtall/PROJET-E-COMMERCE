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
    </div>
  )
}

export default AppSection
