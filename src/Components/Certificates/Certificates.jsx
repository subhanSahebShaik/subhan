import React from "react";
import "./Certificates.css";
import bg from "../../images/achievement-flag.png";

const Certificates = () => {
  return (
    <div
      className="certificatesContainer"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div>Certificates</div>
    </div>
  );
};

export default Certificates;
