import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const jwellrySlider = [
    { img: "assets/img/h2-banner-1.jpg", subtitle: "Hot Products", title: "Fill your neck full of jwellery", price: 45.00 },
    { img: "assets/img/h2-banner-2.jpg", subtitle: "Hot Products", title: "Fill your neck full of jwellery", price: 45.00 },
    { img: "assets/img/h2-banner-3.jpg", subtitle: "Hot Products", title: "Fill your neck full of jwellery", price: 45.00 },
];

class Topbanner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: "slick-dots d-flex",
            autoplay: true
        }
        return (
            <div className="jw-ecommerce-banner-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 p-0">
                            <Slider {...settings} className="left-side-banner">
                                {jwellrySlider.map((item, i) => (
                                    <div className="slide-item" key={i}>
                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt="" />
                                        <div className="absolute-text">
                                            <div className="banner-text">
                                                <p className="sub-title">{item.subtitle}</p>
                                                <h2 className="title">{item.title}</h2>
                                                <p className="price"><span>Start from</span> ${item.price}</p>
                                                <Link to="/shop-v1" className="andro_btn-custom">Shop now</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-section">
                                <div className="banner-thumbnail">
                                    <Link to="/shop-v1">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/banner-thumb-1.jpg"} alt="" />
                                    </Link>
                                    <div className="absolute-text">
                                        <div className="thumbnail-text">
                                            <h5>40% Off Discount</h5>
                                            <Link to="/shop-v1">More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-thumbnail">
                                    <Link to="/shop-v1">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/banner-thumb-2.jpg"} alt="" />
                                    </Link>
                                    <div className="absolute-text">
                                        <div className="thumbnail-text">
                                            <h5>Best Quality for Better Future</h5>
                                            <Link to="/shop-v1">More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbanner;