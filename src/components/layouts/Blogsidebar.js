import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogbox from '../../data/blog.json';
import blogcategory from '../../data/blogcategory.json';
import blogtags from '../../data/blogtags.json';

class Blogsidebar extends Component {

    render() {
        const author = this.props.blogAuthor;
        return (
            <div className="col-lg-4">
                <div className="sidebar">
                    {/* About Author Start */}
                    <div className="sidebar-widget widget-about-author">
                        <div className="widget-about-author-inner">
                            <img src={process.env.PUBLIC_URL + "/" + author.authorimg} alt={author.authorname} />
                            <h5>{author.authorname}</h5>
                            <p>{author.authordesc}</p>
                            <Link to="#" className="andro_btn-custom btn-block">View All Posts</Link>
                        </div>
                        <ul className="andro_sm">
                            <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
                            <li> <Link to="#"> <i className="fab fa-twitter" /> </Link> </li>
                            <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
                            <li> <Link to="#"> <i className="fab fa-youtube" /> </Link> </li>
                        </ul>
                    </div>
                    {/* About Author End */}
                    {/* Recent Posts Start */}
                    <div className="sidebar-widget widget-recent-posts">
                        <h5 className="widget-title">Recent Posts</h5>
                        {blogbox.slice(0, 3).map((item, i) => (
                            <article key={i} className="post">
                                <Link to={"/post-single/" + item.id}>
                                    <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.title} />
                                </Link>
                                <h6> <Link to={"/post-single/" + item.id}>{item.title}</Link> </h6>
                                <span>Posted on <Link to={"/post-single/" + item.id}>{item.postdate}</Link> </span>
                            </article>
                        ))}
                    </div>
                    {/* Recent Posts End */}
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
                    {/* Popular Tags Start */}
                    <div className="sidebar-widget">
                        <h5 className="widget-title">Popular Tags</h5>
                        <div className="tagcloud">
                            {blogtags.map((item, i) => (
                                <Link key={i} to={"/post-single/" + item.id}>#{item.title}</Link>
                            ))}
                        </div>
                    </div>
                    {/* Popular Tags End */}
                    {/* Newsletter Start */}
                    <div className="sidebar-widget">
                        <div className="andro_newsletter-form primary-bg pattern-bg">
                            <h5 className="text-white">Join our newsletter</h5>
                            <p className="text-white">Get exclusive weekly deals with our newsletter subscription</p>
                            <form method="post">
                                <div className="form-group">
                                    <input type="email" className="form-control" name="newsletter_email" placeholder="Email Address" />
                                </div>
                                <button type="submit" className="andro_btn-custom light btn-block" name="button">Join Newsletter</button>
                            </form>
                        </div>
                    </div>
                    {/* Newsletter End */}
                </div>

            </div>
        );
    }
}

export default Blogsidebar;