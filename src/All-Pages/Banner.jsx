import Container from 'react-bootstrap/Container';
 import Button from 'react-bootstrap/Button';

function Banner(){
    return(
        <>
        <section className="Banner-section">
            <Container>
            <div className="main-banner">
                <div className="main-haeding-banner">
                    <h2>Our Projects</h2>
                </div>
                <div className="main-para-banner">
                    <p>Doors, Windows, Railings & Luxury Glass — Engineered for Inspired Living</p>
                   
          <Button className='Logo-btn-4'>Get free Consulatation<span><i class="fa-solid fa-arrow-right"></i></span></Button>   
                </div>
            </div>
            </Container>
        </section>
        </>
    )
}
export default Banner;