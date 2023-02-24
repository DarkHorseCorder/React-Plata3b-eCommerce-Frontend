import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import blogbox from "../../../data/blog.json";
import blogtags from "../../../data/blogtags.json";
import Loader from "../../layouts/Loader";
import classNames from "classnames";

import { getFaqs } from "../../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Accordion, Card, NavLink, Form } from "react-bootstrap";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      items: blogbox,
      currentPage: 1,
      itemsPerPage: 3,
      loading: false,
      faqs: null,
      faqSelect: null,
      faqsS: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.categoriaFaq = this.categoriaFaq.bind(this);
  }

  componentDidMount() {
    const { onGetFaqs } = this.props;

    onGetFaqs();
  }


  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      console.log("Component Did Update");
      const { faqs } = this.props;
      this.setState({
        faqs: faqs,
      });
    }
  }

  categoriaFaq(event) {
    this.setState({ faqSelect: event.target.value })
    const { faqs } = this.props;
    let select = faqs.faqs.filter(element => element.parent == event.target.value);
    this.setState({ faqsS: select })
  }

  handleClick(event) {
    var paginationContent = event.target.closest(".pagination-content");
    if (paginationContent) {
      paginationContent.scrollIntoView();
    }
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      this.setState({
        currentPage: Number(event.target.getAttribute("data-page")),
        loading: false,
      });
    }, 2000);
  }
  render() {
    const { items, currentPage, itemsPerPage, faqSelect, faqsS } = this.state;
    const { faqs } = this.state;
    const faqsItems =
      faqs != null && (faqSelect == null || faqSelect == '')
        ? faqs.categories.map((item, i) => {
          const result = faqs.faqs.filter((faq) => faq.parent == item.id);
          console.log(result);
          return (
            <div className="col-lg-12">
              <div className="section section-padding pt-10">
                <Card>
                  <Card.Header style={{ backgroundColor: "white" }}>
                    {" "}
                    <h5>{item.title}</h5>
                  </Card.Header>
                  <Card.Body>
                    <Accordion defaultActiveKey={item.id} className="with-gap">
                      {result.map((it, i) => {
                        return (
                          <Card>
                            <Accordion.Collapse
                              eventKey={it.id}
                              className="collapseparent"
                            >
                              <Card.Body>{it.description}</Card.Body>
                            </Accordion.Collapse>
                            <Card.Header>
                              <Accordion.Toggle
                                as={NavLink}
                                variant="link"
                                eventKey={it.id}
                              >
                                {it.title}
                              </Accordion.Toggle>
                            </Card.Header>
                          </Card>
                        );
                      })}
                    </Accordion>
                  </Card.Body>
                </Card>
              </div>
            </div>
          );
        })
        :
        (faqs != null && faqSelect != null &&

          <div className="col-lg-12">
            <div className="section section-padding pt-10">
              <Card>
                <Card.Header style={{ backgroundColor: "white" }}>
                  {" "}
                  <h5>{faqs.categories.find(element => element.id == faqSelect).title}</h5>
                </Card.Header>
                <Card.Body>
                  <Accordion defaultActiveKey={0} className="with-gap">
                    {faqsS.map((it, i) => {
                      return (
                        <Card>
                          <Accordion.Collapse
                            eventKey={it.id}
                            className="collapseparent"
                          >
                            <Card.Body>{it.description}</Card.Body>
                          </Accordion.Collapse>
                          <Card.Header>
                            <Accordion.Toggle
                              as={NavLink}
                              variant="link"
                              eventKey={it.id}
                            >
                              {it.title}
                            </Accordion.Toggle>
                          </Card.Header>
                        </Card>
                      );
                    })}
                  </Accordion>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
    ;

    console.log(faqsItems);

    // Logic for displaying page numbers

    return (
      <div className="section section-padding pt-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Form>
                <Form.Group size="lg" controlId="exampleForm.ControlSelect2">
                  <Form.Label>Categoria de la Faq</Form.Label>
                  <Form.Control onChange={this.categoriaFaq} as="select">
                    <option value=""> Todas</option>
                    {faqs != null
                      ? faqs.categories.map((item, i) => {
                        return (
                          <option value={item.id}> {item.title} </option>
                        );
                      })
                      : null}
                  </Form.Control>
                </Form.Group>
              </Form>
              {faqsItems != null ? (
                <div className="row"> {faqsItems} </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  faqs: state.content.faqs,
});

const mapDispatchToProps = (dispatch) => ({
  onGetFaqs: () => dispatch(getFaqs()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Content));

//export default Content;
