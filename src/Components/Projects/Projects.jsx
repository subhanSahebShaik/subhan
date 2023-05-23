import React from "react";
import bg from "../../images/project-kiddie.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div
      className="projectsContainer"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="project">
        <img src="" alt="icon" />
        <div className="projectDescription">
          <p className="title">Vasavi Voices</p>
          <p className="description">
            A college-level podcast website to connect alumni experiences and
            their valuable suggestions with future alumni.
          </p>
          <div className="urls">
            <a href="https://www.google.com" target="__blank">
              <i class="fa-solid fa-globe"></i>Visit repository
            </a>
            <a href="https://www.google.com" target="__blank">
              <i class="fa-solid fa-globe"></i>Visit Project
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <img src="" alt="icon" />
        <div className="projectDescription">
          <p className="title">
            Mobile Price Prediction Using Random Forest Algorithm
          </p>
          <p className="description">
            A web application developed with a Machine Learning model to suggest
            prices of Mobile Phones based on the features of mobile phone.
          </p>
          <div className="urls">
            <a href="https://www.google.com" target="__blank">
              <i class="fa-solid fa-globe"></i>Visit repository
            </a>
            <a href="https://www.google.com" target="__blank">
              <i class="fa-solid fa-globe"></i>Visit Project
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <img src="" alt="icon" />
        <div className="projectDescription">
          <p className="title">The Tianzhu</p>
          <p className="description">
            A web application with a user-friendly design that can give a quick
            summary of all Indian state cultures.
          </p>
          <div className="urls">
            <a href="https://www.google.com" target="__blank">
              <i class="fa-solid fa-globe"></i>Visit repository
            </a>
            <a href="https://www.google.com" target="__blank">
              <i class="fa-solid fa-globe"></i>Visit Project
            </a>
          </div>
        </div>
      </div>
      <div className="project">
        <img src="" alt="icon" />
        <div className="projectDescription">
          <p className="title">E – Plastic Management System</p>
          <p className="description">
            A web application that resembles an idea to reduce the wastage of
            plastic in society.
          </p>
          <div className="urls">
            <a href="https://www.google.com" target="__blank">
              <i class="fa-solid fa-globe"></i>Visit repository
            </a>
            <a href="https://www.google.com" target="__blank">
              <i class="fa-solid fa-globe"></i>Visit Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
