import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const shopcta = [
    {
        photo: "assets/img/cta/1.jpg",
        title: "Modern Design",
        titlespan: "Rings",
        para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus."
    },
    {
        photo: "assets/img/cta/2.jpg",
        title: "Modern Design",
        titlespan: "Le'tamry",
        para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus."
    }
]

class Shopcta extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="row">
                        {shopcta.map((item, i) => (
                            <div key={i} className="col-md-6">
                                <div className="andro_cta">
                                    <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.title} />
                                    <div className="andro_cta-content">
                                        <h4 className="text-white">{item.title} <span className="fw-400">{item.titlespan}</span> </h4>
                                        <p className="text-white">{item.para}</p>
                                        <Link to="/shop-v1" className="andro_btn-custom btn-sm light">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Shopcta;