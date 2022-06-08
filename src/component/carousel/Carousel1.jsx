import React from "react";
import { Link } from "react-router-dom";
import miniImg1 from "../../img/chip.png";
import "./carousel1.scss";
const Carousel1 = () => {
  return (
    <div className="carousel1">
      <div className="col-lg-12">
        <div className="all-carousel">
          <div className="carousel-img">
            <Link to="/">
              <img className="img-fluid" src={miniImg1} alt="" />
            </Link>
          </div>
          <div className="carousel-txt">
            <Link to="/">
              <h5>Engineering</h5>
              <p>68 Courses</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
