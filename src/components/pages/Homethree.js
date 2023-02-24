import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headerthree";
import Instagram from "../layouts/Instagram";
import Footer from "../layouts/Footer";
import Content from "../sections/home-v3/Content";

class Homethree extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Plata3b | Homepage</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Content />
        <Instagram classname={{ style: "secondary-bg" }} />
        <Footer
          footer={{
            style: "andro_footer-dark",
            logo: "assets/img/logo-light.png",
          }}
        />
      </Fragment>
    );
  }
}

export default Homethree;
