import React from "react";
import "./Profile.css";
import bg from "../../images/profile-bg.png";
import avatar from "../../images/Subhan Saheb Shaik.png";

const Profile = () => {
  return (
    <div
      className="profileContainer"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="intro">
        <span className="introGreetings">Hello, I'm,</span>
        <br />
        <span className="name">SUBHAN SAHEB SHAIK</span>
        <br />
        <span className="tagline">A Computer Science Student</span>
      </div>
      <div className="avatar">
        <img src={avatar} alt="SUBHAN SAHEB SHAIK" />
      </div>
    </div>
  );
};

export default Profile;
