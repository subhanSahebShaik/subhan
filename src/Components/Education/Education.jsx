import React from "react";
import "./Education.css";
import bg from "../../images/learning-buddie.png";
import location from "../../images/location.png";

const Education = () => {
  return (
    <div
      className="educationContainer"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="degree">
        <img src={location} alt="" />
        <p>
          I'm pursuing <span> B.Tech</span> in the department of&nbsp;
          <span>Computer Science and Engineering</span>&nbsp;at&nbsp;
          <span>Sri Vasavi Engineering College</span>, Tadepalligudem
        </p>
      </div>
      <div className="inter">
        <img src={location} alt="" />
        <p>
          Completed <span> +2</span> qualification in the stream of&nbsp;
          <span> MPC</span> at <span> Sri Chaitanya Boys Jr. College</span>,
          Vijayawada
        </p>
      </div>
      <div className="ssc">
        <img src={location} alt="" />
        <p>
          and <span>Secondary Schooling</span> at&nbsp;
          <span>MSRZP High school</span>, Ananthapalli.
        </p>
      </div>
    </div>
  );
};

export default Education;
