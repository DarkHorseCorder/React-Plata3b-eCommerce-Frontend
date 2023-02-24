import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Category from '../../layouts/Category';

const bannerslider = [
    {
        photo: "assets/img/products/2.png",
        couponcode: "Le'tam991",
        title: "40% Sale",
        titlespan: "On Select Products",
        para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
    },
    {
        photo: "assets/img/products/12.png",
        couponcode: "Le'tam991",
        title: "40% Sale",
        titlespan: "On Select Products",
        para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
    },
]

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: "slick-dots d-flex",
            autoplay: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        {/* Menu Start */}
                        <div className="col-lg-3">
                            <div className="andro_category-mm">
                                <div className="andro_category-mm-header">
                                    <h6> <i className="fas fa-th-large" /> Categories</h6>
                                </div>
                                <div className="andro_category-mm-body">
                                    <Category />
                                </div>
                            </div>
                        </div>
                        {/* Menu End */}
                        {/* Banner Start */}
                        <div className="col-lg-9">
                            <div className="andro_flex-menu d-none d-md-block">
                                <ul>
                                    <li className="menu-item"> <Link to="/shop-v1">Daily Deals</Link> </li>
                                    <li className="menu-item menu-item-has-children">
                                        <Link to="#">Top Sellers</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item"> <Link to="#">Diamond</Link> </li>
                                            <li className="menu-item"> <Link to="#">Gold</Link> </li>
                                            <li className="menu-item"> <Link to="#">Silver</Link> </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"> <Link to="/shop-v3">Fresh Arrivals</Link> </li>
                                    <li className="menu-item menu-item-has-children">
                                        <Link to="#">Gift Carts</Link>
                                        <ul className="sub-menu">
                                            <li className="menu-item"> <Link to="#">Loyalty System</Link> </li>
                                            <li className="menu-item"> <Link to="#">Redemption Coupons</Link> </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"> <Link to="/wishlist">Wishlist</Link> </li>
                                </ul>
                            </div>
                            <div className="andro_banner banner-1" style={{ height: "calc(100% - 50px)" }}>
                                <Slider className="andro_banner-slider" {...settings}>
                                    {bannerslider.map((item, i) => (
                                        <div key={i} className="container-fluid">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <p>Use code <strong className="custom-primary">{item.couponcode}</strong> during checkout</p>
                                                    <h1> {item.title} <span className="fw-400">{item.titlespan}</span> </h1>
                                                    <p>{item.para}</p>
                                                    <Link to="/shop-v2" className="andro_btn-custom">Shop Now</Link>
                                                </div>
                                                <div className="col-lg-6 d-none d-lg-block">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.title} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        {/* Banner End */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;