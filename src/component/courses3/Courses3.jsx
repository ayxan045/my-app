import React from "react";
import { Link } from "react-router-dom";
import "./courses3.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Courses3Carousel from "../courses3Carousel/Courses3Carousel";
import Courses3Carousel2 from "../courses3Carousel/Courses3Carousel2";
import Courses3Carousel3 from "../courses3Carousel/Courses3Carousel3";
import Courses3Carousel4 from "../courses3Carousel/Courses3Carousel4";
const Courses3 = () => {
  return (
    <section className="courses3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="courses3-txt">
              <h3>Best Courses of All-Time</h3>
              <div className="courses3-text d-flex justify-content-between">
                <p>
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta
                </p>
                <Link className="courses3-link" to="/">
                  <button>View All Courses</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Autoplay]}
              navigation
              spaceBetween={-20}
              slidesPerView={4}
              loop
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide> 
                <Courses3Carousel />
              </SwiperSlide>
              <SwiperSlide>
                <Courses3Carousel2 />
              </SwiperSlide>
              <SwiperSlide>
                <Courses3Carousel3 />
              </SwiperSlide>
              <SwiperSlide>
                <Courses3Carousel4 />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses3;
