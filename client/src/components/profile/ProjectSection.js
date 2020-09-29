import React from "react";
import "../../css/Project.css";
const ProjectSection = () => {
  return (
    <div className="project">
      <div className="project__job__profile">
        <div className="project__job__profile__card color__sec">
          <i
            className="fa fa-shield job__profile__icons"
            aria-hidden="true"
          ></i>
          <h3>Security Consultant</h3>
        </div>
        <div className="project__job__profile__card">
          <i
            className="fa fa-desktop job__profile__icons"
            aria-hidden="true"
          ></i>
          <h3>Full Stack Developer</h3>
        </div>
        <div className="project__job__profile__card color__ml">
          <i
            className="fa fa-line-chart job__profile__icons"
            aria-hidden="true"
          ></i>
          <h3>Machine Learning Enthuiast</h3>
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
