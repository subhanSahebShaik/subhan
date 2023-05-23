import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./SkillBar.css";

const SkillBar = ({ skill }) => {
  return (
    <div className="skillContainer">
      <div className="skill">
        <CircularProgressbar
          value={skill.percentage}
          text={`${skill.name}`}
          strokeWidth={5}
          styles={{
            path: { stroke: "green" },
            text: {
              fill: "#606",
              fontSize: "16px",
              textShadow: "1px 2px 10px aqua",
              fontWeight: "bold",
            },
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
