import React from 'react';
import { Link } from 'react-router-dom';

// Les constantes
const subTitle = "Save The Day";
const title = (
    <h2 className='title'>Join a Day-Long Free Workshop for <b>Advanced <span>Mastering </span>in Sales</b></h2>
);

// Les fonctions pour limiter le temps de chargement pour agir rapidement
const desc = "Limited Time Offer! Hurry Up";

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
        <div className="container">
            <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
                <div className="col">
                    <div className="section-header">
                        <span className="subtitle">{subTitle}</span>
                        {title}
                        <p>{desc}</p>
                    </div>
                </div>

                <div className="col">
                    <div className='section-wrapper'>
                        <h4>Register Now</h4>
                        <form className='register-form'>
                            <input type="text" name="name" placeholder="Username" className='reg-input' />
                            <input type="email" name="email" placeholder="Email" className='reg-input' />
                            <input type="number" name="number" placeholder="Phone" className='reg-input' />

                            <button type="submit" className="lab-btn">
                                <Link to="/shop">Register Now</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Register;