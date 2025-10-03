import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
 import logo from "../assets/logo.png";

function Footer() {
    return (
        <>
            <section className="footer-part">
                <Container>
                    <div className="main-row-footer">
                        <Row>
                            <Col md={3}>
                                <div className="row-main-sec1">
                                    <div className="logo-footer">
                                        <img src={logo} alt="ok" />
                                    </div>
                                    <div className="logo-footer-para">
                                        <p> India’s trusted name in premium aluminium doors and windows, blending world-class German engineering with refined Indian craftsmanship.</p>
                                    </div>
                                    <div className="logo-footer-icons">
                                        <i class="fa-brands fa-facebook" style={{color: "#ffffff;"}}></i>
                                     <i class="fa-brands fa-instagram" style={{color:"#ffffff;"}}></i>
                                        <i class="fa-brands fa-pinterest" style={{color: "#ffffff;"}}></i>
                                      <i class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                </div>
                            </Col>

                            <Col md={3}>
                                <div className="row-main-sec2">
                                    <h3>Our Existence</h3>
                                    <ul>
                                        <li>contact@theschon.com</li>
                                        <li>+91 9535359481</li>
                                        <li>+91 7019209490</li>
                                    </ul>
                                </div>
                            </Col>

                            <Col md={3}>
                                <div className="row-main-sec3">
                                    <h3>Quick Links </h3>
                                    <ul>
                                        <li>Our Blogs</li>
                                        <li>About Us</li>
                                        <li>News</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </Col>

                            <Col md={3}>
                            <div className="row-main-sec4">
                                <h3>Products</h3>
                                <ul>
                                    <li>Doors</li>
                                    <li>Windows</li>
                                    <li>Railings</li>
                                    <li>Glasses</li>
                                    <li>Cubicles</li>
                                </ul>
                            </div>
                            </Col>
                        </Row>  
                    </div>
                  <div className="last">
                            <p>All Rights Reserved</p>

                        </div>
                </Container>
            </section>
        </>
    )


}
export default Footer;