import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { brand, condition } from "../../../data/shopfilter.json";
import blogcategory from "../../../data/blogcategory.json";
import IonRangeSlider from "react-ion-slider";
import Masonry from "react-masonry-component";
import { Modal } from "react-bootstrap";
import shopbox from "../../../data/shop.json";
import { Rating } from "../../../helper/helper";
import Quickview from "../../layouts/Quickview";
import Loader from "../../layouts/Loader";
import classNames from "classnames";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCategories, getProducts } from "../../../store/actions";
import { isEmpty, size } from "lodash";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalshow: false,
      items: shopbox,
      currentPage: 1,
      itemsPerPage: 9,
      loading: false,
      categories: [],
      products: [],
      productId: null,
      product: null
    };
    this.modalShow = this.modalShow.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { onGetCategories, onGetProducts } = this.props;

    onGetCategories();
    onGetProducts();
  }
  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      console.log("Component Did Update");
      const { categories, products } = this.props;
      this.setState({
        categories: categories,
        products: products,
      });
    }
  }
  // Modal
  modalShow(value) {
    console.log(value)
    const { products } = this.props;
    this.setState({productId: value});
    this.setState({product: products.find(element => element.id == value)})
    this.setState({ modalshow: true });
  }
  modalClose() {
    this.setState({ modalshow: false });
  }
  handleClick(event) {
    var paginationContent = event.target.closest(".pagination-content");

    if (paginationContent) {
      paginationContent.scrollIntoView();
    }

    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        currentPage: Number(event.target.getAttribute("data-page")),
        loading: false,
      });
    }, 2000);
  }
  render() {
    const { items, currentPage, itemsPerPage, products, productId, product } = this.state;
//console.log(products)
    // Logic for displaying items
    const indexOfLastitem = currentPage * itemsPerPage;
    const indexOfFirstitem = indexOfLastitem - itemsPerPage;
    const currentitems = products.slice(indexOfFirstitem, indexOfLastitem);

    const renderitems = isEmpty(currentitems) == false ? currentitems.map((item, i) => {
      return (
        <div key={i} className="col-md-4 col-sm-6 masonry-item">
          <div className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
            {item.featured === true ? (
              <div className="andro_product-badge andro_badge-featured">
                <i className="fa fa-star" />
                <span>Featured</span>
              </div>
            ) : (
              ""
            )}
            {item.promotion == 1 ? (
              <div className="andro_product-badge andro_badge-sale">
                {item.promotion_pct}% Descuento{" "}
              </div>
            ) : (
              ""
            )}
            <div className="andro_product-thumb">
              <Link to={"/product-single-v2/" + item.id}>
                <img
                  src={item.images != undefined && item.images != null ? "https://api.plata3b.com/img/products/" + item.images[0].file : null}
                  alt={item.title}
                />
              </Link>
            </div>
            <div className="andro_product-body">
              <h6 className="andro_product-title">
                <Link to={"/product-single-v2/" + item.id}> {item.name} </Link>{" "}
              </h6>
              {item.rating > 0 && 
              <div className="andro_rating-wrapper">
                <div className="andro_rating">{Rating(item.rating)}</div>
                
              </div>}
            </div>
            <div className="andro_product-footer">
              <div className="andro_product-price">
                {item.discount > 0 || item.discount !== "" ? (
                  <span>
                  
                     { item.price }
                  
                    €
                  </span>
                ) : (
                  ""
                )}
               {/* <span>
                  new Intl.NumberFormat().format(item.price.toFixed(2))$
                </span> */}
              </div>
              <div className="andro_product-buttons">
                <Link
                  to={"/product-single-v2/" + item.id}
                  className="andro_btn-custom primary"
                >
                  Añadir
                </Link>
                <Link
                  to="#"
                  className="andro_btn-custom light"
                  onClick={() => this.modalShow(item.id)} 
                >
                  Ver
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }) : null;
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPagination = pageNumbers.map((number) => {
      const activeCondition = this.state.currentPage === number ? "active" : "";
      return (
        <Fragment key={number}>
          {pageNumbers.length > 1 ? (
            <li
              className={classNames("page-item", { active: activeCondition })}
            >
              <Link
                className="page-link"
                to="#"
                data-page={number}
                onClick={this.handleClick}
              >
                {number}
              </Link>
            </li>
          ) : (
            ""
          )}
        </Fragment>
      );
    });
    const imagesLoadedOptions = {
      itemSelector: ".masonry-item",
    };
    const { categories } = this.state;
    return (
      <div className="section pagination-content">
        <div className="andro_section-fw">
          <div className="row">
            <div className="col-lg-9">
              {/* Product Count & Orderby Start */}
              <div className="andro_shop-global">
                <p>
                  Muestra <b>{this.state.itemsPerPage}</b> de{" "}
                  <b>{products.length}</b> productos{" "}
                </p>
                <form method="post">
                  <select className="form-control" name="orderby">
                    <option value="default">Búsqueda por defecto</option>
                    <option value="price-down">Precio más bajo</option>
                    <option value="price-up">Precio más alto</option>
                  </select>
                </form>
              </div>
              {/* Product Count & Orderby End */}
              <Masonry
                className="row justify-content-center masonry"
                imagesLoadedOptions={imagesLoadedOptions}
              >
                {/* Product Start */}
                {this.state.loading === false ? renderitems : <Loader />}
                {/* Product End */}
              </Masonry>
              {/* Pagination Start */}
              {pageNumbers.length > 1 ? (
                <ul className="pagination">
                  {/* Prev */}
                  {/* to show previous, we need to be on the 2nd or more page */}
                  {pageNumbers.length > 1 && this.state.currentPage !== 1 ? (
                    <li className="page-item">
                      <Link
                        className="page-link"
                        to="#"
                        data-page={this.state.currentPage - 1}
                        onClick={this.handleClick}
                      >
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* Prev */}
                  {renderPagination}
                  {/* Next */}
                  {/* to show next, we should not be on the last page */}
                  {pageNumbers.length > 1 &&
                  this.state.currentPage !== pageNumbers.length ? (
                    <li className="page-item">
                      <Link
                        className="page-link"
                        to="#"
                        data-page={parseInt(this.state.currentPage + 1)}
                        onClick={this.handleClick}
                      >
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {/* Next */}
                </ul>
              ) : (
                ""
              )}
              {/* Pagination End */}
            </div>
            {/* Sidebar Start */}
            <div className="col-lg-3">
              <div className="sidebar">
                {/* Search Start */}
                <div className="sidebar-widget widget-search">
                  <form method="post">
                    <div className="andro_search-adv-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Busqueda del producto"
                        name="search"
                      />
                      <button type="submit" name="button">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* Search End */}
                {/* Filter: Categories Start */}
                <div className="sidebar-widget">
                  <h5 className="widget-title"> Categoría </h5>
                  <ul className="sidebar-widget-list">
                    {categories.map((item, i) => (
                      <li key={i}>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={"customCheck" + item.id}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={"customCheck" + item.id}
                          >
                            {item.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Filter: Categories End */}
                {/* Filter: Condition Start */}
                <div className="sidebar-widget">
                  <h5 className="widget-title"> Filtros </h5>
                  <ul className="sidebar-widget-list">
                    {condition.map((item, i) => (
                      <li key={i}>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={"customCheck" + item.id}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={"customCheck" + item.id}
                          >
                            {item.title}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Filter: Condition End */}
               
                
                {/* Filter: Price Start */}
                <div className="sidebar-widget">
                  <h5 className="widget-title"> Precio </h5>
                  <IonRangeSlider
                    type="double"
                    min={0}
                    max={500}
                    from={10}
                    to={100}
                    grid={true}
                    postfix=" $"
                  />
                </div>
                {/* Filter: Price End */}
                {/* Newsletter Start */}
                <div className="sidebar-widget">
                  <div className="andro_newsletter-form">
                    <h5>Suscríbase a nuestra Newsletter</h5>
                    <p>
                    Obtenga ofertas semanales exclusivas con nuestras Newsletters suscripción
                    </p>
                    <form method="post">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="newsletter_email"
                          placeholder="Correo Electrónico"
                        />
                      </div>
                      <button
                        type="submit"
                        className="andro_btn-custom secondary btn-block shadow-none"
                        name="button"
                      >
                        Suscríbase
                      </button>
                    </form>
                  </div>
                </div>
                {/* Newsletter End */}
              </div>
            </div>
            {/* Sidebar End */}
          </div>
        </div>
        <Modal
          show={this.state.modalshow}
          className="andro_quick-view-modal p-0"
          onHide={this.modalClose}
          aria-labelledby="contained-modal-title-vcenter"
          size="lg"
          centered
        >
          <Modal.Body>
            <div
              className="close-btn close-dark close"
              onClick={this.modalClose}
            >
              <span />
              <span />
            </div>
            <Quickview product={product} id={productId}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.ecommerce.categories,
  products: state.ecommerce.products,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCategories: () => dispatch(getCategories()),
  onGetProducts: () => dispatch(getProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Content));
//export default Content;
