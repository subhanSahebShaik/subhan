import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import bg from "../../images/bg.png";

const SideBar = ({ color, setColor }) => {
  return (
    <div
      className="sideBar"
      style={{
        backgroundImage: `linear-gradient(rgba(${color.r},${color.g},${color.b},0.5), rgba(${color.r},${color.g},${color.b},0.5)), url(${bg})`,
      }}
    >
      <div className="item">
        <NavLink
          to="/"
          activeclassname="active"
          className="navLink"
          onClick={() => {
            setColor({ r: 0, g: 0, b: 0, a: 0.75 });
          }}
        >
          <i className="fa-solid fa-user"></i>
          <span>Profile</span>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          to="/Skills"
          className="navLink"
          onClick={() => {
            setColor({ r: 77, g: 166, b: 255 });
          }}
        >
          <i className="fa-solid fa-gears"></i>
          <span>Skills</span>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          to="/Education"
          className="navLink"
          onClick={() => {
            setColor({ r: 109, g: 128, b: 195 });
          }}
        >
          <i className="fa-solid fa-book-open"></i>
          <span> Education</span>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          to="/Projects"
          className="navLink"
          onClick={() => {
            setColor({ r: 40, g: 53, b: 214 });
          }}
        >
          <i className="fa-solid fa-code"></i>
          <span>Projects</span>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          to="/Certificates"
          className="navLink"
          onClick={() => {
            setColor({ r: 255, g: 193, b: 77 });
          }}
        >
          <i className="fa-solid fa-award"></i>
          <span>Certificates</span>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          to="/Activities"
          className="navLink"
          onClick={() => {
            setColor({ r: 86, g: 220, b: 142 });
          }}
        >
          <i className="fa-solid fa-person-running"></i>
          <span>Activities</span>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          to="/Intrests"
          className="navLink"
          onClick={() => {
            setColor({ r: 116, g: 147, b: 216 });
          }}
        >
          <i className="fa-solid fa-heart"></i>
          <span>Intrests</span>
        </NavLink>
      </div>
      <div className="item">
        <NavLink
          to="/Contact"
          className="navLink"
          onClick={() => {
            setColor({ r: 255, g: 160, b: 77 });
          }}
        >
          <i className="fa-solid fa-phone"></i>
          <span>Contact</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
