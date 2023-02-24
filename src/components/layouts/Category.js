import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
    render() {
        return (
            <ul>
                {/* Level 1 */}
                <li className="andro_category-mm-item andro_category-mm-item-has-children">
                    <Link to="#"> Diamond </Link>
                    <ul className="andro_category-mm-2-cols">
                        {/* Level 2 */}
                        <li>
                            <div className="andro_category-mm-banner">
                                <img src={process.env.PUBLIC_URL + "/assets/img/megamenu/1.jpg"} alt="megamenu img" />
                                <div className="andro_category-mm-banner-desc">
                                    <h6>Diamond</h6>
                                    <p>Experience organic food like never before</p>
                                </div>
                            </div>
                            <ul>
                                <li> <Link to="#">Rings &amp; Le'tamry</Link> </li>
                                <li> <Link to="#">Neckless</Link> </li>
                                <li> <Link to="#">Diamond Neckless</Link> </li>
                                <li> <Link to="#">Gold &amp; Silver</Link> </li>
                                <li> <Link to="#">Colorfull Stone </Link> </li>
                                <li> <Link to="#">Gold Pendent</Link> </li>
                                <li> <Link to="#">Twisted Ear Rings</Link> </li>
                                <li> <Link to="#">Red Valvet Ring</Link> </li>
                                <li> <Link to="#">Black Stone</Link> </li>
                            </ul>
                            <ul>
                                <li> <Link to="#">Pendent</Link> </li>
                                <li> <Link to="#">Diamond Rings </Link> </li>
                                <li> <Link to="#">Distillates</Link> </li>
                                <li> <Link to="#">Gold Rings</Link> </li>
                                <li> <Link to="#">Green Stone </Link> </li>
                                <li> <Link to="#">Diomond Neckless</Link> </li>
                                <li> <Link to="#">Blue Pendents</Link> </li>
                                <li> <Link to="#">White Gold </Link> </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="andro_category-mm-item"> <Link to="#"> Mix Gold</Link> </li>
                <li className="andro_category-mm-item andro_category-mm-item-has-children">
                    <Link to="#">Silver</Link>
                    <ul className="andro_category-mm-2-cols">
                        {/* Level 2 */}
                        <li>
                            <div className="andro_category-mm-banner">
                                <img src={process.env.PUBLIC_URL + "/assets/img/megamenu/2.jpg"} alt="megamenu img" />
                                <div className="andro_category-mm-banner-desc">
                                    <h6>Gold</h6>
                                    <p>Hand made baskets for your organic goods</p>
                                </div>
                            </div>
                            <ul>
                                <li> <Link to="#">Rings &amp; Le'tamry</Link> </li>
                                <li> <Link to="#">Neckless</Link> </li>
                                <li> <Link to="#">Diamond Neckless</Link> </li>
                                <li> <Link to="#">Gold &amp; Silver</Link> </li>
                                <li> <Link to="#">Colorfull Stone </Link> </li>
                            </ul>
                            <ul>
                                <li> <Link to="#">Gold Pendent</Link> </li>
                                <li> <Link to="#">Twisted Ear Rings</Link> </li>
                                <li> <Link to="#">Red Valvet Ring</Link> </li>
                                <li> <Link to="#">Black Stone</Link> </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="andro_category-mm-item"> <Link to="#">Diamond Pointed Pendent</Link> </li>
                <li className="andro_category-mm-item"> <Link to="#"> Platinum</Link> </li>
                <li className="andro_category-mm-item"> <Link to="#"> White Gold</Link> </li>
                <li className="andro_category-mm-item"> <Link to="#">24 C Gold </Link> </li>
                <li className="andro_category-mm-item andro_category-mm-item-has-children andro_category-mm-item-expand">
                    <Link to="#"> <i className="fas fa-plus" /> More Categories</Link>
                    <ul className="andro_category-mm-2-cols">
                        {/* Level 2 */}
                        <li>
                            <div className="andro_category-mm-banner">
                                <img src={process.env.PUBLIC_URL + "/assets/img/megamenu/3.jpg"} alt="megamenu img" />
                                <div className="andro_category-mm-banner-desc">
                                    <h6>More Categories</h6>
                                    <p>Explore more categories that we offer</p>
                                </div>
                            </div>
                            <ul>
                                <li> <Link to="#">Rings &amp; Le'tamry</Link> </li>
                                <li> <Link to="#">Neckless</Link> </li>
                                <li> <Link to="#">Diamond Neckless</Link> </li>
                                <li> <Link to="#">Gold &amp; Silver</Link> </li>
                                <li> <Link to="#">Colorfull Stone </Link> </li>
                            </ul>
                            <ul>
                                <li> <Link to="#">Gold Pendent</Link> </li>
                                <li> <Link to="#">Twisted Ear Rings</Link> </li>
                                <li> <Link to="#">Red Valvet Ring</Link> </li>
                                <li> <Link to="#">Black Stone</Link> </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default Category;