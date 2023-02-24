import React, { Component } from "react";
import { Link } from "react-router-dom";
import category from "../../../data/category.json";

import { getCategories } from "../../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import IconSvg from "../../../components/Icons";
import { Row, Col } from "react-bootstrap";
class Categories extends Component {
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
    return (
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            {categories.slice(0, 6).map((item, i) => (
              <div key={i} className="col-lg-2 col-md-6 col-sm-4">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.ecommerce.categories,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCategories: () => dispatch(getCategories()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Categories));

//export default Categories;
