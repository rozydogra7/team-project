import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Testicon from '../assets/testo.png';
import Coursal from '../assets/Coursal-img.png'
import Coursal1 from '../assets/Coursal-img-1.png';
import Coursal2  from '../assets/Coursal-img-2.png';

function Testmonial(){
    return(
        <>
        <section className="Testmonial-part">
            <Container>
                <div className="testmonial-heading">
                    <h2>Built on Trust. Chosen by Experts</h2>
                </div>
                <div className="main-row-testm">
                    <Row>
                        <Col md={4}>
                        <div className="main-sec-testM">
                            <div className="test-monial-icon">
                                <img src={Testicon} alt="ok" />
                            </div>
                            <div className="test-monial-para">
                                <p>What sets Schon apart is their understanding of architectural vision. I needed custom aluminium systems for a minimalist villa project, and they executed every detail with precision. Their ability to handle complex briefs while maintaining design integrity is unmatched.</p>
                            </div>
                            <div className="test-monial-block">
                                
                                    <img className="test-img" src={Coursal} alt="ok" />
                                
                                <div className="test-cont">
                                    <h3>Nikhil Shetty</h3>
                                    <span>Principal Architect</span>
                                </div>
                            </div>
                        </div>
                        </Col>


                         <Col md={4}>
                        <div className="main-sec-testM">
                            <div className="test-monial-icon">
                                <img src={Testicon} alt="ok" />
                            </div>
                            <div className="test-monial-para">
                                <p>What sets Schon apart is their understanding of architectural vision. I needed custom aluminium systems for a minimalist villa project, and they executed every detail with precision. Their ability to handle complex briefs while maintaining design integrity is unmatched.</p>
                            </div>
                            <div className="test-monial-block">
                                
                                    <img className="test-img" src={Coursal2} alt="ok" />
                                
                                <div className="test-cont">
                                    <h3>Anitha Rao</h3>
                                    <span>Homeowner</span>
                                </div>
                            </div>
                        </div>
                        </Col>

                          <Col md={4}>
                        <div className="main-sec-testM">
                            <div className="test-monial-icon">
                                <img src="src/assets/testo.png" alt="ok" />
                            </div>
                            <div className={Testicon}>
                                <p>What sets Schon apart is their understanding of architectural vision. I needed custom aluminium systems for a minimalist villa project, and they executed every detail with precision. Their ability to handle complex briefs while maintaining design integrity is unmatched.</p>
                            </div>
                            <div className="test-monial-block">
                                
                                    <img className="test-img" src={Coursal1} alt="ok" />
                                
                                <div className="test-cont">
                                    <h3>Karan Mehta</h3>
                                    <span>Director</span>
                                </div>
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
export default Testmonial;