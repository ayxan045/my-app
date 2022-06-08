import React, { useState } from "react";
import "./header.scss";
import logo from "../../img/logo.png";
import uk from "../../img/uk.png";
import { ArrowDropDown } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  const [bckColor, setBckColor] = useState("");
  window.addEventListener("scroll", function () {
    if (this.scrollY > 50) {
      setBckColor("active-header");
    } else {
      setBckColor("");
    }
  });
  return (
    <header className={`header ${bckColor}`}>
      <div className="contai">
        <div className="contain">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" width="170" height="40" />
              </Link>
            </div>
            <div className="navMenu">
              <ul className="d-flex ">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Pages</Link>
                  <ArrowDropDown />
                </li>
                <li>
                  <Link to="/">Categories</Link>
                  <ArrowDropDown />
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">Development</Link>
                    </li>
                    <li>
                      <Link to="/">Finance & Accounting</Link>
                    </li>
                    <li>
                      <Link to="/">IT & Software</Link>
                    </li>
                    <li>
                      <Link to="/">Office Productivity</Link>
                    </li>
                    <li>
                      <Link to="/">Photography</Link>
                    </li>
                    <li>
                      <Link to="/">Math & Science</Link>
                    </li>
                    <li>
                      <Link to="/">Languages</Link>
                    </li>
                    <li>
                      <Link to="/">Marketing</Link>
                    </li>
                    <li>
                      <Link to="/">Health & Fitness</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">Mega Menu</Link>
                  <ArrowDropDown />
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">
                    <img
                      src={uk}
                      alt=""
                      width="25"
                      height="25"
                      className="me-2"
                    />
                    EN
                  </Link>
                  <ArrowDropDown />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
