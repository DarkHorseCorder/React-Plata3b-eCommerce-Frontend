import React from 'react';
import { Accordion, Card, NavLink } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function Faqcontact(props) {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('smtp_server', 'template_8uQnFG6N_clone', e.target, 'user_XWPdjpTv0DgrQb9FN3tWr')
            .then((result) => {
                alert("This form has been submitted.");
                window.location.href = '#';
                console.log(result.text);
            }, (error) => {
                alert("This form has been not submitted.");
                window.location.href = '#';
                console.log(error.text);
            });
    }
    return (
        <div className="section pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mb-lg-30">
                        <div className="section-title">
                            <h4 className="title">FAQ</h4>
                        </div>
                        <Accordion defaultActiveKey="0" className="with-gap">
                            <Card>
                                <Accordion.Collapse eventKey="0" className="collapseparent">
                                    <Card.Body>
                                        Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                                        What is Letam?
                                            </Accordion.Toggle>
                                </Card.Header>
                            </Card>
                            <Card>
                                <Accordion.Collapse eventKey="1" className="collapseparent">
                                    <Card.Body>
                                        Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                                        Getting Started with Letam
                                            </Accordion.Toggle>
                                </Card.Header>
                            </Card>
                            <Card>
                                <Accordion.Collapse eventKey="2" className="collapseparent">
                                    <Card.Body>
                                        Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                                        Do i have the latest version?
                                            </Accordion.Toggle>
                                </Card.Header>
                            </Card>
                            <Card>
                                <Accordion.Collapse eventKey="3" className="collapseparent">
                                    <Card.Body>
                                        Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="3">
                                        How many times can I use Letam?
                                            </Accordion.Toggle>
                                </Card.Header>
                            </Card>
                            <Card>
                                <Accordion.Collapse eventKey="4" className="collapseparent">
                                    <Card.Body>
                                        Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                                        </Card.Body>
                                </Accordion.Collapse>
                                <Card.Header>
                                    <Accordion.Toggle as={NavLink} variant="link" eventKey="4">
                                        How to migrate my website?
                                            </Accordion.Toggle>
                                </Card.Header>
                            </Card>
                        </Accordion>
                    </div>
                    <div className="col-lg-7">
                        <div className="section-title">
                            <h4 className="title">Contact Us</h4>
                        </div>
                        <form onSubmit={sendEmail}>
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <input type="text" placeholder="Full Name" className="form-control" name="from_name" required />
                                </div>
                                <div className="form-group col-lg-6">
                                    <input type="text" placeholder="Phone No." className="form-control" name="to_phone" required />
                                </div>
                                <div className="form-group col-lg-12">
                                    <input type="email" placeholder="Email Address" className="form-control" name="to_email" required />
                                </div>
                                <div className="form-group col-lg-12">
                                    <input type="text" placeholder="Subject" className="form-control" name="to_subject" required />
                                </div>
                                <div className="form-group col-lg-12">
                                    <textarea name="message_html" className="form-control" placeholder="Type your message" rows={8} />
                                </div>
                            </div>
                            <button type="submit" className="andro_btn-custom primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqcontact;