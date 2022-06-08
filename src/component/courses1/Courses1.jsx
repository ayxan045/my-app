import React from "react";
import { Link } from "react-router-dom";
import "./courses1.scss";
import imgcourse1 from "../../img/course-1-img.jpg";
import imgcourse2 from "../../img/course-2-img.jpg";
import imgcourse3 from "../../img/course-3-img.jpg";
import imgcourse4 from "../../img/course-4-img.jpg";
import imgcourse5 from "../../img/course-5-img.jpg";
import imgcourse6 from "../../img/course-9-img.jpg";
import imgcourse7 from "../../img/course-8-img.jpg";
import imgcourse8 from "../../img/course-10-img.jpg";

const Courses1 = () => {
  return (
    <section className="courses1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="courses1-txt1">
              <h3 className="txt-h3">Most Popular Courses</h3>
              <div className="courses1-txt2 d-flex justify-content-between">
                <p className="txt-p">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta
                </p>
                <Link to="/" className="button1">
                  <button>View All Courses</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3">
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
          <div className="col-md-6 col-lg-4 col-xl-3">
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
          <div className="col-md-6 col-lg-4 col-xl-3">
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
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link to="">
                <img className="img-fluid" src={imgcourse4} alt="" />
                <div className="cbox-1-txt">
                  <p>
                    <span>SEO</span>
                    <span>Marketing</span>
                  </p>
                  <h5>Google AdWords for Beginners 2020</h5>
                  <div className="course-rating">
                    <span>5 (281 Ratings)</span>
                  </div>
                  <span className="course-price">Free Course</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link to="">
                <img className="img-fluid" src={imgcourse5} alt="" />
                <div className="cbox-1-txt">
                  <p>
                    <span>Design</span>
                    <span>WordPress</span>
                  </p>
                  <h5>Wordpress for Beginners - Master Wordpress Quickly</h5>
                  <div className="course-rating">
                    <span>4.15 (58 Ratings)</span>
                  </div>
                  <span className="course-price">
                    <del className="old-price">$194.99</del>
                    $62.99
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
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
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link to="">
                <img className="img-fluid" src={imgcourse7} alt="" />
                <div className="cbox-1-txt">
                  <p>
                    <span>Internet</span>
                    <span>Marketing</span>
                  </p>
                  <h5>
                    Instagram Marketing 2020: A Step-By-Step to 10,000 Followers
                  </h5>
                  <div className="course-rating">
                    <span>5 (374 Ratings)</span>
                  </div>
                  <span className="course-price">
                    <del className="old-price">$169.99</del>
                    $33.99
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="cbox-1">
              <Link to="">
                <img className="img-fluid" src={imgcourse8} alt="" />
                <div className="cbox-1-txt">
                  <p>
                    <span>Science</span>
                    <span>English</span>
                  </p>
                  <h5>Diesel Engine Cycles, Maintenance, & Control</h5>
                  <div className="course-rating">
                    <span>5 (374 Ratings)</span>
                  </div>
                  <span className="course-price">
                    <del className="old-price">$154.99</del>
                    $41.99
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses1;
