import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import shopbox from '../../../data/shop.json';
import { Rating } from '../../../helper/helper';
import { Modal } from 'react-bootstrap';
import Quickview from '../../layouts/Quickview';

const splitEvery = (array, length) =>
    array.reduce(
        (result, item, index) => {
            if (index % length === 0) result.push([])
            result[Math.floor(index / length)].push(item)
            return result
        },
        []
    )

class Toppicks extends Component {
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
                    <div className="section-title">
                        <h4 className="title">Top Picks</h4>
                    </div>
                    <div className="row">
                        {/* Product Start */}
                        {splitEvery(shopbox, 2).slice(0, 2).map((item, i) => (
                            <div key={i} className="col-lg-6">
                                { item.map((item, i) => (
                                    <div key={i} className="andro_product andro_product-list andro_product-has-controls andro_product-has-buttons">
                                        {
                                            item.featured === true ? <div className="andro_product-badge andro_badge-featured">
                                                <i className="fa fa-star" />
                                                <span>Featured</span>
                                            </div> : ''
                                        }
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
                            </div>
                        ))}
                        {/* Product End */}
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

export default Toppicks;