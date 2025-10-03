import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';
import img4 from '../assets/img-4.jpg';
import img5 from '../assets/img-5.jpg';
import img6 from '../assets/img-6.jpg';
import img7 from '../assets/img-7.jpg';
import img8 from '../assets/img-8.jpg';
import img9 from '../assets/img-9.jpg';


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
                            <img src={img1} alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src={img2} alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src={img3} alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src={img4} alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src={img5} alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src={img6} alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src={img7} alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src={ img8} alt="ok" />
                        </div>
                        </Col>

                        <Col md={4}>
                        <div className="main-img-project">
                            <img src={img9} alt="ok" />
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