import React, { Component, Fragment } from "react";
import Banner from "./Banner";
import Blogposts from "./Blogposts";
import Categories from "./Categories";
import Cta from "./Cta";
import Dailydeals from "./Dailydeals";
import Featuredproduct from "./Featuredproduct";
import Gallery from "./Gallery";
import Otherproducts from "./Otherproducts";
import Shopcta from "./Shopcta";
import Topcategory from "./Topcategory";
import Topbanner from "./Topbanner";

import ReactWhatsapp from "react-whatsapp";
class Content extends Component {
  render() {
    return (
      <Fragment>
        <Topbanner />

        {/*  <Banner />*/}
        <Categories />
        {/* <Featuredproduct /> */}
        {/*  <Shopcta />*/}
        <Topcategory />
        <div className="section pt-0 subsection">
          <Cta />
        </div>
        <Gallery />
        {/*<Dailydeals />*/}
        {/* <Blogposts />*/}
        {/*<Otherproducts />*/}
      </Fragment>
    );
  }
}

export default Content;
