import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import shopbox from '../../data/shop.json';
import { Rating } from '../../helper/helper';
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

class Dealslider extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass:"slick-dots d-flex",
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
        }
        return (
            <Slider className="deals-slider" {...settings}>
                {/* Deal Start */}
                {shopbox.slice(0, 3).map((item, i) => (
                    <div key={i} className="andro_product">
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
                            <p>{item.shortdesc}</p>
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
                ))}
                {/* Deal End */}
            </Slider>
        );
    }
}

export default Dealslider;