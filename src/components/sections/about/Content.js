import React, { Component, Fragment } from "react";
import Abouttext from "./Abouttext";
import Cta from "../home-v2/Cta";
import History from "./History";
import Testimonial from "./Testimonial";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Abouttext />
        {/*<div className="section pt-0">
                   <Cta />
                </div>*/}
        <History />
        <Testimonial />
      </Fragment>
    );
  }
}

export default Content;
