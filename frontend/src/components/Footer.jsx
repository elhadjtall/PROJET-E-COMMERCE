import React from 'react'


const title = 'About ShopCart';
const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officia.';
const ItemTitle = 'Categories';
const quickTitle = 'Quick Links';
const tweetTitle = 'Recent Tweets';

// Ce code determine les icons des addresses
const addressList = [
    {iconName: "icofont-google-map", text: " New York, USA."},
    {iconName: "icofont-phone", text: " (+1) 123 456 7890"},
    {iconName: "icofont-envelope", text: " 6Zd5l@example.com"},
];

// Ce code determine les icons des reseaux afficher sur le footer
const socialList = [
    {iconName: "icofont-facebook", siteLink: "#", className: "facebook"},
    {iconName: "icofont-twitter", siteLink: "#", className: "twitter"},
    {iconName: "icofont-linkedin", siteLink: "#", className: "linkedin"},
    {iconName: "icofont-pinterest", siteLink: "#", className: "pinterest"},
    {iconName: "icofont-instagram", siteLink: "#", className: "instagram"},
];

const ItemList = [
    {text: "All Products", link: "/shop"},
    {text: "shop", link: "/shop"},
    {text: "Blog", link: "/blog"},
    {text: "About", link: "/about"},
    {text: "Policy", link: "#"},
    {text: "Terms of Use", link: "#"},
];

const tweetList = [
    {
        iconName: "icofont-twitter",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officia.",
    },
    {
        iconName: "icofont-twitter",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officia.",
    }
];

const footerottomList = [
    {text: "Faculty", link: "#"},
    {text: "Staff", link: "#"},
    {text: "Students", link: "#"},
    {text: "Alumni", link: "#"},
]
const Footer = () => {
  return (
    <footer className='style-2'>
      <div className='footer-top dark-view padding-tb'>
        <div className='container'>
          <div className='row'>
                <div className="col">
                    <div className="footer-item our-address">
                        <div className="footer-inner">
                            <div className="footer-content">
                                <div className="title">
                                    <h4>{title}</h4>
                                </div>
                                <div className="content">
                                    <p>{desc}</p>
                                    <ul className="lab-ul office-address">
                                        {addressList.map((val, i) => (
                                            <li key={i}>
                                                <i className={val.iconName}>{val.text}</i>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                        {socialList.map((val, i) => (
                                            <li key={i}>
                                                <a href="#">
                                                    <i className={val.iconName}>{val.text}</i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
