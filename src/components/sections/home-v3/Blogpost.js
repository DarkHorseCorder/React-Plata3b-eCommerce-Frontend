import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogbox from '../../../data/blog.json';
import blogtags from '../../../data/blogtags.json';

class Blogpost extends Component {
    render() {
        return (
            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="section-title">
                        <h4 className="title">From Our Blog</h4>
                    </div>
                    {/* Article Start */}
                    {blogbox.slice(0, 3).map((item, i) => (
                        <article key={i} className="andro_post andro_post-list">
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
                                    <span> <span className="fw-600">Posted On</span> <Link to={"/post-single/" + item.id} className="andro_post-date">{item.postdate}</Link></span>
                                    <p>{item.shortdesc}</p>
                                </div>
                                <Link className="andro_btn-custom" to={"/post-single/" + item.id}> Read More </Link>
                            </div>
                        </article>
                    ))}
                    {/* Article End */}
                </div>
            </div>
        );
    }
}

export default Blogpost;