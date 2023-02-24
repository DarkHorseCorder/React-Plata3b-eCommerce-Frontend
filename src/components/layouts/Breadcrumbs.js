import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Breadcrumbs extends Component {
    render() {
        return (
            <div className="andro_subheader pattern-bg secondary-bg">
                <div className="container">
                    <div className="andro_subheader-inner">
                        <h1>{this.props.breadcrumb.pagename}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{this.props.breadcrumb.pagename}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumbs;