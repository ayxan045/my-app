import React from "react";
import { Link } from "react-router-dom";
import imgcourse6 from "../../img/course-9-img.jpg";
import "./courses3Carousel4.scss";
const Courses3Carousel4 = () => {
  return (
    <div className="courses3Carousel4">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cbox-1">
              <Link to="">
                <img className="img-fluid" src={imgcourse6} alt="" />
                <div className="cbox-1-txt">
                  <p>
                    <span>Science</span>
                    <span>Diploma</span>
                  </p>
                  <h5>Industrial Engineering - Control Valve Basics</h5>
                  <div className="course-rating">
                    <span>5 (31 Ratings)</span>
                  </div>
                  <span className="course-price">
                    <del className="old-price">$149.99</del>
                    $45.99
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses3Carousel4;
