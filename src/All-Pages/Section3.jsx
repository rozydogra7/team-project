import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Testicon from '../assets/testo.png';
import Coursal from '../assets/Coursal-img.png'
import Coursal1 from '../assets/Coursal-img-1.png';
import Coursal2  from '../assets/Coursal-img-2.png';

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Swiper modules
import { Pagination, Autoplay } from "swiper/modules";

function Testmonial(){
    return(
        <>
        <section className="testmonial-part">
      <Container>
        <div className="testmonial-heading">
          <h2>Built on Trust. Chosen by Experts</h2>
        </div>

        {/* ✅ Swiper Section */}
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
        //   autoplay={{
         
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 2,
            },
             1200: {
              slidesPerView: 3,
            },
          }}
        //   modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="main-sec-testM">
              <div className="test-monial-icon">
                <img src={Testicon} alt="ok" />
              </div>
              <div className="test-monial-para">
                <p>
                  What sets Schon apart is their understanding of architectural
                  vision. I needed custom aluminium systems for a minimalist.
                  
                </p>
              </div>
              <hr />
              <div className="test-monial-block">
                <img className="test-img" src={Coursal} alt="ok" />
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
                <img src={Testicon} alt="ok" />
              </div>
              <div className="test-monial-para">
                <p>
                  Schon’s team brings creativity and precision together. Their
                  quality craftsmanship is unmatched in the industry.
                </p>
              </div>
              <hr />
              <div className="test-monial-block">
                <img className="test-img" src={Coursal2} alt="ok" />
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
                <img src={Testicon} alt="ok" />
              </div>
              <div className="test-monial-para">
                <p>
                  Schon turned our vision into reality with top-tier designs and
                  flawless finishing. Highly recommended!
                </p>
              </div>
              <hr />
              <div className="test-monial-block">
                <img className="test-img" src={Coursal1} alt="ok" />
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