import React from "react";
import { Link } from "react-router-dom";
import "./news.scss";
const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="news-txt">
              <h3>Our Stories & Latest News</h3>
              <div className="d-flex justify-content-between">
                <p>
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta
                </p>
                <Link to="/">
                  <button>Read More Stories</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-3">
            <div className="month line">
              <p>March 11, 2020</p>
              <Link className="a" to="/">
                <h5>Integer congue magna at pretium purus pretium</h5>
              </Link>
              <p>
                An enim nullam tempor sapien gravida donec enim blandit ipsum
                porta justo integer odio velna vitae auctor integer
              </p>
              <span>By Joel Peterson</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="month line">
              <p>March 11, 2020</p>
              <Link className="a" to="/">
                <h5>Integer congue magna at pretium purus pretium</h5>
              </Link>
              <p>
                An enim nullam tempor sapien gravida donec enim blandit ipsum
                porta justo integer odio velna vitae auctor integer
              </p>
              <span>By Joel Peterson</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="month line">
              <p>March 11, 2020</p>
              <Link className="a" to="/">
                <h5>Integer congue magna at pretium purus pretium</h5>
              </Link>
              <p>
                An enim nullam tempor sapien gravida donec enim blandit ipsum
                porta justo integer odio velna vitae auctor integer
              </p>
              <span>By Joel Peterson</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="month">
              <p>March 11, 2020</p>
              <Link className="a" to="/">
                <h5>Integer congue magna at pretium purus pretium</h5>
              </Link>
              <p>
                An enim nullam tempor sapien gravida donec enim blandit ipsum
                porta justo integer odio velna vitae auctor integer
              </p>
              <span>By Joel Peterson</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
