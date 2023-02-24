import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../../data/cart.json';
import shop from '../../../data/shop.json';
import { Modal } from 'react-bootstrap';
import Slider from 'react-slick';
import { Rating } from '../../../helper/helper';
import Quickview from '../../layouts/Quickview';

const priceTotal = cart.reduce((totalPrice, item) => totalPrice + item.price * item.qty, 0);

class Cartform extends Component {
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
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
        };
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row andro_cart-form">
                        <div className="col-lg-6 andro_upsells">
                            <div className="section-title flex-title">
                                <h4 className="title">Upsells</h4>
                                <div className="andro_arrows">
                                    <i className="fa fa-arrow-left slick-arrow slider-prev" onClick={this.previous} />
                                    <i className="fa fa-arrow-right slick-arrow slider-next" onClick={this.next} />
                                </div>
                            </div>
                            {/* Upsells Start */}
                            <Slider className="andro_upsells-slider" ref={c => (this.slider = c)} {...settings}>
                                {/* Product Start */}
                                {shop.map((item, i) => (
                                    <div key={i} className="andro_product andro_product-list andro_product-has-controls andro_product-has-buttons d-block d-sm-flex">
                                        <div className="andro_product-thumb">
                                            <Link to={"/product-single/" + item.id}>
                                                <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                            </Link>
                                        </div>
                                        <div className="andro_product-body">
                                            <div className="andro_rating-wrapper">
                                                <div className="andro_rating">
                                                    {Rating(item.rating)}
                                                </div>
                                                <span>{item.rating} Stars</span>
                                            </div>
                                            <h5 className="andro_product-title"> <Link to={"/product-single/" + item.id}> {item.title} </Link> </h5>
                                            <div className="andro_product-price">
                                                {
                                                    item.discount > 0 || item.discount !== '' ? <span>{new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}$</span> : ''
                                                }
                                                <span>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                            </div>
                                            <p>{item.shortdesc}</p>
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
                            {/* Upsells End */}
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h4 className="title">Cart Total</h4>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Subtotal</th>
                                        <td>{new Intl.NumberFormat().format((priceTotal).toFixed(2))}$</td>
                                    </tr>
                                    <tr>
                                        <th>Tax</th>
                                        <td> 9.99$ <span className="small">(11%)</span> </td>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <td> <b>{new Intl.NumberFormat().format((priceTotal + 9.99).toFixed(2))}$</b> </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="submit" className="andro_btn-custom primary btn-block">Proceeed to Checkout</button>
                        </div>
                    </div>
                </div>
                {/* Modal */}
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

export default Cartform;