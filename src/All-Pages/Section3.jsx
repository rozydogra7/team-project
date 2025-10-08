import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Testicon from '../assets/testo.png';
import Coursal from '../assets/Coursal-img.png'
import Coursal1 from '../assets/Coursal-img-1.png';
import Coursal2  from '../assets/Coursal-img-2.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Testmonial(){
    return(
        <>
       <section className="Testmonial-part">
      <Container>
        <div className="testmonial-heading">
          <h2>Built on Trust. Chosen by Experts</h2>
        </div>

        {/* ✅ Swiper starts here */}
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },       // mobile
            768: { slidesPerView: 2 },     // tablet
            1100: { slidesPerView: 2 },    // desktop (shows 3 cards)
             1200: { slidesPerView: 3 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="main-sec-testM">
              <div className="test-monial-icon">
                <img src={Testicon} alt="icon" />
              </div>
              <div className="test-monial-para">
                <p>
                  We partnered with Schon Doorways for a 120-apartment 
                  premium housing project. Their scale of production, delivery 
                  timelines, and on-site coordination made them a reliable 
                   partner.
                </p>
              </div>
              <div className="test-monial-block">
                <img className="test-img" src={Coursal} alt="client" />
                <div className="test-cont">
                  <h3>Nikhil Shetty</h3>
                  <span>Principal Architect</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="main-sec-testM">
              <div className="test-monial-icon">
                <img src={Testicon} alt="icon" />
              </div>
              <div className="test-monial-para">
                <p>
                  What sets Schon apart is their understanding of architectural vision. 
                  They executed every detail with precision, maintaining design integrity.
                </p>
              </div>
              <div className="test-monial-block">
                <img className="test-img" src={Coursal1} alt="client" />
                <div className="test-cont">
                  <h3>Anitha Rao</h3>
                  <span>Homeowner</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="main-sec-testM">
              <div className="test-monial-icon">
                <img src={Testicon} alt="icon" />
              </div>
              <div className="test-monial-para">
                <p>
                  From consultation to installation, Schon Doorways provided 
                  excellent service. The quality speaks for itself—solid, sleek, and premium.
                </p>
              </div>
              <div className="test-monial-block">
                <img className="test-img" src={Coursal2} alt="client" />
                <div className="test-cont">
                  <h3>Karan Mehta</h3>
                  <span>Director</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
 </>
    )
}
export default Testmonial;