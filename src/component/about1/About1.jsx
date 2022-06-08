import React from "react";
import "./about1.scss";
const About1 = () => {
  return (
    <section className="about1">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="abox1 d-flex">
              <i className="fa-solid fa-book-open fa-3x"></i>
              <div className="about1-txt">
                <h5 className="txt-h5">2,769 online courses</h5>
                <p className="txt-p">Explore a variety of fresh topics</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="abox2 d-flex">
              <i className="fa-solid fa-people-group fa-3x"></i>
              <div className="about2-txt">
                <h5 className="txt-h5">Expert instruction</h5>
                <p className="txt-p">Find the right instructor for you</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="abox3 d-flex">
              <i className="fa-solid fa-hand-pointer fa-3x"></i>
              <div className="about3-txt">
                <h5 className="txt-h5">Lifetime access</h5>
                <p className="txt-p">Learn on your schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
