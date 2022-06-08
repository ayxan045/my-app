import React from "react";
import { Link } from "react-router-dom";
import "./carousel7.scss";
import miniImg7 from "../../img/translation.png";
const Carousel7 = () => {
  return (
    <div className="carousel7">
      <div className="col-lg-12">
        <div className="all-carousel">
          <div className="carousel-img">
            <Link to="/">
              <img className="img-fluid " src={miniImg7} alt="" />
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

export default Carousel7;
