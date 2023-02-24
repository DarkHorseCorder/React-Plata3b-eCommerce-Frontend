import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="andro_404-container">
                        <img src="assets/img/404.jpg" alt="" />
                        <h1>Page Not Found</h1>
                        <p>The page you are trying to access could not be found. Please try looking for something else</p>
                        <Link to="/" className="andro_btn-custom light">Go To Home Page</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;