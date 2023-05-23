import React from "react";
import "./Body.css";
import { Route, Routes } from "react-router";
import Profile from "../Profile/Profile";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Certificates from "../Certificates/Certificates";
import Activities from "../Activities/Activities";
import Intrests from "../Intrests/Intrests";
import Contact from "../Contact/Contact";
import SideBar from "../SideBar/SideBar";
import bg from "../../images/bg.png";

const Body = ({ color, setColor }) => {
  return (
    <div className="bodyContainer">
      <div
        className="sidebar"
        style={{
          backgroundImage: `linear-gradient(rgba(${color.r},${color.g},${color.b},0.5), rgba(${color.r},${color.g},${color.b},0.5)), url(${bg})`,
        }}
      >
        <SideBar color={color} setColor={setColor} />
      </div>
      <div className="contentArea">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Intrests" element={<Intrests />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default Body;
