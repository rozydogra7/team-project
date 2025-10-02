import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';


function ContactForm() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    return (

        <>

            <section className="section-frompart">
                <Container>
                    <div className="row-main-frompart">
                        <Row>
                            <Col md={6}>
                                <div className="form-question-part">
                                    <div className="main-heading-fq">
                                        <h2>Frequently Asked Questions</h2>
                                    </div>
                                    <div className="card-fq-main">
                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open ? "active" : ""}`}
                                                onClick={() => setOpen(!open)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open}
                                            >
                                                <span>What types of projects does Schon Doorways work on?</span>
                                                <span className="icon">{open ? "−" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        From premium villas and luxury apartments to large gated communities,
                                                        commercial buildings, hotels, and boutique retail — we deliver tailored
                                                        aluminium doors, windows, railings, and luxury glass solutions for
                                                        every scale and design brief.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    <button className="close-btn" onClick={() => setOpen(false)}>
                                                        ×
                                                    </button>
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open1 ? "active" : ""}`}
                                                onClick={() => setOpen1(!open1)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open1}
                                            >
                                                <span>What types of projects does Schon Doorways work on?</span>
                                                <span className="icon">{open1 ? "−" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open1}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        From premium villas and luxury apartments to large gated communities,
                                                        commercial buildings, hotels, and boutique retail — we deliver tailored
                                                        aluminium doors, windows, railings, and luxury glass solutions for
                                                        every scale and design brief.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    <button className="close-btn" onClick={() => setOpen1(false)}>
                                                        ×
                                                    </button>
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open2 ? "active" : ""}`}
                                                onClick={() => setOpen2(!open2)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open2}
                                            >
                                                <span>What types of projects does Schon Doorways work on?</span>
                                                <span className="icon">{open2 ? "−" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open2}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        From premium villas and luxury apartments to large gated communities,
                                                        commercial buildings, hotels, and boutique retail — we deliver tailored
                                                        aluminium doors, windows, railings, and luxury glass solutions for
                                                        every scale and design brief.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    <button className="close-btn" onClick={() => setOpen2(false)}>
                                                        ×
                                                    </button>
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open3 ? "active" : ""}`}
                                                onClick={() => setOpen3(!open3)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open3}
                                            >
                                                <span>What types of projects does Schon Doorways work on?</span>
                                                <span className="icon">{open3 ? "−" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open3}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        From premium villas and luxury apartments to large gated communities,
                                                        commercial buildings, hotels, and boutique retail — we deliver tailored
                                                        aluminium doors, windows, railings, and luxury glass solutions for
                                                        every scale and design brief.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    <button className="close-btn" onClick={() => setOpen3(false)}>
                                                        ×
                                                    </button>
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open4 ? "active" : ""}`}
                                                onClick={() => setOpen4(!open4)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open4}
                                            >
                                                <span>What types of projects does Schon Doorways work on?</span>
                                                <span className="icon">{open4 ? "−" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open4}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        From premium villas and luxury apartments to large gated communities,
                                                        commercial buildings, hotels, and boutique retail — we deliver tailored
                                                        aluminium doors, windows, railings, and luxury glass solutions for
                                                        every scale and design brief.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    <button className="close-btn" onClick={() => setOpen4(false)}>
                                                        ×
                                                    </button>
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card-main">
                                            {/* Toggle Button */}
                                            <Button
                                                className={`form-btn-secmain ${open5 ? "active" : ""}`}
                                                onClick={() => setOpen5(!open5)}
                                                aria-controls="example-collapse-text"
                                                aria-expanded={open5}
                                            >
                                                <span>What types of projects does Schon Doorways work on?</span>
                                                <span className="icon">{open5 ? "−" : "+"}</span>
                                            </Button>

                                            {/* Collapse */}
                                            <Collapse in={open5}>
                                                <div className="tabs-main-sec" id="example-collapse-text">
                                                    <p>
                                                        From premium villas and luxury apartments to large gated communities,
                                                        commercial buildings, hotels, and boutique retail — we deliver tailored
                                                        aluminium doors, windows, railings, and luxury glass solutions for
                                                        every scale and design brief.
                                                    </p>

                                                    {/* Cross Close Button inside collapse */}
                                                    <button className="close-btn" onClick={() => setOpen5(false)}>
                                                        ×
                                                    </button>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="main-formsumit-part">
                                    <div class="contact-form">
                                        <h2 class="form-title">We’re just a step away!</h2>

                                        <form>
                                            <input type="text" placeholder="Full Name*" required />
                                            <input type="email" placeholder="Email Address*" required />
                                            <input type="tel" placeholder="Contact No.*" required />
                                            <textarea placeholder="Message"></textarea>
                                            <div className="btn-from"><Button className='Logo-btn-3'>Get in Touch<span><i class="fa-solid fa-arrow-right"></i></span></Button></div>
                                               
                                            
                                        </form>
                                    </div>
                                </div>


                            </Col>


                        </Row>
                    </div>


                </Container>

            </section>

        </>
    )
}
export default ContactForm;