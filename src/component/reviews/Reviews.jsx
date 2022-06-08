import React from "react";
import "./reviews.scss";
import quote from "../../img/left-quote.png";
const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="review-box">
              <div className="quote-ico">
                <img src={quote} alt="" />
              </div>
              <p>
                An enim nullam tempor sapien gravida donec eTreeks - enim ipsum
                porta justo integer at odio velna and vitae auctor integer
                congue magna at pretium purus pretium ligula rutrum luctus risus
                ultrice luctus blandit congue magna. Sagittis congue augue
                egestas volutpat egestas magna consequat posuere nunc, eu
                porttitor neque
              </p>
              <div className="review-author">
                <h5>Jennifer S.</h5>
                <span>Online Student (Public Relations)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
