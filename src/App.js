import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import fakeBackend from "./utils/AuthType/fakeBackend";

// Activating fake backend
fakeBackend();

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Newsletter
const Newsletter = React.lazy(() => import("./components/layouts/Newsletter"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Homefour = React.lazy(() => import("./components/pages/Homefour"));
const About = React.lazy(() => import("./components/pages/About"));
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Bloglist = React.lazy(() => import("./components/pages/Bloglist"));
const Blogmasonary = React.lazy(() =>
  import("./components/pages/Blogmasonary")
);
const Faqlist = React.lazy(() => import("./components/pages/Faqlist"));
const Postsingle = React.lazy(() => import("./components/pages/Postsingle"));
const Cart = React.lazy(() => import("./components/pages/Cart"));
const Checkout = React.lazy(() => import("./components/pages/Checkout"));
const Legal = React.lazy(() => import("./components/pages/Legal"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Wishlist = React.lazy(() => import("./components/pages/Wishlist"));
const Error = React.lazy(() => import("./components/pages/Error"));
//const Shopone = React.lazy(() => import("./components/pages/Shopone"));
const Shoptwo = React.lazy(() => import("./components/pages/Shoptwo"));
//const Shopthree = React.lazy(() => import("./components/pages/Shopthree"));
//const Shopfour = React.lazy(() => import("./components/pages/Shopfour"));
const Productsingle = React.lazy(() =>
  import("./components/pages/Productsingle")
);
const Productsingletwo = React.lazy(() =>
  import("./components/pages/Productsingletwo")
);
const Contact = React.lazy(() => import("./components/pages/Contact"));

function App() {
  return (
    <Router basename={"/"}>
      <Suspense fallback={<div></div>}>
        <Preloader />
        {/*<Newsletter />*/}
        <Switch>
          {/*<Route path="/" component={Homefour} />*/}
          <Route exact path="/" component={Shoptwo} />
          <Route path="/home" component={Homefour} />
          <Route path="/home-v2" component={Hometwo} />
          <Route path="/home-v3" component={Homethree} />
          <Route path="/home-v4" component={Homefour} />
          <Route path="/about" component={About} />
          <Route path="/blog-grid" component={Bloggrid} />
          <Route path="/blog-list" component={Bloglist} />
          <Route path="/faq-list" component={Faqlist} />
          <Route path="/blog-masonry" component={Blogmasonary} />
          <Route path="/post-single/:id" component={Postsingle} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/legal" component={Legal} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/error" component={Error} />
          {/*<Route path="/shop-v1" component={Shopone} />*/}

          {/* <Route path="/shop-v3" component={Shopthree} />
          <Route path="/shop-v4" component={Shopfour} />*/}
          <Route path="/product-single/:id" component={Productsingle} />
          <Route path="/product-single-v2/:id" component={Productsingletwo} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
