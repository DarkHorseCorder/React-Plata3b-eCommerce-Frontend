import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import blogbox from '../../../data/blog.json';
import blogtags from '../../../data/blogtags.json';
import Loader from '../../layouts/Loader';
import classNames from 'classnames';

class Content extends Component {
    constructor() {
        super();
        this.state = {
            items: blogbox,
            currentPage: 1,
            itemsPerPage: 3,
            loading: false
        };
        this.handleClick = this.handleClick.bind(this);
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
            return <article key={i} className="andro_post andro_post-list">
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
                    <Link className="andro_btn-custom" to={"/post-single/" + item.id}> Read More </Link>
                </div>
            </article>
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
                    <div className="row justify-content-center">
                        {/* Article Start */}
                        <div className="col-12">
                            {this.state.loading === false ? renderitems : <Loader />}
                        </div>
                        {/* Article End */}
                    </div>
                    {/* Pagination Start */}
                    {pageNumbers.length > 1 ?
                        <ul className="pagination mb-0">
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
            </div>
        );
    }
}

export default Content;