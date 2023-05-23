import React from "react";
import "./Header.css";
import bg from "../../images/bg.png";

const Header = ({ color }) => {
  return (
    <div
      className="headerContainer"
      style={{
        backgroundImage: `linear-gradient(rgba(${color.r},${color.g},${color.b},0.5), rgba(${color.r},${color.g},${color.b},0.5)), url(${bg})`,
      }}
    >
      <div>
        <h2>Subhan Saheb Shaik</h2>
      </div>
    </div>
  );
};

export default Header;
