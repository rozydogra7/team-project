import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
function OurProject(){
    return(
        <>
        <section className='section-ourproject'>
            <Container>
                <div className="main-Our-project">
                    <div className="main-head-project">
                        <h2>Our Projects</h2>
                    </div>
                </div>
                <div className="main-row-secproject">
                    <Row className='row-main-secproject'>
                        <Col md={4}>
                        <div className="main-img-project">
                            <img src="src/assets/img-1.jpg" alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src="src/assets/img-2.jpg" alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src="src/assets/img-3.jpg" alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src="src/assets/img-4.jpg" alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src="src/assets/img-5.jpg" alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src="src/assets/img-6.jpg" alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src="src/assets/img-7.jpg" alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src="src/assets/img-8.jpg" alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src="src/assets/img-9.jpg" alt="ok" />
                        </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </section>
        </>
    )
}
export default OurProject;