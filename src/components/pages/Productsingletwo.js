import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headertwo";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Instagram from "../layouts/Instagram";
import Footer from "../layouts/Footer";
import Content from "../sections/product-single-v2/Content";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {  getProduct } from "../../store/actions";

const pagelocation = "Detalle del Producto";
class Productsingletwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      product: null,
    };
 
  }

  componentDidMount() {
    const { onGetProduct } = this.props;

    let newEvent = {
      id: this.props.match.params.id
    };
    onGetProduct(newEvent);
  }
  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      console.log("Component Did Update");
      const {  product } = this.props;
      this.setState({
        product: product[0],
      });
    }
  }


  render() {
    const {product} = this.state;
    console.log(product)
    return (
      <Fragment>
        <MetaTags>
          <title>Plata3b | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
        {product != null ? <Content productId={this.props.match.params.id}  product={product}/> : null}
        
        <Instagram classname={{ style: "secondary-bg" }} />
        <Footer footer={{ style: "", logo: "assets/img/logo.png" }} />
      </Fragment>
    );
  }
}

//export default Productsingletwo;

const mapStateToProps = (state) => ({
  product: state.ecommerce.product,
});

const mapDispatchToProps = (dispatch) => ({

  onGetProduct: (data) => dispatch(getProduct(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Productsingletwo));
