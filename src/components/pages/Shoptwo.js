import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Headertwo";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Instagram from "../layouts/Instagram";
import Footer from "../layouts/Footer";
import Content from "../sections/shop-v2/Content";
import FloatingWhatsApp from "react-floating-whatsapp";
const pagelocation = "Tienda";

class Shoptwo extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Plata3b | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
        <Content />
        <div style={{ position: "fixed", zIndex: 16 }}>
          <FloatingWhatsApp
            phoneNumber="+34679775544"
            accountName="Plata3B"
            avatar="assets/img/ICONO.png"
            statusMessage="Nunca te quede con las ganas de nada..."
            chatMessage="Hola, ¿Cómo estás?
            Te damos la bienvenida a Plata3B!!
            ¿Cómo podemos ayudarte?"
            placeholder="Escriba su mensaje..."
            styles={{module_chatHeader__23UA6: '#f1ba76a3'}}
          />
        </div>

        <Instagram classname={{ style: "secondary-bg" }} />
        <Footer footer={{ style: "", logo: "assets/img/logo.png" }} />
      </Fragment>
    );
  }
}

export default Shoptwo;
