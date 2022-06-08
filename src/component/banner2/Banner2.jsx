import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../img/banner-3-img.jpg";
import "./banner2.scss";
const Banner2 = () => {
  return (
    <section className="banner2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8  p-0">
            <div className="banner-img">
              <img className="img-fluid" src={bannerImg} alt="" />
            </div>
          </div>
          <div className="col-lg-4  p-0">
            <div className="banner-txt">
              <h4>
                Learn something new every day with<span>eTreeks</span>
              </h4>
              <Link className="banner-link" to="/">
                <button>Find Out More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
