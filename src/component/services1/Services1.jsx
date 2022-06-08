import React from "react";
import { Link } from "react-router-dom";
import "./services1.scss";

const Services = () => {
  return (
    <section className="services1">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="services-txt">
              <h3>Get Quality Education with eTreeks</h3>
              <p>
                Integer congue magna at pretium purus pretium ligula at rutrum
                luctus risus eros dolor auctor ipsum blandit luctus purus
                vehicula magna a tempor laoreet
              </p>
              <Link className="btn-start" to="/">
                <button className="btn">Start Learning Now!</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-2">
            <div className="row">
              <div className="col-lg-2">
                <div className="sbox">
                  <i className="fa-brands fa-grav fa-6x"></i>
                  <h5>Trending Courses</h5>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sbox">
                  <i className="fa-brands fa-grunt fa-6x"></i>
                  <h5>Certified Teachers</h5>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sbox">
                  <i className="fa-brands fa-studiovinari fa-6x"></i>
                  <h5>Graduation Certificate</h5>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sbox">
                  <i className="fa-solid fa-yin-yang fa-6x"></i>
                  <h5>Online Course Facilities</h5>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="sbox">
                  <i className="fa-solid fa-moon fa-6x"></i>
                  <h5>Free Books & Library</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
