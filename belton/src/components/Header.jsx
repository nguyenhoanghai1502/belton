import React from "react";
import { logo } from "../assets/img";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col col-xxl-2 col-xl-3 col-md-3 col-sm-3">
            <div className="header__left">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-xxl-8 col-xl-6 col-md-6 col-sm-6">
        <div className="header__main">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="col col-xxl-2 col-xl-3 col-md-3 col-sm-3">
        <div className="header__right">
          <i className="bx bxl-behance"></i>
          <i className="bx bxl-behance"></i>
          <i className="bx bxl-behance"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
