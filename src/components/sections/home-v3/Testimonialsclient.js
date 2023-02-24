import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import testimonial from '../../../data/testimonial.json';

const clientpost = [
    {
        icon: "assets/img/clients/1.png",
        companyname: "Green Co.",
    },
    {
        icon: "assets/img/clients/2.png",
        companyname: "Green Co.",
    },
    {
        icon: "assets/img/clients/3.png",
        companyname: "Green Co.",
    },
    {
        icon: "assets/img/clients/4.png",
        companyname: "Green Co.",
    },
    {
        icon: "assets/img/clients/5.png",
        companyname: "Green Co.",
    },
    {
        icon: "assets/img/clients/6.png",
        companyname: "Green Co.",
    },
]

class Testimonialsclient extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: "slick-dots d-flex",
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
        }
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-lg-30">
                            <Slider className="andro_testimonials" {...settings}>
                                {testimonial.map((item, i) => (
                                    <div key={i} className="andro_testimonial-item">
                                        <div className="andro_testimonials-inner">
                                            <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.name} />
                                            <h5>{item.name}</h5>
                                            <span>{item.designation}</span>
                                            <p>{item.para}</p>
                                        </div>
                                        <ul className="andro_sm">
                                            <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
                                            <li> <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
                                            <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
                                            <li> <Link to="#"> <i className="fab fa-youtube" /> </Link> </li>
                                        </ul>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="col-lg-4">
                            <div className="andro_companies">
                                {clientpost.map((item, i) => (
                                    <div key={i} className="andro_companies-item">
                                        <img src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.companyname} />
                                        <div className="andro_companies-item-name">
                                            <span>{item.companyname}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Testimonialsclient;