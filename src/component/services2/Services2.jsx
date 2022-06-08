import React from "react";
import "./services2.scss";
import education from "../../img/education.png";
import presentation from "../../img/presentation.png";
import certificate from "../../img/certificate.png";
import elearning from "../../img/elearning-1.png";
import reading from "../../img/reading.png";
import bookshelf from "../../img/bookshelf.png";

const Services2 = () => {
  return (
    <section className="services2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="services2-txt">
              <h3>Best Learning Opportunities</h3>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="sbox">
              <img src={education} alt="" />
              <div className="sbox-txt">
                <h5>Trending Courses</h5>
                <p></p>Augue luctus egestas luctus neque purus an ipsum neque
                dolor primis libero tempus at blandit massa
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="sbox">
              <img src={presentation} alt="" />
              <div className="sbox-txt">
                <h5>Trending Courses</h5>
                <p></p>Augue luctus egestas luctus neque purus an ipsum neque
                dolor primis libero tempus at blandit massa
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="sbox">
              <img src={certificate} alt="" />
              <div className="sbox-txt">
                <h5>Trending Courses</h5>
                <p></p>Augue luctus egestas luctus neque purus an ipsum neque
                dolor primis libero tempus at blandit massa
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="sbox">
              <img src={elearning} alt="" />
              <div className="sbox-txt">
                <h5>Trending Courses</h5>
                <p></p>Augue luctus egestas luctus neque purus an ipsum neque
                dolor primis libero tempus at blandit massa
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="sbox">
              <img src={reading} alt="" />
              <div className="sbox-txt">
                <h5>Trending Courses</h5>
                <p></p>Augue luctus egestas luctus neque purus an ipsum neque
                dolor primis libero tempus at blandit massa
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="sbox">
              <img src={bookshelf} alt="" />
              <div className="sbox-txt">
                <h5>Trending Courses</h5>
                <p></p>Augue luctus egestas luctus neque purus an ipsum neque
                dolor primis libero tempus at blandit massa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
