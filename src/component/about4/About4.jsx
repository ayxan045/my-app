import React from "react";
import "./about4.scss";
import people from "../../img/image-03.jpg";
const About4 = () => {
  return (
    <section className="about4">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 offset-xl-1">
            <div className="a4-txt">
              <h5>Our goal is to make online education work for everyonev</h5>
              <p>
                Sagittis congue augue egestas volutpat egestas magna suscipit
                egestas magna ipsum vitae purus efficitur ipsum primis and
                cubilia laoreet augue egestas luctus donec diam. Curabitur ac
                dapibus libero mauris donec ociis and neque. Phasellus blandit
                tristique justo ut aliquam. Aliquam vitae molestie nunc sapien
                justo, aliquet non molestie augue tempor sapien
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="img-block">
              <img src={people} alt="" />
            </div>
          </div>
        </div>
        <div className="a4-boxes">
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
      </div>
    </section>
  );
};

export default About4;
