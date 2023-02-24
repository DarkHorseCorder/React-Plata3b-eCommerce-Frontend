import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
//i18n

import { withTranslation } from "react-i18next"

class Abouttext extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-20 andro_single-img-wrapper">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/about2.png"}
                alt="about us"
              />
            </div>
            <div className="col-lg-6">
              <div className="section-title-wrap mr-lg-30">
                <h2 className="title">
               
                  <span className="custom-primary">Plata3B </span> {this.props.t("el comienzo de una nueva")}  <span className="custom-primary">{this.props.t("Historia")}</span>
                </h2>

                <p className="subtitle">
                {this.props.t("Plata3B está creada por Claudia y Jordi, somos una bonita historia de amor: Yo soy Claudia, soy cubana y vengo de una familia campesina y de muy buenos sentimientos. Yo trabajaba en una tienda de artesanía y allí conocí a Jordi mi marido. Él es informático, viene de una familia obrera y humilde. Decidió ir de vacaciones a Cuba y nos conocimos en la noche de un 29/01/2019, nos flechó cupido y dos años después decidimos casarnos y disfrutar de todo ese amor juntos. Una vez aquí hemos decidido echar a volar nuestros conocimientos y gustos poniéndole todas nuestras ganas, y entonces así emprendimos y apostamos por Nuestra Plata3B. Nosotros somos personas transparentes, trabajadoras, humildes y con grandes sentimientos, siempre haremos que cada latido de Nuetra Plata3B sea como una estrella fugaz.")}
                  
                </p>

                <p className="subtitle">
                {this.props.t("Plata3B es nuestro sueño hecho realidad y la ilusión de aportar nuestro granito de arena a la lucha ")}
                  <b>
                  
                    <span className="custom-primary">
                   
                      {this.props.t("contra el cáncer")}
                    </span>
                  </b>
                  {this.props.t(" y")}
                 
                  <b>
                    {" "}
                    <span className="custom-primary">
                      
                    {this.props.t(" contra el racismo")}
                    </span>{" "}
                  </b>
                  .
                </p>

                <Link to="/shop-v2" className="andro_btn-custom">
                {this.props.t("Ver nuestros productos")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Abouttext.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Abouttext)



//export default Abouttext;
