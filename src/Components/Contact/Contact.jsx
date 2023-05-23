import React from "react";
import bg from "../../images/contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      className="contactContainer"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="thankYou">
        <p>Thank You</p>
      </div>
      <div className="socialIcons">
        <a href="tel:+919848693918">
          <i class="fa-solid fa-phone" style={{ color: "limegreen" }}></i>
        </a>
        <a href="mailto:shaiksubhansaheb609@gmai.com">
          <i class="fa-solid fa-envelope" style={{ color: "#000" }}></i>
        </a>
        <a href="https://www.linkedin.com/in/subhan-saheb-shaik-185721240/">
          <i
            class="fa-brands fa-linkedin"
            style={{ color: "rgb(10,102,194)" }}
          ></i>
        </a>
        <a href="https://github.com/subhanSahebShaik">
          <i class="fa-brands fa-github" style={{ color: "#000000" }}></i>
        </a>
        <a href="https://www.hackerrank.com/shaiksubhansahe2">
          <i class="fa-brands fa-hackerrank" style={{ color: "green" }}></i>
        </a>
      </div>
      <div className="resume">
        <a href="https://www.google.com" target="__blank">
          Resume&nbsp;
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://www.google.com" target="__blank">
          Animated Vesume&nbsp;
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://www.google.com" target="__blank">
          Vesume&nbsp;
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
