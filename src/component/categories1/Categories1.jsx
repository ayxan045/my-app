import React from "react";
import { Link } from "react-router-dom";
import "./categories1.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Carousel1 from "../carousel/Carousel1";
import Carousel2 from "../carousel/Carousel2";
import Carousel3 from "../carousel/Carousel3";
import Carousel4 from "../carousel/Carousel4";
import Carousel5 from "../carousel/Carousel5";
import Carousel6 from "../carousel/Carousel6";
import Carousel7 from "../carousel/Carousel7";
const Categories1 = () => {
  return (
    <section className="categories1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="categories1-txt">
              <h3>Top Trending Categories</h3>
              <div className="txt-text d-flex justify-content-between">
                <p>
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta
                </p>
                <Link className="btn-link" to="/">
                  <button>View All Categorie</button>
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
              spaceBetween={15}
              slidesPerView={5}
              loop
              autoplay={{ delay: 3000 }}
            >
              <SwiperSlide>
                <Carousel1 />
              </SwiperSlide>
              <SwiperSlide>
                <Carousel2 />
              </SwiperSlide>
              <SwiperSlide>
                <Carousel3 />
              </SwiperSlide>
              <SwiperSlide>
                <Carousel4 />
              </SwiperSlide>
              <SwiperSlide>
                <Carousel5 />
              </SwiperSlide>
              <SwiperSlide>
                <Carousel6 />
              </SwiperSlide>
              <SwiperSlide>
                <Carousel7 />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories1;
