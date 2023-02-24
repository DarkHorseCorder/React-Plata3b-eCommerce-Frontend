import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wishlist from '../../../data/wishlist.json';
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const facebooktip = (
    <Tooltip>
        Share on Facebook
    </Tooltip>
);
const twittertip = (
    <Tooltip>
        Share on Twitter
    </Tooltip>
);
const linkedintip = (
    <Tooltip>
        Share on Linkedin
    </Tooltip>
);

class Content extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    {/* Wishlist Table Start */}
                    <table className="andro_responsive-table">
                        <thead>
                            <tr>
                                <th className="remove-item" />
                                <th>Product</th>
                                <th>Price</th>
                                <th>Availability</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlist.map((item, i) => (
                                <tr key={i}>
                                    <td className="remove">
                                        <button type="button" className="close-btn close-danger remove-from-cart">
                                            <span />
                                            <span />
                                        </button>
                                    </td>
                                    <td data-title="Product">
                                        <div className="andro_cart-product-wrapper">
                                            <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.title} />
                                            <div className="andro_cart-product-body">
                                                <h6> <Link to="#">{item.title}</Link> </h6>
                                                <p>{item.qty} Gram</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-title="Price"> <strong>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</strong> </td>
                                    <td data-title="Availability">
                                        {item.stock === true ? <span className="andro_product-stock instock">In Stock</span> : <span className="andro_product-stock outofstock">Out of Stock</span>}
                                    </td>
                                    <td data-title="Total"> <strong>{new Intl.NumberFormat().format((item.qty * item.price).toFixed(2))}$</strong> </td>
                                    <td data-title="Actions"> <button type="submit" className="andro_btn-custom btn-sm shadow-none">Add to Cart</button> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Wishlist Table End */}
                    {/* Share Wishlist Start */}
                    <div className="text-center">
                        <h5>Share Your Wishlist</h5>
                        <div className="andro_post-share">
                            <ul className="andro_sm justify-content-center">
                                <li>
                                    <OverlayTrigger placement="top" overlay={facebooktip}>
                                        <Link to="#"> <i className="fab fa-facebook-f" /> </Link>
                                    </OverlayTrigger>
                                </li>
                                <li>
                                    <OverlayTrigger placement="top" overlay={twittertip}>
                                        <Link to="#"> <i className="fab fa-twitter" /> </Link>
                                    </OverlayTrigger>
                                </li>
                                <li>
                                    <OverlayTrigger placement="top" overlay={linkedintip}>
                                        <Link to="#"> <i className="fab fa-linkedin-in" /> </Link>
                                    </OverlayTrigger>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Share Wishlist End */}
                </div>
            </div>
        );
    }
}

export default Content;