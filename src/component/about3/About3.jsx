import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/image-02.png";
import "./about3.scss";
const About3 = () => {
  return (
    <section className="about3">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-6">
            <div className="txt-block pc-25 mb-40">
              <h3 className="txt-h3">
                Learn new personal & professional skills online
              </h3>
              <p className="txt-p">
                An enim nullam tempor sapien gravida donec porta and blandit
                ipsum enim justo integer velna vitae auctor integer congue magna
                and purus pretium risus ligula rutrum luctus ultrice
              </p>
              <ul>
                <li>Nullam rutrum eget nunc varius etiam mollis risus undo</li>
                <li>
                  Integer congue magna at pretium purus pretium ligula at rutrum
                  risus luctus dolor auctor ipsum blandit purus
                </li>
                <li>Risus at congue etiam aliquam sapien egestas posuere</li>
              </ul>
              <Link to="/">
                <button className="btn btn-md btn-rose">
                  Start Learning Now
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-5 col-lg-6">
            <div className="img-block pc-25 mb-40">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About3;
