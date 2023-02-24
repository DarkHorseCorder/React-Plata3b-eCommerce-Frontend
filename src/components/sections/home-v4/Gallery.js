import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const galleryPost = [
    { img: "assets/img/gallery/2.jpg", title: "Best Jwellery", colclass: "col-sm-4" },
    { img: "assets/img/gallery/3.jpg", title: "Best Jwellery", colclass: "col-sm-8" },
    { img: "assets/img/gallery/4.jpg", title: "Best Jwellery", colclass: "col-sm-4" },
    { img: "assets/img/gallery/5.jpg", title: "Best Jwellery", colclass: "col-sm-4" },
    { img: "assets/img/gallery/6.jpg", title: "Best Jwellery", colclass: "col-sm-4" },
];

class Gallery extends Component {
    render() {
        return (
            <section className="jw-masonary-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="jw-masonary-gallery">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="jw-gallery-item full-height">
                                            <img src={process.env.PUBLIC_URL + "/assets/img/gallery/1.jpg"} alt="" />
                                            <div className="jw-gallery-text">
                                                <h4 className="text-white">Best Jwellery</h4>
                                                <Link to="/shop-v1" className="andro_btn-custom">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            {galleryPost.map((item, i) => (
                                                <div className={item.colclass} key={i}>
                                                    <div className="jw-gallery-item">
                                                        <img src={process.env.PUBLIC_URL + "/" + item.img} alt="" />
                                                        <div className="jw-gallery-text">
                                                            <h4 className="text-white">{item.title}</h4>
                                                            <Link to="/shop-v1" className="andro_btn-custom">Shop Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;