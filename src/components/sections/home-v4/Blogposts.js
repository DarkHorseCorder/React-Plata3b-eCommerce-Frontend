import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import shopbox from '../../../data/shop.json';
import blogbox from '../../../data/blog.json';
import blogtags from '../../../data/blogtags.json';
import blogcategory from '../../../data/blogcategory.json';
import Quickview from '../../layouts/Quickview';
import Masonry from 'react-masonry-component';

const tooltip = (
    <Tooltip id="tooltip">
        Quick View
    </Tooltip>
);

class Blogposts extends Component {
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
        const imagesLoadedOptions = {
            itemSelector: '.masonry-item',
        }
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h4 className="title">Latest News</h4>
                            </div>
                            <Masonry className="row masonry" imagesLoadedOptions={imagesLoadedOptions}>
                                {/* Article Start */}
                                {blogbox.slice(0, 6).map((item, i) => (
                                    <div key={i} className="col-lg-6 col-md-6 masonry-item">
                                        <article className="andro_post">
                                            <div className="andro_post-thumb">
                                                <Link to={"/post-single/" + item.id}>
                                                    <img src={process.env.PUBLIC_URL + "/" + item.masonryphoto} alt={item.title} />
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
                            </Masonry>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                {/* About Author Start */}
                                <div className="sidebar-widget widget-about-author">
                                    <div className="widget-about-author-inner">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/people/4.jpg"} alt="Jina Flock" />
                                        <h5>Jina Flock</h5>
                                        <p className="mb-0">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem.</p>
                                    </div>
                                    <ul className="andro_sm">
                                        <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
                                        <li> <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
                                        <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
                                        <li> <Link to="#"> <i className="fab fa-youtube" /> </Link> </li>
                                    </ul>
                                </div>
                                {/* About Author End */}
                                {/* Categories Start */}
                                <div className="sidebar-widget">
                                    <h5 className="widget-title"> Post Categories </h5>
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
                                {/* Categories End */}
                                {/* Fresh Products Start */}
                                <div className="sidebar-widget widget-recent-products">
                                    <h5 className="widget-title">Fresh Products</h5>
                                    {shopbox.slice(0, 4).map((item, i) => (
                                        <div key={i} className="andro_product-recent">
                                            <Link className="andro_product-recent-thumb" to={"/product-single/" + item.id}>
                                                <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                                                <div className="andro_product-recent-content">
                                                    <h6>{item.title}</h6>
                                                    <div className="andro_product-price">
                                                        {
                                                            item.discount > 0 || item.discount !== '' ? <span>{new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}$</span> : ''
                                                        }
                                                        <span>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                                                    </div>
                                                </div>
                                            </Link>
                                            <button type="button" onClick={this.modalShow}>
                                                <OverlayTrigger placement="top" overlay={tooltip}>
                                                    <i className="flaticon-view" />
                                                </OverlayTrigger>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                {/* Fresh Products End */}
                                {/* CTA Start */}
                                <div className="sidebar-widget">
                                    <div className="andro_cta">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/cta/3.jpg"} alt="cta" />
                                        <div className="andro_cta-content">
                                            <h4 className="text-white">Grab Your <span className="fw-400">Neckless</span> </h4>
                                            <Link to="/shop-v1" className="andro_btn-custom btn-sm light">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                {/* CTA End */}
                                {/* Newsletter Start */}
                                <div className="sidebar-widget">
                                    <div className="andro_newsletter-form secondary-bg pattern-bg">
                                        <h5>Join our newsletter</h5>
                                        <p>Get exclusive weekly deals with our newsletter subscription</p>
                                        <form method="post">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="newsletter_email" placeholder="Email Address" />
                                            </div>
                                            <button type="submit" className="andro_btn-custom btn-block" name="button">Join Newsletter</button>
                                        </form>
                                    </div>
                                </div>
                                {/* Newsletter End */}
                            </div>
                        </div>
                    </div>
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
            </div >
        );
    }
}

export default Blogposts;