import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Tab, Nav } from 'react-bootstrap';
import Slider from 'react-slick';
import shopbox from '../../../data/shop.json';
import { Rating } from '../../../helper/helper';
import Quickview from '../../layouts/Quickview';

class Topcategory extends Component {
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
        const settings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        autoplay: true,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
            ]
        }
        return (
            <div className="section pt-0">
                <div className="container">
                    <Tab.Container defaultActiveKey="food">
                        <div className="section-title flex-title">
                            <h4 className="title">Top Picks</h4>
                            <Nav variant="tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="food">Diamond</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="keta">Keta</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="oils">Black Stone</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        {/* Tabs Start */}
                        <Tab.Content>
                            <Tab.Pane eventKey="food">
                                <Slider className="andro_grid-slider" {...settings}>
                                    {/* Product Start */}
                                    {shopbox.slice(0, 6).map((item, i) => (
                                        <div key={i} className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
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
                                                <h6 className="andro_product-title"> <Link to={"/product-single/" + item.id}> {item.title} </Link> </h6>
                                                <div className="andro_product-price">
                                                    {
                                                        item.discount > 0 || item.discount !== '' ? <span>{new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}$</span> : ''
                                                    }
                                                    <span>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                                </div>
                                                <div className="andro_rating-wrapper">
                                                    <div className="andro_rating">
                                                        {Rating(item.rating)}
                                                    </div>
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="keta">
                                <Slider className="andro_grid-slider" {...settings}>
                                    {/* Product Start */}
                                    {shopbox.slice(6, 12).map((item, i) => (
                                        <div key={i} className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
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
                                                <h6 className="andro_product-title"> <Link to={"/product-single/" + item.id}> {item.title} </Link> </h6>
                                                <div className="andro_product-price">
                                                    {
                                                        item.discount > 0 || item.discount !== '' ? <span>{new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}$</span> : ''
                                                    }
                                                    <span>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                                </div>
                                                <div className="andro_rating-wrapper">
                                                    <div className="andro_rating">
                                                        {Rating(item.rating)}
                                                    </div>
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
                            </Tab.Pane>
                            <Tab.Pane eventKey="oils">
                                <Slider className="andro_grid-slider" {...settings}>
                                    {/* Product Start */}
                                    {shopbox.slice(5, 11).map((item, i) => (
                                        <div key={i} className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
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
                                                <h6 className="andro_product-title"> <Link to={"/product-single/" + item.id}> {item.title} </Link> </h6>
                                                <div className="andro_product-price">
                                                    {
                                                        item.discount > 0 || item.discount !== '' ? <span>{new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}$</span> : ''
                                                    }
                                                    <span>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                                </div>
                                                <div className="andro_rating-wrapper">
                                                    <div className="andro_rating">
                                                        {Rating(item.rating)}
                                                    </div>
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
                            </Tab.Pane>
                        </Tab.Content>
                        {/* Tabs End */}
                    </Tab.Container>
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

export default Topcategory;