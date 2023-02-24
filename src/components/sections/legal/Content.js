import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogbox from '../../../data/blog.json';
import blogcategory from '../../../data/blogcategory.json';

class Content extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="entry-content">
                                <h3>Who are we</h3>
                                <h3>Privacy Policy</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </p>
                                <h3>Cookie Policy</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </p>
                                <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
                                <h3>Order Policy</h3>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text
          </p>
                                <p>
                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                                    combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                                    The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text
          </p>
                                <h3>Analytics</h3>
                                <p>
                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                                    combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                                    The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text
          </p>
                                <h3>How Do We Store Your Data</h3>
                                <p>
                                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                                    combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                                    The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
                            </div>
                        </div>
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                {/* Recent Posts Start */}
                                <div className="sidebar-widget widget-recent-posts">
                                    <h5 className="widget-title">Recent Posts</h5>
                                    {blogbox.slice(0, 2).map((item, i) => (
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
                                {/* Newsletter Start */}
                                <div className="sidebar-widget">
                                    <div className="andro_newsletter-form">
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
                        {/* Sidebar End */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;