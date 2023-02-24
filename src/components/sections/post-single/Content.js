import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import blogbox from '../../../data/blog.json';
import blogcategory from '../../../data/blogcategory.json';
import blogtags from '../../../data/blogtags.json';
import Sidebar from '../../layouts/Blogsidebar';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Relatedpost from '../../layouts/Relatedpost';

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
            <Fragment>
                {/* Product Content Start */}
                {blogbox.filter(blog => { return blog.id === parseInt(this.props.blogId) }).map((item, i) => (
                    <Fragment key={i}>
                        <div className="section andro_post-single">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="entry-content">
                                            <div className="andro_post-single-thumb">
                                                <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.title} />
                                            </div>
                                            <h2>{item.title}</h2>
                                            <div className="andro_post-single-author">
                                                <img src={process.env.PUBLIC_URL + "/" + item.author.authorimg} alt={item.author.authorname} />
                                                <div className="andro_post-single-author-content">
                                                    <p>{item.author.authorname}</p>
                                                    <span>Posted on {item.postdate}</span>
                                                </div>
                                            </div>
                                            <div dangerouslySetInnerHTML={{ __html: item.longdescription }} />
                                        </div>
                                        {/* Post Meta Start */}
                                        <div className="andro_post-single-meta">
                                            <div className="andro_post-single-meta-item">
                                                <h6>Tags</h6>
                                                <div className="tagcloud">
                                                    {item.tags.map((tag) => (
                                                        blogtags.filter(item => {
                                                            return item.id === tag
                                                        }).map((tags, i) => (
                                                            <Link key={i} to="#">#{tags.title}</Link>
                                                        ))
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="andro_post-single-meta-item">
                                                <h6>Categories</h6>
                                                <div className="tagcloud">
                                                    {item.categories.map((category) => (
                                                        blogcategory.filter(item => {
                                                            return item.id === category
                                                        }).map((cat, i) => (
                                                            <Link key={i} to="#">{cat.title}</Link>
                                                        ))
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/* Post Meta End */}
                                        {/* Post Share Start */}
                                        <div className="andro_post-share">
                                            <ul className="andro_sm">
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
                                        {/* Post Share End */}
                                    </div>
                                    {/* Sidebar Start */}
                                    <Sidebar blogAuthor={item.author} />
                                    {/* Sidebar End */}
                                </div>
                            </div>
                        </div>
                        {/* Product Content End */}
                        {/* Comment Form Start */}
                        <div className="section pt-0">
                            <div className="container">
                                <div className="section-title">
                                    <h4 className="title">Leave a Comment</h4>
                                </div>
                                <div className="comment-form">
                                    <form method="post">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <input type="text" className="form-control" placeholder="Full Name" name="fname" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <textarea className="form-control" placeholder="Type your comment..." name="comment" rows={7} />
                                            </div>
                                            <div className="col-12 form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="consentCheck" />
                                                    <label className="custom-control-label" htmlFor="consentCheck">I Agree to the terms and conditions of sending comments</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="andro_btn-custom primary" name="button">Post Review</button>
                                    </form>
                                </div>
                                <div className="comments-list">
                                    <ul>
                                        {item.reviews.map((item, i) => (
                                            <li key={i} className="comment-item">
                                                <img src={process.env.PUBLIC_URL + "/" + item.userimg} alt={item.username} />
                                                <div className="comment-body">
                                                    <h5>{item.username}</h5>
                                                    <span>Posted on: {item.commentdate}</span>
                                                    <p>{item.comment}</p>
                                                    <Link to="#" className="reply-link"> Reply </Link>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ))}
                {/* Comment Form End */}
                {/* Related Posts Start */}
                <Relatedpost/>
                {/* Related Posts End */}
            </Fragment>
        );
    }
}

export default Content;