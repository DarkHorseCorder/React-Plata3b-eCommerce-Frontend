import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

const bannerslides = [
    {
        photo: "assets/img/banner/1.jpg",
        proimg: "assets/img/products/8.png",
        ctaimg: "assets/img/cta/3.jpg",
        couponcode: "Jewel991",
        title: "Modern Design Rings",
        para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula.",
    },
    {
        photo: "assets/img/banner/2.jpg",
        proimg: "assets/img/products/14.png",
        ctaimg: "assets/img/cta/2.jpg",
        couponcode: "Jewel991",
        title: "Modern Design Exotic Le'tamry ",
        para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula.",
    },
]

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
        }
        return (
            <div className="andro_banner banner-2">
                <Slider className="andro_banner-slider" {...settings}>
                    {bannerslides.map((item, i) => (
                        <div key={i}>
                            <div className="andro_banner-slider-inner" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.photo + ")" }}>
                                <div className="container">
                                    <div className="andro_banner-slider-text">
                                        <img src={process.env.PUBLIC_URL + "/" + item.proimg} className="img-1" alt={item.title} />
                                        <p>Use code <strong className="custom-primary">{item.couponcode}</strong> during checkout</p>
                                        <h1 style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.ctaimg + ")" }}> {item.title} </h1>
                                        <p>{item.para}</p>
                                        <Link to="/shop-v2" className="andro_btn-custom">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Banner;