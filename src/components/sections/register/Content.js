import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div className="section">
                <div className="imgs-wrapper">
                    <img src={process.env.PUBLIC_URL + "/assets/img/products/1.png"} alt="veg" className="d-none d-lg-block" />
                    <img src={process.env.PUBLIC_URL + "/assets/img/products/14.png"} alt="veg" className="d-none d-lg-block" />
                </div>
                <div className="container">
                    <div className="andro_auth-wrapper">
                        <div className="andro_auth-description bg-cover bg-center dark-overlay dark-overlay-2" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/auth.jpg)" }}>
                            <div className="andro_auth-description-inner">
                                <i className="flaticon-diet" />
                                <h2>Hello World!</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="andro_auth-form">
                            <h2>Sign Up</h2>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username" name="username" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-light" placeholder="Email Address" name="email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" name="password" />
                                </div>
                                <button type="submit" className="andro_btn-custom primary">Sign Up</button>
                                <div className="andro_auth-seperator">
                                    <span>OR</span>
                                </div>
                                <div className="andro_social-login">
                                    <button type="button" className="andro_social-login-btn facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
                                    <button type="button" className="andro_social-login-btn google"><i className="fab fa-google" /> Continue with Google</button>
                                </div>
                                <p>Already have an account? <Link to="/login">Login</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;