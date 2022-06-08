import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "./slider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <section className="slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="slide">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-7">
                  <div className="txt">
                    <h2 className="slide-text">
                      2,769 online courses from the best tutors
                    </h2>
                    <form className="hero-form">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="What do you want to learn?"
                          aria-label="Search"
                        />
                        <span className="input-group-btn">
                          <button type="submit" className="btn">
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-7">
                  <div className="txt">
                    <h2 className="slide2-text">
                      High quality courses from the leading experts
                    </h2>
                    <p className="p-lg">
                      Feugiat primis ligula gravida auctor egestas augue viverra
                      mauri tortor in iaculis placerat an eugiat mauris ipsum
                      undo viverra tortor gravida purus lorem in tortor a viverr
                    </p>
                    <Link to="/">
                      <button className="btn btn-md btn-rose">
                        View Popular Courses
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
