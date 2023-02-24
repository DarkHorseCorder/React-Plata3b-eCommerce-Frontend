import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headertwo";
import Footer from "../layouts/Footer";
import Content from "../sections/error/Content";

const pagelocation = "Error 404";

class Error extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Plata3b | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Content />
        <Footer footer={{ style: "", logo: "assets/img/logo.png" }} />
      </Fragment>
    );
  }
}

export default Error;
