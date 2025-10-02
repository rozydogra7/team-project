import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
                                <img src="src/assets/testo.png" alt="ok" />
                            </div>
                            <div className="test-monial-para">
                                <p>What sets Schon apart is their understanding of architectural vision. I needed custom aluminium systems for a minimalist villa project, and they executed every detail with precision. Their ability to handle complex briefs while maintaining design integrity is unmatched.</p>
                            </div>
                            <div className="test-monial-block">
                                
                                    <img className="test-img" src="src/assets/Coursal-img-1.png" alt="ok" />
                                
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
                                <img src="src/assets/testo.png" alt="ok" />
                            </div>
                            <div className="test-monial-para">
                                <p>What sets Schon apart is their understanding of architectural vision. I needed custom aluminium systems for a minimalist villa project, and they executed every detail with precision. Their ability to handle complex briefs while maintaining design integrity is unmatched.</p>
                            </div>
                            <div className="test-monial-block">
                                
                                    <img className="test-img" src="src/assets/1751275903.png" alt="ok" />
                                
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
                            <div className="test-monial-para">
                                <p>What sets Schon apart is their understanding of architectural vision. I needed custom aluminium systems for a minimalist villa project, and they executed every detail with precision. Their ability to handle complex briefs while maintaining design integrity is unmatched.</p>
                            </div>
                            <div className="test-monial-block">
                                
                                    <img className="test-img" src="src/assets/Coursal-img.png" alt="ok" />
                                
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