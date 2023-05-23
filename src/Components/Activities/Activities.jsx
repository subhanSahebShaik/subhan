import React from "react";
import bg from "../../images/activities.png";
import "./Activities.css";

const Activities = () => {
  return (
    <div
      className="activityContainer"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div>Activities</div>
    </div>
  );
};

export default Activities;
