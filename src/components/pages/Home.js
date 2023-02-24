import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Instagram from "../layouts/Instagram";
import Footer from "../layouts/Footer";
import Content from "../sections/home/Content";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Plata3b | Homepage</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Content />
        <Instagram classname={{ style: "primary-bg" }} />
        <Footer footer={{ style: "", logo: "assets/img/logo.png" }} />
      </Fragment>
    );
  }
}

export default Home;
