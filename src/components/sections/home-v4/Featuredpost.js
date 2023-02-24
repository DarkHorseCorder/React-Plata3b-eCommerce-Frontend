import React, { Component } from 'react';
import Dealslider from '../../layouts/Dealslider';
import { Link } from 'react-router-dom'
import shopbox from '../../../data/shop.json';
import { Rating } from '../../../helper/helper';
import { Modal } from 'react-bootstrap';
import Quickview from '../../layouts/Quickview';
import blogcategory from '../../../data/blogcategory.json';

class Featuredpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }
    // Modal
    modalShow() {
        this.setState({ modalshow: true });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h4 className="title">Featured Products</h4>
                            </div>
                            <div className="row">
                                {/* Product Start */}
                                {shopbox.slice(0, 6).map((item, i) => (
                                    <div key={i} className="col-sm-6">
                                        <div className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
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
                                                <h6 className="andro_product-title">
                                                    <Link to={"/product-single/" + item.id}> {item.title} </Link>
                                                </h6>
                                                <div className="andro_rating-wrapper">
                                                    <div className="andro_rating">
                                                        {Rating(item.rating)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="andro_product-footer">
                                                <div className="andro_product-price">
                                                    {
                                                        item.discount > 0 || item.discount !== '' ? <span>{new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}$</span> : ''
                                                    }
                                                    <span>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                                </div>
                                                <div className="andro_product-buttons">
                                                    <Link to={"/product-single/" + item.id} className="andro_btn-custom primary">Add To Cart</Link>
                                                    <Link to="#" className="andro_btn-custom light" onClick={this.modalShow}>Quick View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Product End */}
                            </div>
                        </div>
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                {/* Product Categories Start */}
                                <div className="sidebar-widget">
                                    <div className="section-title">
                                        <h4 className="title">Popular Categories</h4>
                                    </div>
                                    <ul className="sidebar-widget-list">
                                        {blogcategory.map((item, i) => (
                                            <li key={i}>
                                                <Link to="#"> {item.title} <span>({item.count})</span> </Link>
                                                <ul>
                                                    {item.children.map((item, i) => (
                                                        <li key={i}> <Link to="#">{item.title} <span>({item.count})</span> </Link> </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Product Categories End */}
                                {/* Daily Deals Start */}
                                <div className="sidebar-widget">
                                    <div className="section-title">
                                        <h4 className="title">Daily Deals</h4>
                                    </div>
                                    <Dealslider />
                                </div>
                                {/* Daily Deals End */}
                                {/* Newsletter Start */}
                                <div className="sidebar-widget">
                                    <div className="andro_newsletter-form">
                                        <h5>Join our newsletter</h5>
                                        <p>Get exclusive weekly deals with our newsletter subscription</p>
                                        <form>
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="newsletter_email" placeholder="Email Address" />
                                            </div>
                                            <button type="submit" className="andro_btn-custom secondary btn-block shadow-none" name="button">Join Newsletter</button>
                                        </form>
                                    </div>
                                </div>
                                {/* Newsletter End */}
                            </div>
                        </div>
                        {/* Sidebar End */}
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

export default Featuredpost;