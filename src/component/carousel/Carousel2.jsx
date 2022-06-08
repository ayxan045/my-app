import React from "react";
import "./carousel2.scss";
import miniImg2 from "../../img/gear.png";
import { Link } from "react-router-dom";
const Carousel2 = () => {
  return (
    <div className="carousel2">
      <div className="col-lg-12">
        <div className="all-carousel">
          <div className="carousel-img">
            <Link to="/">
              <img className="img-fluid " src={miniImg2} alt="" />
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

export default Carousel2;
