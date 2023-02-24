import React, { Fragment } from 'react';
import { Accordion, Card, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

// Locations
const locationbox = [
    {
        photo: "../assets/img/locations/1.jpg",
        title: "Find Us In",
        titlespan: "Greece",
        para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
    },
    {
        photo: "../assets/img/locations/2.jpg",
        title: "Find Us In",
        titlespan: "New York",
        para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
    },
];
// Info
const contactinfo = [
    {
        icon: "flaticon-call",
        title: "Atención al cliente",
        para: "El horario de atención al cliente: De Lunes a Viernes (no festivos) 8:00-16:00 ",
        info: '+34 931 24 24 56'
    },
    {
        icon: "flaticon-email",
        title: "Email",
        para: "El correo electronico para ponerte en contaco con atención al cliente: ",
        info: 'cau@plata3b.com'
    },
    {
        icon: "flaticon-location",
        title: "Dirección",
        para: "La dirección en la que nos puedéis encontrar es:.",
        info: 'Calle Sant Isidre nº 107, Sabadell (08208), Barcelona'
    },
]


function Content(props) {
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
        <Fragment>
            {/* Locations Start */}
            {/*<div className="section section-padding">
                <div className="container">
                    <div className="row">
                        {locationbox.map((item, i) => (
                            <div key={i} className="col-md-6">
                                <div className="andro_cta">
                                    <Link to="#">
                                        <img src={item.photo} alt="location" />
                                        <div className="andro_cta-content">
                                            <h4 className="text-white">{item.title} <span className="fw-400">{item.titlespan}</span> </h4>
                                            <p className="text-white mb-0">{item.para}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                        </div>*/}
            {/* Locations Start */}
            {/* Icons Start */}
            <div className="section section-padding pt-10">
                <div className="container">
                    <div className="row">
                        {contactinfo.map((item, i) => (
                            <div key={i} className="col-lg-4">
                                <div className="andro_icon-block">
                                    <Link to="#">
                                        <i className={item.icon} />
                                        <h5>{item.title}</h5>
                                        <p>{item.para}</p>
                                        <b>{item.info}</b>
                                    </Link>
                                    <svg xmlns="http://www.w3.org/2000/svg">
                                        <rect height={500} width={500} className="andro_svg-stroke-shape-anim" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Icons End */}
            {/* FAQ & Contact Form Start */}
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
                                            Las joyas de Plata 925 están compuestas por el 92,5% de plata pura, mientras que el 7,5% restante está compuesto por otro metal, generalmente cobre; de forma que fortalece la plata y la hace más resistente y duradera.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                                            ¿Qué sifnifica: Plata 925?
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="1" className="collapseparent">
                                        <Card.Body>
                                        Que la plata se oscurezca no implica que sea de mala calidad. Esto es algo normal ya que la plata no se oxida porque no reacciona al oxígeno, sino al azufre. Pero existen algunos factores que pueden provocarles daños a la plata, por ejemplo: 
                                        <br/>
                                        * El contacto de la plata con los productos de maquillajes, cremas , perfumes y hasta con el propio sudor puede provocar que se ennegrezca fácilmente.
                                        <br/>
                                        * Guardar las joyas en una funda de tela suave y separadas a las joyas de otro material, así se mantiene el brillo de la misma.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                                            ¿Por qué se ensucian o se oscurecen las joyas de Plata?
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="2" className="collapseparent">
                                        <Card.Body>
                                            Las joyas de Plata deben de tratarse con mucho cuidado y suvidad. Debe de limpiarse a menudo con un pañito preferiblemente de gamusa suave y frotarlo muy suave y si deseas hacer una limpieza mas a fondo puedes poner en un recipiente agua con unas gotas de limón y dejarlo unos 20 minutos aproximadamente. Después puedes enjuagarlo bien y secarlo con un paño fino o con un algodón. 
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                                            ¿Cómo cuidar las joyas de Plata?
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="3" className="collapseparent">
                                        <Card.Body>
                                            Los métodos de pago disponibles en nuetra página web son: PayPal, Mastercad, Visa y a través de Bizum.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="3">
                                            ¿Qué métodos de pago puedo utilizar para realizar mis pedidos?
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="4" className="collapseparent">
                                        <Card.Body>
                                            Sii, perfectamente puede comprar nuestros productos de manera telefónica. Estaríamos encantados de poderles ayudar. El horario de nuestro servicio de Atención al cliente es: De Lunes a Viernes(no festivos) 8:00-16:00 y nuestro número de teléfono es +34 931 24 24 56. 
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="4">
                                            ¿Puedo comprar los productos de manera telefónica?
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="5" className="collapseparent">
                                        <Card.Body>
                                            Sii, para realizar un cambio, el producto debe estar en perfectas condiciones, no debe haber sido utilizado, con su packaging original y estar en el plazo de cambios y devoluciones que es de 15 días hábiles a partir de la entrega del pedido.
                                            <br/>
                                            En caso de que el producto devuelto no esté en perfectas condiciones, se reserva el derecho de realizar un reembolso parcial del importe del producto. No se reembolsarán los gastos de envío originales del pedido. 
                                            <br/>
                                            En caso de no recibir todos los artículos de tu pedido, no se realizará reembolsos, se realizará un nuevo envío con los artículos faltantes.
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="5">
                                            ¿Puedo realizar un cambio de producto?
                                            </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="6" className="collapseparent">
                                        <Card.Body>
                                            
                                        </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={NavLink} variant="link" eventKey="6">
                                            ¿Cómo puedo realizar un cambio de producto?
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
            {/* FAQ & Contact Form End */}
        </Fragment>
    );
}

export default Content;