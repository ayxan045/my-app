import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-info">
              <img className="footer-logo" src={logo} alt="" />
              <p>
                Aliquam orci a nullam tempor sapien gravida donec enim ipsum
                porta justo velna an auctor undo congue magna laoreet augue
                sapien
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-link">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">About eTreeks</Link>
                </li>
                <li>
                  <Link to="/">Courses Catalog</Link>
                </li>
                <li>
                  <Link to="/">Our Testimonials</Link>
                </li>
                <li>
                  <Link to="/">Premium Learning</Link>
                </li>
                <li>
                  <Link to="/">From the Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-categories">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/">About eTreeks</Link>
                </li>
                <li>
                  <Link to="/">Courses Catalog</Link>
                </li>
                <li>
                  <Link to="/">Our Testimonials</Link>
                </li>
                <li>
                  <Link to="/">Premium Learning</Link>
                </li>
                <li>
                  <Link to="/">From the Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-form">
              <h4>Stay in Touch</h4>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    autoComplete="off"
                    placeholder="Your Email Address"
                  />
                  <Link to="/">
                    <button>Subscripe</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="fbt d-flex">
            <p className="p">© Copyright eTreeks 2022</p>
            <Link to="/">
              <p className="p">508.746.9892</p>
            </Link>
            <Link to="/">
              <p>hello@domain.com</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
