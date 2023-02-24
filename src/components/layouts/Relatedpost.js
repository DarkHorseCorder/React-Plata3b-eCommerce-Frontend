import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import blogbox from '../../data/blog.json';
import blogtags from '../../data/blogtags.json';

class Relatedpost extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
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
            <div className="section pt-0 andro_related-posts">
                <div className="container">
                    <div className="section-title flex-title">
                        <h4 className="title">Related Posts</h4>
                        <div className="andro_arrows">
                            <i className="fa fa-arrow-left slick-arrow slider-prev" onClick={this.previous} />
                            <i className="fa fa-arrow-right slick-arrow slider-next" onClick={this.next} />
                        </div>
                    </div>
                    <Slider className="andro_related-posts-slider" ref={c => (this.slider = c)} {...settings}>
                        {/* Article Start */}
                        {blogbox.map((item, i) => (
                            <article key={i} className="andro_post">
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
                        ))}
                        {/* Article End */}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Relatedpost;