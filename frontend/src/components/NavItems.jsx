import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {

    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    //addevent listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    })  
  return (
    <header>
    {/* header top start */}
    <div className={`header-top ${socialToggle ? 'open' : ''}`}>
      <div className="header-top-area">
        <Link to="/signup" className="lab-btn me-3"><span>Create Account</span></Link>
        <Link to="/login"><span>Log In</span></Link>
      </div>
    </div>
  </header>
  )
}

export default NavItems
