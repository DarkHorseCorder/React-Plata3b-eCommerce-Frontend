import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import shopbox from '../../../data/shop.json';
import { Rating } from '../../../helper/helper';
import Countdown from "react-countdown";
// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <div className="andro_countdown-timer">{days} Days {hours}:{minutes}:{seconds}</div>;
    }
};
class Banner extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: true,
        };
        return (
            <div className="andro_banner banner-3 bg-contain bg-norepeat">
                <Slider className="andro_banner-slider" ref={c => (this.slider = c)} {...settings}>
                    {shopbox.slice(0, 3).map((item, i) => (
                        <div key={i} className="andro_banner-slider-inner">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 d-none d-lg-block">
                                        <div className="andro_product">
                                            {
                                                item.featured === true ? <div className="andro_product-badge andro_badge-featured">
                                                    <i className="fa fa-star" />
                                                    <span>Featured</span>
                                                </div> : ''
                                            }
                                            {
                                                item.discount > 0 || item.discount !== '' ? <div className="andro_product-badge andro_badge-sale">
                                                    {item.discount}% Off
                                            </div> : ''
                                            }
                                            <div className="andro_product-thumb">
                                                <Link to={"/product-single/" + item.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                                </Link>
                                                <Countdown date={Date.now() + item.timeleft} renderer={renderer} />
                                            </div>
                                            <div className="andro_product-body">
                                                <h5 className="andro_product-title">
                                                    <Link to={"/product-single/" + item.id}> {item.title} </Link>
                                                </h5>
                                                <div className="andro_rating-wrapper">
                                                    <div className="andro_rating">
                                                        {Rating(item.rating)}
                                                    </div>
                                                    <span>{item.rating} Stars</span>
                                                </div>
                                            </div>
                                            <div className="andro_product-footer">
                                                <div className="andro_product-price">
                                                    {
                                                        item.discount > 0 || item.discount !== '' ? <span>{new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}$</span> : ''
                                                    }
                                                    <span>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                                </div>
                                                <Link to={"/product-single/" + item.id} className="andro_btn-custom btn-sm">Buy Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 offset-lg-1">
                                        <p>Use code <strong className="custom-primary">JEWEL2233</strong> during checkout</p>
                                        <h1> Modern Design Neckless <span className="fw-400">Can Now Be Purchased</span> </h1>
                                        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh.
                            Vestibulum ac diam sit amet quam vehicula.</p>
                                        <Link to="/shop-v2" className="andro_btn-custom">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="container">
                    <div className="andro_arrows justify-content-center">
                        <i className="fa fa-arrow-left slick-arrow slider-prev" onClick={this.previous} />
                        <i className="fa fa-arrow-right slick-arrow slider-next" onClick={this.next} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;