import React, { Component } from "react";
import { Link } from "react-router-dom";
import category from "../../data/category.json";
import blogtags from "../../data/blogtags.json";

import PropTypes from "prop-types";

import { getCategories } from "../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import IconSvg from "../../components/Icons";

import { Row, Col } from "react-bootstrap";

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    const { onGetCategories } = this.props;

    onGetCategories();
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      console.log("Component Did Update");
      const { categories } = this.props;
      this.setState({
        categories: categories,
      });
    }
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div className="sidebar d-block">
        {/* Popular Categories Start */}
        <div className="sidebar-widget widget-categories-icons">
          <h5 className="widget-title">Categorias</h5>
          <div className="row">
            {categories.map((item, i) => (
              <div key={i} className="col-lg-6">
                <div className="andro_icon-block text-center has-link">
                  <Row>
                    <Col>
                      <IconSvg size={24} icon={item.icon} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5> {item.name}</h5>
                    </Col>
                  </Row>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Popular Categories End */}
        {/* Popular Tags Start */}
        {/*<div className="sidebar-widget">
                    <h5 className="widget-title">Popular Tags</h5>
                    <div className="tagcloud">
                        {blogtags.map((item, i) => (
                            <Link to="#" key={i}>{item.title}</Link>
                        ))}
                    </div>
                </div>*/}
        {/* Popular Tags End */}
      </div>
    );
  }
}

//export default Canvas;
/*
Canvas.propTypes = {
  //  cartData: PropTypes.any,
  categories: PropTypes.array,
};*/

const mapStateToProps = (state) => ({
  categories: state.ecommerce.categories,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Canvas));
