import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Slide , Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

class Quickview extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            clicks: 1,
            id: props.id,
            product: props.product
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
        const { product } = this.state;

        const style = {
            textAlign: 'center',
            background: 'teal',
            padding: '200px 0',
            fontSize: '30px'
        };

        const properties = {
            duration: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            indicators: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        };
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="slide-container">
                            <Slide indicators={true}>
                                {product.images.map((slideImage, index) => (
                                    <div className="each-slide" key={index}>
                                        {console.log(slideImage.file)}
                                        <div className="andro_product-thumb">
                                            <img
                                                src={"https://api.plata3b.com/img/products/" + slideImage.file}
                                                alt={slideImage.title}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slide>
                        </div>
                       
                    </div>
                    <div className="col-md-7">
                        <div className="andro_product-single-content">
                        {product.rating !=0 ?
                            <div className="andro_rating-wrapper">
                            
                                <div className="andro_rating">
                                    <i className="fa fa-star active" />
                                    <i className="fa fa-star active" />
                                    <i className="fa fa-star active" />
                                    <i className="fa fa-star active" />
                                    <i className="fa fa-star" />
                                </div>
                                <span>4 Stars</span>

                            </div>
                            : null}
                            <h3> {product.name} </h3>
                            <div className="andro_product-price">
                                <span>{product.price}</span>

                            </div>
                            <p className="andro_product-excerpt">{product.description}</p>
                            <form className="andro_product-atc-form">
                                {/* <div className="andro_product-variation-wrapper">
                                    <div className="form-group">
                                        <select className="form-control" name="amount">
                                            <option value>Select Amount</option>
                                            <option value={1}>1 Gram</option>
                                            <option value={2}>2 Gram</option>
                                            <option value={3}>3 Gram</option>
                                            <option value={4}>4 Gram</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" name="breed">
                                            <option value>Select a Breed</option>
                                            <option value="italian">Italian</option>
                                            <option value="egyptian">Egyptian</option>
                                        </select>
                                    </div>
                                </div>*/}
                                <div className="qty-outter">
                                    <Link to="/product-single/1" className="andro_btn-custom">Buy Now</Link>
                                    <div className="qty">
                                        <span className="qty-subtract" onClick={this.DecreaseItem} data-type="minus" data-field><i className="fa fa-minus" /></span>
                                        <input type="text" name="clicks" value={this.state.clicks} onChange={this.handleChange.bind(this)} />
                                        <span className="qty-add" onClick={this.IncrementItem} data-type="plus" data-field><i className="fa fa-plus" /></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quickview;