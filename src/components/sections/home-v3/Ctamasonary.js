import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ctamasonary extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="andro_cta">
                                <img src={process.env.PUBLIC_URL + "/assets/img/cta/3.jpg"} alt="cta" />
                                <div className="andro_cta-content">
                                    <h4 className="text-white">Get Your <span className="fw-400">Neckless</span> </h4>
                                    <p className="text-white">Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.</p>
                                    <Link to="/shop-v1" className="andro_btn-custom btn-sm light">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="andro_cta">
                                <img src={process.env.PUBLIC_URL + "/assets/img/cta/4.jpg"} alt="cta" />
                                <div className="andro_cta-content">
                                    <h4 className="text-white">Modern Design <span className="fw-400">Rings</span> </h4>
                                    <Link to="/shop-v1" className="andro_btn-custom btn-sm light">Shop Now</Link>
                                </div>
                            </div>
                            <div className="andro_cta">
                                <img src={process.env.PUBLIC_URL + "/assets/img/cta/5.jpg"} alt="cta" />
                                <div className="andro_cta-content">
                                    <h4 className="text-white">Modern Design <span className="fw-400">Le'tamry</span> </h4>
                                    <Link to="/shop-v1" className="andro_btn-custom btn-sm light">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ctamasonary;