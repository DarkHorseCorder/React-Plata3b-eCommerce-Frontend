import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import shopbox from '../../../data/shop.json';
import { Rating } from '../../../helper/helper';
import Quickview from '../../layouts/Quickview';

class Fresharrivals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    // Modal
    modalShow() {
        this.setState({ modalshow: true });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
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
            <div className="section pt-0 andro_fresh-arrivals">
                <div className="container">
                    <div className="section-title flex-title">
                        <h4 className="title">Fresh Arrivals</h4>
                        <div className="andro_arrows">
                            <i className="fa fa-arrow-left slick-arrow slider-prev" onClick={this.previous} />
                            <i className="fa fa-arrow-right slick-arrow slider-next" onClick={this.next} />
                        </div>
                    </div>
                    <Slider className="andro_fresh-arrivals-slider" ref={c => (this.slider = c)} {...settings}>
                        {/* Product Start */}
                        {shopbox.map((item, i) => (
                            <div key={i} className="andro_product andro_product-has-controls andro_product-has-buttons">
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
                                </div>
                                <div className="andro_product-body">
                                    <h5 className="andro_product-title">
                                        <Link to={"/product-single/" + item.id}> {item.title} </Link>
                                    </h5>
                                    <div className="andro_product-price">
                                        {
                                            item.discount > 0 || item.discount !== '' ? <span>{new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}$</span> : ''
                                        }
                                        <span>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                    </div>
                                    <p>{item.shortdesc}</p>
                                    <div className="andro_rating-wrapper">
                                        <div className="andro_rating">
                                            {Rating(item.rating)}
                                        </div>
                                        <span>{item.rating} Stars</span>
                                    </div>
                                </div>
                                <div className="andro_product-footer">
                                    <div className="andro_product-buttons">
                                        <Link to={"/product-single/" + item.id} className="andro_btn-custom primary">Add To Cart</Link>
                                        <Link to="#" className="andro_btn-custom light" onClick={this.modalShow}>Quick View</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Product End */}
                    </Slider>
                </div>
                <Modal show={this.state.modalshow} className="andro_quick-view-modal p-0" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                    <Modal.Body>
                        <div className="close-btn close-dark close" onClick={this.modalClose}>
                            <span />
                            <span />
                        </div>
                        <Quickview />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Fresharrivals;