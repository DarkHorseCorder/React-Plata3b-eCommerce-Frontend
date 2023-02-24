import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Relatedproduct from "../../layouts/Relatedproduct";
import shopbox from "../../../data/shop.json";
import blogcategory from "../../../data/blogcategory.json";
import blogtags from "../../../data/blogtags.json";
import { Rating } from "../../../helper/helper";
import { OverlayTrigger, Tooltip, Tab, Nav } from "react-bootstrap";

const wishlisttip = <Tooltip>Add To Wishlist</Tooltip>;
const facebooktip = <Tooltip>Share on Facebook</Tooltip>;
const twittertip = <Tooltip>Share on Twitter</Tooltip>;
const linkedintip = <Tooltip>Share on Linkedin</Tooltip>;

class Content extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      clicks: 1,
    };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  DecreaseItem = () => {
    if (this.state.clicks < 1) {
      this.setState({
        clicks: 0,
      });
    } else {
      this.setState({
        clicks: this.state.clicks - 1,
      });
    }
  };
  handleChange(event) {
    this.setState({ clicks: event.target.value });
  }
  render() {
    return (
      <Fragment>
        {shopbox
          .filter((product) => {
            return product.id === parseInt(this.props.productId);
          })
          .map((item, i) => (
            <Fragment key={i}>
              {/* Product Content Start */}
              <div className="section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="andro_product-single-thumb">
                        <img
                          src={process.env.PUBLIC_URL + "/" + item.img}
                          alt={item.title}
                        />
                      </div>
                      {/* Pagination Start */}
                      <div className="andro_single-pagination">
                        <div className="andro_single-pagination-item andro_single-pagination-prev">
                          <Link to="/product-single/1">
                            <div className="andro_single-pagination-thumb">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/img/products/9.png"
                                }
                                alt="product"
                              />
                            </div>
                            <div className="andro_single-pagination-content">
                              <h6>Diamond</h6>
                            </div>
                            <i className="fas fa-chevron-left" />
                          </Link>
                        </div>
                        <div className="andro_single-pagination-item andro_single-pagination-next">
                          <Link to="/product-single/2">
                            <div className="andro_single-pagination-thumb">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/assets/img/products/15.png"
                                }
                                alt="product"
                              />
                            </div>
                            <div className="andro_single-pagination-content">
                              <h6>Neckless</h6>
                            </div>
                            <i className="fas fa-chevron-right" />
                          </Link>
                        </div>
                      </div>
                      {/* Pagination End */}
                    </div>
                    <div className="col-md-7">
                      <div className="andro_product-single-content">
                        <div className="andro_product-single-controls andro_post-share">
                          <OverlayTrigger placement="top" overlay={wishlisttip}>
                            <Link to="#" className="andro_add-to-favorite">
                              {" "}
                              <i className="flaticon-like" />{" "}
                            </Link>
                          </OverlayTrigger>
                          <ul className="andro_sm">
                            <li>
                              <OverlayTrigger
                                placement="top"
                                overlay={facebooktip}
                              >
                                <Link to="#">
                                  {" "}
                                  <i className="fab fa-facebook-f" />{" "}
                                </Link>
                              </OverlayTrigger>
                            </li>
                            <li>
                              <OverlayTrigger
                                placement="top"
                                overlay={twittertip}
                              >
                                <Link to="#">
                                  {" "}
                                  <i className="fab fa-twitter" />{" "}
                                </Link>
                              </OverlayTrigger>
                            </li>
                            <li>
                              <OverlayTrigger
                                placement="top"
                                overlay={linkedintip}
                              >
                                <Link to="#">
                                  {" "}
                                  <i className="fab fa-linkedin-in" />{" "}
                                </Link>
                              </OverlayTrigger>
                            </li>
                          </ul>
                        </div>
                        <div className="andro_rating-wrapper">
                          <div className="andro_rating">
                            {Rating(item.rating)}
                          </div>
                          <span>{item.rating} Stars</span>
                        </div>
                        <h3> {item.title} </h3>
                        <div className="andro_product-price">
                          {item.discount > 0 || item.discount !== "" ? (
                            <span>
                              {new Intl.NumberFormat().format(
                                (
                                  (item.price * (100 - item.discount)) /
                                  100
                                ).toFixed(2)
                              )}
                              $
                            </span>
                          ) : (
                            ""
                          )}
                          <span>
                            {new Intl.NumberFormat().format(
                              item.price.toFixed(2)
                            )}
                            $
                          </span>
                        </div>
                        <p className="andro_product-excerpt">
                          {item.shortdesc}
                        </p>
                        <form className="andro_product-atc-form">
                          <div className="andro_product-variation-wrapper">
                            <div className="form-group">
                              <select className="form-control" name="amount">
                                <option value>Select Amount</option>
                                <option value={10}>10 Gram</option>
                                <option value={20}>20 Gram</option>
                                <option value={30}>30 Gram</option>
                                <option value={40}>40 Gram</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <select className="form-control" name="breed">
                                <option value>Select a Breed</option>
                                <option value="italian">Italian</option>
                                <option value="egyptian">Egyptian</option>
                              </select>
                            </div>
                          </div>
                          <div className="qty-outter">
                            <Link
                              to={"/product-single/" + item.id}
                              className="andro_btn-custom"
                            >
                              Buy Now
                            </Link>
                            <div className="qty">
                              <span
                                className="qty-subtract"
                                onClick={this.DecreaseItem}
                                data-type="minus"
                                data-field
                              >
                                <i className="fa fa-minus" />
                              </span>
                              <input
                                type="text"
                                name="clicks"
                                value={this.state.clicks}
                                onChange={this.handleChange.bind(this)}
                              />
                              <span
                                className="qty-add"
                                onClick={this.IncrementItem}
                                data-type="plus"
                                data-field
                              >
                                <i className="fa fa-plus" />
                              </span>
                            </div>
                          </div>
                        </form>
                        <ul className="andro_product-meta">
                          <li>
                            <span>Categories: </span>
                            <div className="andro_product-meta-item">
                              {item.categories.map((category) =>
                                blogcategory
                                  .filter((item) => {
                                    return item.id === category;
                                  })
                                  .map((cat, i) => (
                                    <Link key={i} to="#">
                                      {cat.title},
                                    </Link>
                                  ))
                              )}
                            </div>
                          </li>
                          <li>
                            <span>Tags: </span>
                            <div className="andro_product-meta-item">
                              {item.tags.map((tag) =>
                                blogtags
                                  .filter((item) => {
                                    return item.id === tag;
                                  })
                                  .map((tags, i) => (
                                    <Link key={i} to="#">
                                      {tags.title},
                                    </Link>
                                  ))
                              )}
                            </div>
                          </li>
                          <li>
                            <span>SKU: </span>
                            <div className="andro_product-meta-item">
                              <span>{item.sku}</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Content End */}
              {/* Additional Information Start */}
              <div className="section pt-0">
                <div className="container">
                  <div className="andro_product-additional-info">
                    <Tab.Container defaultActiveKey="description">
                      <div className="row">
                        <div className="col-lg-4">
                          <Nav variant="tab" className="andro_sticky-section">
                            <Nav.Item>
                              <Nav.Link eventKey="description">
                                Description
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="add-info">
                                Additional Information
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="reviews">
                                Reviews ({item.reviews.length})
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </div>
                        <div className="col-lg-8">
                          <Tab.Content>
                            <Tab.Pane eventKey="description">
                              <h4>Description</h4>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.longdescription,
                                }}
                              />
                            </Tab.Pane>
                            <Tab.Pane eventKey="add-info">
                              <h4>Additional Information</h4>
                              <table>
                                <thead>
                                  <tr>
                                    <th scope="col">Attributes</th>
                                    <th scope="col">Values</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      {" "}
                                      <strong>Color</strong>{" "}
                                    </td>
                                    <td>
                                      {item.color.map((item, i) => (
                                        <Fragment key={i}>{item},</Fragment>
                                      ))}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      {" "}
                                      <strong>Material</strong>{" "}
                                    </td>
                                    <td>
                                      {item.material.map((item, i) => (
                                        <Fragment key={i}>{item},</Fragment>
                                      ))}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="reviews">
                              <h4>Leave a Review</h4>
                              <div className="andro_rating-wrapper">
                                <div className="andro_rating">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                                <span>Your Review</span>
                              </div>
                              {/* Review Form start */}
                              <div className="comment-form">
                                <form>
                                  <div className="row">
                                    <div className="col-md-6 form-group">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                        name="fname"
                                      />
                                    </div>
                                    <div className="col-md-6 form-group">
                                      <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        name="email"
                                      />
                                    </div>
                                    <div className="col-md-12 form-group">
                                      <textarea
                                        className="form-control"
                                        placeholder="Type your comment..."
                                        name="comment"
                                        rows={7}
                                      />
                                    </div>
                                  </div>
                                  <button
                                    type="submit"
                                    className="andro_btn-custom primary"
                                    name="button"
                                  >
                                    Post Review
                                  </button>
                                </form>
                              </div>
                              {/* Review Form End */}
                              {/* Reviews Start */}
                              <div className="comments-list">
                                <ul>
                                  {item.reviews.map((item, i) => (
                                    <li key={i} className="comment-item">
                                      <img
                                        src={
                                          process.env.PUBLIC_URL +
                                          "/" +
                                          item.userimg
                                        }
                                        alt={item.username}
                                      />
                                      <div className="comment-body">
                                        <h5>{item.username}</h5>
                                        <div className="andro_rating">
                                          {Rating(item.rating)}
                                        </div>
                                        <span>
                                          Posted on: {item.commentdate}
                                        </span>
                                        <p>{item.comment}</p>
                                        <Link to="#" className="reply-link">
                                          {" "}
                                          Reply{" "}
                                        </Link>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {/* Reviews End */}
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </div>
                    </Tab.Container>
                  </div>
                </div>
              </div>
              {/* Additional Information End */}
            </Fragment>
          ))}
        <Relatedproduct />
      </Fragment>
    );
  }
}

export default Content;
