import React from "react";
import bg from "../../images/intrests.png";
import "./Intrests.css";

const Intrests = () => {
  return (
    <div
      className="intrestsContainer"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div>Intrests</div>
    </div>
  );
};

export default Intrests;
