import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../../data/cart.json';

class Cartblock extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    {/* Cart Table Start */}
                    <table className="andro_responsive-table">
                        <thead>
                            <tr>
                                <th className="remove-item" />
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qunantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, i) => (
                                <tr key={i}>
                                    <td className="remove">
                                        <button type="button" className="close-btn close-danger remove-from-cart">
                                            <span />
                                            <span />
                                        </button>
                                    </td>
                                    <td data-title="Product">
                                        <div className="andro_cart-product-wrapper">
                                            <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                            <div className="andro_cart-product-body">
                                                <h6> <Link to="#">{item.title}</Link> </h6>
                                                <p>{item.qty} Gram</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-title="Price"> <strong>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</strong> </td>
                                    <td className="quantity" data-title="Quantity">
                                        <input type="number" className="qty form-control" defaultValue={item.qty} />
                                    </td>
                                    <td data-title="Total"> <strong>{new Intl.NumberFormat().format((item.qty * item.price).toFixed(2))}$</strong> </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Cart Table End */}
                    {/* Coupon Code Start */}
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="form-group mb-0">
                                <div className="input-group mb-0">
                                    <input type="text" className="form-control" placeholder="Enter Coupon Code" aria-label="Coupon Code" />
                                    <div className="input-group-append">
                                        <button className="andro_btn-custom shadow-none" type="button">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Coupon Code End */}
                </div>
            </div>
        );
    }
}

export default Cartblock;