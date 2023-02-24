import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types'


import { withTranslation } from "react-i18next"


class History extends Component {
  render() {
    return (
      <div className="section pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-20 andro_single-img-wrapper">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/about2.jpg"}
                alt="img"
              />
              <div className="andro_dots" />
            </div>
            <div className="col-lg-6">
              <div className="section-title-wrap mr-lg-30">
                <h2 className="title">
                {this.props.t("Los valores de ")} <span className="custom-primary">Plata3B</span>{" "}
                  que hacen un mundo mejor
                </h2>
                <p className="subtitle">
                  Plata3B se caracteriza por ser una tienda con unos valores
                  definidos.
                </p>
                <p className="subtitle">Las Normas de Plata3B:</p>
                <ul className="andro_list">
                  <li>
                    Que nunca falte la alegría, la buena energía, la
                    originalidad y la transparencia.
                  </li>
                  <li>Generar confianza y ser responsables.</li>
                  <li>
                    Siempre escuchamos a todas las personas, y siempre haremos
                    todo lo posible por ayudar.
                  </li>
                  <li>
                    Ayudamos a la integración de la sociedad, como principal
                    propósito la igualdad entre todos los seres homanos.{" "}
                  </li>
                </ul>
                <Link to="/shop-v2" className="andro_btn-custom">
                  VER NUESTROS PRODUCTOS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
History.propTypes = {
  t: PropTypes.any
}
//export default History;
export default withTranslation()(History)