import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import blogbox from '../../../data/blog.json';
import blogtags from '../../../data/blogtags.json';
import testimonial from '../../../data/testimonial.json';

class Blogpost extends Component {
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
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h4 className="title">From Our Blog</h4>
                            </div>
                            <div className="row">
                                {/* Article Start */}
                                {blogbox.slice(0, 4).map((item, i) => (
                                    <div key={i} className="col-md-6">
                                        <article className="andro_post">
                                            <div className="andro_post-thumb">
                                                <Link to={"/post-single/" + item.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.title} />
                                                </Link>
                                            </div>
                                            <div className="andro_post-body">
                                                <div className="andro_post-categories">
                                                    {item.tags.slice(0, 2).map((tag) => (
                                                        blogtags.filter(item => {
                                                            return item.id === tag
                                                        }).map((tags, i) => (
                                                            <Link key={i} to="#">{tags.title}</Link>
                                                        ))
                                                    ))}
                                                </div>
                                                <div className="andro_post-desc">
                                                    <h5> <Link to={"/post-single/" + item.id}>{item.title}</Link> </h5>
                                                    <span> <span className="fw-600">Posted On</span> <Link to={"/post-single/" + item.id} className="andro_post-date">{item.postdate}</Link> </span>
                                                    <p>{item.shortdesc}</p>
                                                </div>
                                                <Link className="andro_btn-custom btn-block" to={"/post-single/" + item.id}> Read More </Link>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                                {/* Article End */}
                            </div>
                        </div>
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                {/* Testimonials Start */}
                                <div className="sidebar-widget">
                                    <div className="section-title">
                                        <h4 className="title">Testimonials</h4>
                                    </div>
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
                                {/* Testimonials End */}
                                {/* Image Start */}
                                <div className="sidebar-widget d-none d-lg-block">
                                    <div className="andro_auth-mini">
                                        <h5>Login</h5>
                                        <p>Get crazy benefits today by joining our community</p>
                                        <form method="post">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Username" name="username" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Password" name="password" />
                                            </div>
                                            <div className="form-group text-center">
                                                <Link to="#">Forgot Password?</Link>
                                            </div>
                                            <button type="submit" className="andro_btn-custom primary btn-block">Login</button>
                                            <div className="andro_auth-seperator">
                                                <span>OR</span>
                                            </div>
                                            <div className="andro_social-login">
                                                <button type="button" className="andro_social-login-btn facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
                                                <button type="button" className="andro_social-login-btn google"><i className="fab fa-google" /> Continue with Google</button>
                                            </div>
                                            <p className="mb-0 text-center">Don't have an account? <Link to="/register">Create One</Link> </p>
                                        </form>
                                    </div>
                                </div>
                                {/* Image End */}
                            </div>
                        </div>
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>

        );
    }
}

export default Blogpost;