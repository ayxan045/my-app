import React from "react";
import { Link } from "react-router-dom";
import banner from "../../img/bunner-04.png";
import diziyner from "../../img/image-05.png";
import "./banner.scss";
const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="banner-box d-flex">
              <img src={banner} alt="" />
              <div className="banner-txt">
                <h4>Become a Teacher</h4>
                <p>
                  Feugiat primis ligula a risus auctor egestas an augue mauri
                  and viverra tortor iaculis an eugiat viverra
                </p>
                <Link className="btn-find" to="/">
                  <button>Find Out More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-box d-flex">
              <img src={diziyner} alt="" />
              <div className="banner-txt">
                <h4>Become a Teacher</h4>
                <p>
                  Feugiat primis ligula a risus auctor egestas an augue mauri
                  and viverra tortor iaculis an eugiat viverra
                </p>
                <Link className="btn-find" to="/">
                  <button>Find Out More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
