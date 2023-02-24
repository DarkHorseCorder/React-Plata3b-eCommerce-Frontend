import React, { Component } from 'react';
import testimonial from '../../../data/testimonial.json';
import { Rating } from '../../../helper/helper';

class Testimonial extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="section-title">
                        <h4 className="title">What Are People Saying</h4>
                    </div>
                    <div className="row">
                        {/* Testimonail item start */}
                        {testimonial.slice(0, 3).map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-12">
                                <div className="andro_testimonial">
                                    <div className="andro_testimonial-body">
                                        <h5>{item.title}</h5>
                                        <div className="andro_rating-wrapper">
                                            <div className="andro_rating">
                                                {Rating(item.rating)}
                                            </div>
                                        </div>
                                        <p>{item.para.slice(0, 104)}</p>
                                    </div>
                                    <div className="andro_testimonial-author">
                                        <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.name} />
                                        <div className="andro_testimonial-author-inner">
                                            <h6>{item.name}</h6>
                                            <span>{item.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Testimonail item end */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;