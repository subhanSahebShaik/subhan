import React from "react";
import bg from "../../images/skills-rocket.png";
import "./Skills.css";
import SkillBar from "../SkillBar/SkillBar";

const Skills = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
      className="skillsContainer"
    >
      <SkillBar skill={{ name: "Python", percentage: "60" }} />
      <SkillBar skill={{ name: "Java", percentage: "50" }} />
      <SkillBar skill={{ name: "C++", percentage: "30" }} />
      <SkillBar skill={{ name: "C", percentage: "30" }} />
      <SkillBar skill={{ name: "SQL", percentage: "40" }} />
      <SkillBar skill={{ name: "Django", percentage: "50" }} />
      <SkillBar skill={{ name: "React JS", percentage: "30" }} />
      <SkillBar skill={{ name: "R", percentage: "25" }} />
      <SkillBar skill={{ name: "HTML", percentage: "50" }} />
      <SkillBar skill={{ name: "CSS", percentage: "50" }} />
      <SkillBar skill={{ name: "JS", percentage: "20" }} />
    </div>
  );
};

export default Skills;
