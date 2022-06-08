import React from "react";
import { Link } from "react-router-dom";
import "./carousel4.scss";
import miniImg4 from "../../img/science.png";
const Carousel4 = () => {
  return (
    <div className="carousel4">
      <div className="col-lg-12">
        <div className="all-carousel">
          <div className="carousel-img">
            <Link to="/">
              <img className="img-fluid" src={miniImg4} alt="" />
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

export default Carousel4;
