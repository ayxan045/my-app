import React from "react";
import { Link } from "react-router-dom";
import "./carousel6.scss";
import miniImg6 from "../../img/marketing.png";
const Carousel6 = () => {
  return (
    <div className="carousel6">
      <div className="col-lg-12">
        <div className="all-carousel">
          <div className="carousel-img">
            <Link to="/">
              <img className="img-fluid " src={miniImg6} alt="" />
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

export default Carousel6;
