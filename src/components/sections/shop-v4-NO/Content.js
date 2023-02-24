import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import blogtags from '../../../data/blogtags.json';
import { brand, condition } from '../../../data/shopfilter.json';
import blogcategory from '../../../data/blogcategory.json';
import IonRangeSlider from 'react-ion-slider'
import { Dropdown, Modal } from 'react-bootstrap'
import shopbox from '../../../data/shop.json';
import { Rating } from '../../../helper/helper';
import Quickview from '../../layouts/Quickview';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalshow: false,
            items: shopbox,
            currentPage: 1,
            itemsPerPage: 6,
            loading: false
        };
        this.modalShow = this.modalShow.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    // Modal
    modalShow() {
        this.setState({ modalshow: true });
    }
    modalClose() {
        this.setState({ modalshow: false });
    }
    handleClick(event) {
        var paginationContent = event.target.closest('.pagination-content');

        if (paginationContent) {
            paginationContent.scrollIntoView();
        }

        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                currentPage: Number(event.target.getAttribute('data-page')),
                loading: false
            });
        }, 2000);

    }
    render() {
        const { items, currentPage, itemsPerPage } = this.state;

        // Logic for displaying items
        const indexOfLastitem = currentPage * itemsPerPage;
        const indexOfFirstitem = indexOfLastitem - itemsPerPage;
        const currentitems = items.slice(indexOfFirstitem, indexOfLastitem);

        const renderitems = currentitems.map((item, i) => {
            return <div key={i} className="col-12">
                <div className="andro_product andro_product-list">
                    <div className="andro_product-thumb">
                        <Link to={"/product-single/" + item.id}>
                            <img src={process.env.PUBLIC_URL + "/" + item.img} alt={item.title} />
                        </Link>
                    </div>
                    <div className="andro_product-body">
                        <div className="andro_rating-wrapper">
                            <div className="andro_rating">
                                {Rating(item.rating)}
                            </div>
                            <span>{item.rating} Stars</span>
                        </div>
                        <h5 className="andro_product-title"> <Link to={"/product-single/" + item.id}> {item.title} </Link> </h5>
                        <p>{item.shortdesc}</p>
                        <div className="andro_product-footer">
                            <div className="andro_product-price">
                                {
                                    item.discount > 0 || item.discount !== '' ? <span>{new Intl.NumberFormat().format((item.price * (100 - item.discount) / 100).toFixed(2))}$</span> : ''
                                }
                                <span>{new Intl.NumberFormat().format((item.price).toFixed(2))}$</span>
                            </div>
                            <Dropdown className="btn-group">
                                <Link to={"/product-single/" + item.id} className="andro_btn-custom btn-sm">Buy Now</Link>
                                <Dropdown.Toggle variant="success" className="andro_btn-custom dropdown-toggle dropdown-toggle-split btn-sm"></Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" onClick={this.modalShow}><i className="fa fa-eye" /> Quick View</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="fa fa-sync" /> Compare</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="fa fa-heart" /> Add To Wishlist</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPagination = pageNumbers.map(number => {
            const activeCondition = this.state.currentPage === number ? 'active' : ''
            return (
                <Fragment key={number}>
                    {pageNumbers.length > 1 ? <li className={classNames("page-item", { "active": activeCondition })}>
                        <Link className="page-link" to="#" data-page={number} onClick={this.handleClick}>{number}</Link>
                    </li> : ''}
                </Fragment>
            );
        });
        return (
            <div className="section pagination-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* Product Count & Orderby Start */}
                            <div className="andro_shop-global">
                                <p>Showing <b>{this.state.itemsPerPage}</b> of <b>{shopbox.length}</b> products </p>
                                <form method="post">
                                    <select className="form-control" name="orderby">
                                        <option value="default">Default sorting</option>
                                        <option value="latest">Latest release</option>
                                        <option value="price-down">Price: High - Low</option>
                                        <option value="price-up">Price: Low - High</option>
                                        <option value="popularity">Popularity Sorting</option>
                                    </select>
                                </form>
                            </div>
                            {/* Product Count & Orderby End */}
                            <div className="row justify-content-center masonry">
                                {/* Product Start */}
                                {this.state.loading === false ? renderitems : <Loader />}
                                {/* Product End */}
                            </div>
                            {/* Pagination Start */}
                            {pageNumbers.length > 1 ?
                                <ul className="pagination">
                                    {/* Prev */}
                                    {/* to show previous, we need to be on the 2nd or more page */}
                                    {pageNumbers.length > 1 && this.state.currentPage !== 1 ?
                                        <li className="page-item">
                                            <Link className="page-link" to="#" data-page={this.state.currentPage - 1} onClick={this.handleClick}>
                                                <span aria-hidden="true">«</span>
                                                <span className="sr-only">Previous</span>
                                            </Link>
                                        </li>
                                        : ''}
                                    {/* Prev */}
                                    {renderPagination}
                                    {/* Next */}
                                    {/* to show next, we should not be on the last page */}
                                    {pageNumbers.length > 1 && this.state.currentPage !== pageNumbers.length ? <li className="page-item">
                                        <Link className="page-link" to="#" data-page={parseInt(this.state.currentPage + 1)} onClick={this.handleClick}>
                                            <span aria-hidden="true">»</span>
                                            <span className="sr-only">Next</span>
                                        </Link>
                                    </li>
                                        : ''}
                                    {/* Next */}
                                </ul> : ''}
                            {/* Pagination End */}
                        </div>
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                {/* Search Start */}
                                <div className="sidebar-widget widget-search">
                                    <form method="post">
                                        <div className="andro_search-adv-input">
                                            <input type="text" className="form-control" placeholder="Look for Le'tamry, Rings" name="search" />
                                            <button type="submit" name="button"><i className="fa fa-search" /></button>
                                        </div>
                                    </form>
                                </div>
                                {/* Search End */}
                                {/* Filter: Categories Start */}
                                <div className="sidebar-widget">
                                    <h5 className="widget-title"> Category </h5>
                                    <ul className="sidebar-widget-list">
                                        {blogcategory.map((item, i) => (
                                            <li key={i}>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id={"customCheck" + item.id} />
                                                    <label className="custom-control-label" htmlFor={"customCheck" + item.id}>{item.title}</label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Filter: Categories End */}
                                {/* Filter: Condition Start */}
                                <div className="sidebar-widget">
                                    <h5 className="widget-title"> Condition </h5>
                                    <ul className="sidebar-widget-list">
                                        {condition.map((item, i) => (
                                            <li key={i}>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id={"customCheck" + item.id} />
                                                    <label className="custom-control-label" htmlFor={"customCheck" + item.id}>{item.title}</label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Filter: Condition End */}
                                {/* Filter: State Start */}
                                <div className="sidebar-widget">
                                    <h5 className="widget-title"> Brand </h5>
                                    <ul className="sidebar-widget-list">
                                        {brand.map((item, i) => (
                                            <li key={i}>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id={"customCheck" + item.id} />
                                                    <label className="custom-control-label" htmlFor={"customCheck" + item.id}>{item.title}</label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Filter: State End */}
                                {/* Filter: Freshness Start */}
                                <div className="sidebar-widget">
                                    <h5 className="widget-title"> Freshness </h5>
                                    <IonRangeSlider type="double" min={0} max={10} from={4} to={6} grid={true} postfix=" days" />
                                </div>
                                {/* Filter: Freshness End */}
                                {/* Filter: Price Start */}
                                <div className="sidebar-widget">
                                    <h5 className="widget-title"> Price </h5>
                                    <IonRangeSlider type="double" min={0} max={500} from={10} to={100} grid={true} postfix=" $" />
                                </div>
                                {/* Filter: Price End */}
                                {/* Tags Start */}
                                <div className="sidebar-widget">
                                    <h5 className="widget-title"> Popular Tags </h5>
                                    <div className="tagcloud">
                                        {blogtags.map((item, i) => (
                                            <Link key={i} to={"/post-single/" + item.id}>#{item.title}</Link>
                                        ))}
                                    </div>
                                </div>
                                {/* Tags End */}
                                {/* Newsletter Start */}
                                <div className="sidebar-widget">
                                    <div className="andro_newsletter-form">
                                        <h5>Join our newsletter</h5>
                                        <p>Get exclusive weekly deals with our newsletter subscription</p>
                                        <form method="post">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="newsletter_email" placeholder="Email Address" />
                                            </div>
                                            <button type="submit" className="andro_btn-custom secondary btn-block shadow-none" name="button">Join Newsletter</button>
                                        </form>
                                    </div>
                                </div>
                                {/* Newsletter End */}
                            </div>
                        </div>
                        {/* Sidebar End */}
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
            </div>
        );
    }
}

export default Content;