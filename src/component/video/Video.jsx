import React from "react";
import "./video.scss";
import videoImg from "../../img/video-3-img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import vSlider1 from "../../img/brand-5.png"
import vSlider2 from "../../img/brand-2.png"
import vSlider3 from "../../img/brand-3.png"
import vSlider4 from "../../img/brand-4.png"
import vSlider5 from "../../img/brand-1.png"



const Video = () => {
  return (
    <section className="video">
     <div className="videoBackround">
        <div className="container">
          <div className="row" id="relativ">
            <div className="col-lg-8 offset-lg-2 video-txt text-center">
              <h3>
                Find the right instructor for you from over 10,000 teachers
              </h3>
              <p>Feugiat primis ligula risus auctor laoreet augue egestas</p>
            </div>
          </div>
        </div>
      </div>
      <div className="video-box">
        <div className="container">
          <div className="row" id="absolute">
            <div className="col-md-12">
              <div className="video-link">
                <img src={videoImg} alt="" />
                <a className="play"  href="https://www.youtube.com/watch?v=Y6MlVop80y0" target="blank">
                  <button className="video-play-button video-play">
                  <span>
                  </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-slider">
      <div className="container">
      <div className="row">
      <div className="video-slider-text">
      <p>Trusted by companies of all sizes:</p>
      <div className="video-slider-swiper">
      <Swiper
      modules={[ Scrollbar, A11y, Autoplay]}
      
      spaceBetween={50}
      slidesPerView={5}
      loop
      autoplay={{ delay: 3000 }}
    >
    <SwiperSlide>
    <img className="img-fluid" src={vSlider1} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img className="img-fluid" src={vSlider2} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img className="img-fluid" src={vSlider3} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img className="img-fluid" src={vSlider4} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img className="img-fluid" src={vSlider5} alt="" />
    </SwiperSlide>
    </Swiper>
      </div>
      </div>
      </div>
      </div>
      </div>
     
    </section>
  );
};

export default Video;
