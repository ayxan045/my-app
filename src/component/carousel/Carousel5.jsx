import React from "react";
import { Link } from "react-router-dom";
import "./carousel5.scss";
import miniImg5 from "../../img/development.png";
const Carousel5 = () => {
  return (
    <div className="carousel5">
      <div className="col-lg-12">
        <div className="all-carousel">
          <div className="carousel-img">
            <Link to="/">
              <img className="img-fluid " src={miniImg5} alt="" />
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

export default Carousel5;
