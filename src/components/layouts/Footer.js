import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <footer className={"andro_footer " + this.props.footer.style}>
                {/* Top Footer */}
                <div className="container">
                    <div className="andro_footer-top">
                        <div className="andro_footer-logo">
                            <img src={process.env.PUBLIC_URL + "/" + this.props.footer.logo} alt="logo" />
                        </div>
                        {/*<div className="andro_footer-buttons">
                            <Link to="#"> <img src={process.env.PUBLIC_URL + "/assets/img/android.png"} alt="download it on the app store" /></Link>
                            <Link to="#"> <img src={process.env.PUBLIC_URL + "/assets/img/ios.png"} alt="download it on the app store" /></Link>
        </div>*/}
                    </div>
                </div>
                {/* Middle Footer */}
                <div className="andro_footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Information</h5>
                                <ul>
                                    <li> <Link to="/">Home</Link> </li>
                                    <li> <Link to="/blog-grid">Blog</Link> </li>
                                    <li> <Link to="/about">About Us</Link> </li>
                                    <li> <Link to="/shop-v2">Shop</Link> </li>
                                    <li> <Link to="/contact">Contact Us</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Top Categories</h5>
                                <ul>
                                    <li> <Link to="#">Diamond</Link> </li>
                                    <li> <Link to="#">Gold</Link> </li>
                                    <li> <Link to="#">White Gold</Link> </li>
                                    <li> <Link to="#">Mix Gold</Link> </li>
                                    <li> <Link to="#">Platinum</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Otros</h5>
                                <ul>
                                    <li> <Link to="/checkout">Checkout</Link> </li>
                                    <li> <Link to="/cart">Cart</Link> </li>
                                    <li> <Link to="/product-single">Product</Link> </li>
                                    <li> <Link to="/">Tienda</Link> </li>
                                    <li> <Link to="/legal">Legal</Link> </li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget">
                                <h5 className="widget-title">Redes sociales</h5>
                                <ul className="social-media">
                                    <li> <Link to="#" className="instagram"> <i className="fab fa-instagram" /> </Link> </li>
                                    <li> <Link to="#" className="facebook"> <i className="fab fa-facebook-f" /> </Link> </li>
                                    <li> <Link to="#" className="linkedin"> <i className="fab fa-linkedin" /> </Link> </li>
                                 </ul>
                                <div className="andro_footer-offer">
                                    <p>Signup and get exclusive offers and coupon codes</p>
                                    <Link to="/register" className="andro_btn-custom btn-sm shadow-none">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="andro_footer-bottom">
                    <div className="container">
                        <ul>
                            <li> <Link to="#">Privacy Policy</Link> </li>
                            <li> <Link to="#">Refund Policy</Link> </li>
                            <li> <Link to="#">Cookie Policy</Link> </li>
                            <li> <Link to="#">Terms &amp; Conditions</Link> </li>
                        </ul>
                        <div className="andro_footer-copyright">
                            <p> Copyright © 2021 <Link to="#">Plata3b.com</Link> All Rights Reserved. </p>
                            <Link to="#" className="andro_back-to-top" onClick={() => this.scrollToTop()}>Back to top <i className="fas fa-chevron-up" /> </Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;