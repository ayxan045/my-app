import React from "react";
import { Link } from "react-router-dom";
import imgcourse1 from "../../img/course-1-img.jpg";
import "./courses3Carousel.scss";

const Courses3Carousel = () => {
  return (
    <div className="courses3Carousel">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cbox-1">
              <Link to="">
                <img className="img-fluid" src={imgcourse1} alt="" />
                <div className="cbox-1-txt">
                  <p>
                    <span>Languages</span>
                    <span>English</span>
                  </p>
                  <h5>Beginner Level English - Foundations</h5>
                  <div className="course-rating">
                    <span>4.5 (26 Ratings)</span>
                  </div>
                  <span className="course-price">
                    <del className="old-price">$149.99</del>
                    $138.99
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

export default Courses3Carousel;
