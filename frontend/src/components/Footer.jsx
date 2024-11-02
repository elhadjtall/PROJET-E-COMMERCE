import React from 'react';
import { Link } from 'react-router-dom';

// Les constantes
const title = 'About ShopCart';
const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officia.';
const quickTitle = 'Quick Links';
const ItemTitle = "Categories";
const tweetTitle = "Twitter Feeds";

// Ce code détermine les icônes des adresses
const addressList = [
    { iconName: "icofont-google-map", text: " New York, USA." },
    { iconName: "icofont-phone", text: " (+1) 123 456 7890" },
    { iconName: "icofont-envelope", text: " 6Zd5l@example.com" },
];

// Ce code détermine les icônes des réseaux affichés sur le footer
const socialList = [
    { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
    { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
    { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
    { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
    { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
];

const ItemList = [
    { text: "All Products", link: "/shop" },
    { text: "Shop", link: "/shop" },
    { text: "Blog", link: "/blog" },
    { text: "About", link: "/about" },
    { text: "Policy", link: "#" },
    { text: "Terms of Use", link: "#" },
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

const footerbottomList = [
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
                    <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center'>
                        {/* footer item du premier block */}
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
                                                        <i className={val.iconName}></i> {val.text}
                                                    </li>
                                                ))}
                                            </ul>
                                            <ul className="lab-ul social-icons">
                                                {socialList.map((val, i) => (
                                                    <li key={i}>
                                                        <a href={val.siteLink} className={val.className}>
                                                            <i className={val.iconName}></i>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* footer item du second block categorie */}
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{ItemTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul office-address">
                                                {ItemList.map((val, i) => (
                                                    <li key={i}>
                                                        <Link to={val.link}>{val.text}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* footer item du troisieme block quick list */}
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{quickTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul office-address">
                                                {ItemList.map((val, i) => (
                                                    <li key={i}>
                                                        <Link to={val.link}>{val.text}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* footer item du quatrieme block tweet list */}
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{tweetTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul office-address">
                                                {tweetList.map((val, i) => (
                                                    <li key={i}>
                                                        <i className={val.iconName}></i> {val.desc}
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

            {/* footer bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <p>&copy; 2024. Shop Cart Designed by <a href="/" target="_blank">XYZ</a></p>
                        <div className="footer-bottom-list">
                            {
                                footerbottomList.map((val, i) => (
                                    <Link to={val.link} key={i}>{val.text}</Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
