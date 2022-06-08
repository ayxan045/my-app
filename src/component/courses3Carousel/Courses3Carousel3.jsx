import React from "react";
import { Link } from "react-router-dom";
import imgcourse3 from "../../img/course-3-img.jpg";
import "./courses3carousel3.scss";

const Courses3Carousel3 = () => {
  return (
    <div className="courses3Carousel3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cbox-1">
              <Link to="">
                <img className="img-fluid" src={imgcourse3} alt="" />
                <div className="cbox-1-txt">
                  <p>
                    <span>IT Managment</span>
                  </p>
                  <h5>Diploma in Information Technology Management</h5>
                  <div className="course-rating">
                    <span>4.5 (72 Ratings)</span>
                  </div>
                  <span className="course-price">
                    <del className="old-price">$119.99</del>
                    $34.99
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

export default Courses3Carousel3;
