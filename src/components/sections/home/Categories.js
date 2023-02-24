import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import category from '../../../data/category.json';

class Categories extends Component {
    render() {
        return (
            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        {category.slice(0, 6).map((item, i) => (
                            <div key={i} className="col-lg-2 col-md-6 col-sm-4">
                                <div className="andro_icon-block text-center has-link">
                                    <Link to="#">
                                        <i className={item.icon} />
                                        <h5>{item.title}</h5>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;