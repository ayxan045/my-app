import React from "react";
import { Link } from "react-router-dom";
import imgcourse2 from "../../img/course-2-img.jpg";
import "./courses3Carousel2.scss";
const Courses3Carousel2 = () => {
  return (
    <div className="courses3Carousel2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cbox-1">
              <Link to="">
                <img className="img-fluid" src={imgcourse2} alt="" />
                <div className="cbox-1-txt">
                  <p>
                    <span>Languages</span>
                    <span>English</span>
                  </p>
                  <h5>Diploma in Basic English Grammar - Revised 2019</h5>
                  <div className="course-rating">
                    <span>5 (118 Ratings)</span>
                  </div>
                  <span className="course-price">
                    <del className="old-price">$174.99</del>
                    $59.99
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

export default Courses3Carousel2;
