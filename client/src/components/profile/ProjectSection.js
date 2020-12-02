import React, { useRef, useEffect, useState } from "react";
import "../../css/Project.css";
import "../../css/Blogs.css";
import TechStackSection from "../TechStackSection";
import {
  jobProfileCardIntro,
  animateProjectCard1Intro,
  animateProjectIntro,
} from "../Animation";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllProjectAction } from "../../redux/actions/projectAction";
import { projectFilterCategory } from "../../redux/defaultStore";
import { baseUrl } from "../../api/apis";
const ProjectSection = ({ getAllProjectAction, projects }) => {
  /**job profile */
  let card_sec = useRef(null);
  let card_stack = useRef(null);
  let card_ml = useRef(null);

  /**project card */
  let project_card_1 = useRef(null);
  let project_section = useRef(null);
  let project_card_2 = useRef(null);
  let project_card_3 = useRef(null);
  let project_section_intro = useRef(null);
  /**tech stack refs */
  let tech_satck_ref = useRef(null);

  useEffect(() => {
    jobProfileCardIntro(card_sec, card_stack, card_ml);
    animateProjectCard1Intro(
      project_section,
      project_card_1,
      project_card_2,
      project_card_3
    );
    animateProjectIntro(project_section, project_section_intro);
  });
  useEffect(() => {
    console.log("call projects action");
    getAllProjectAction();
  }, []);
  return (
    <>
      <div
        className="project"
        ref={(ele) => {
          project_section = ele;
        }}
      >
        <div className="project__job__profile">
          <div
            className="project__job__profile__card color__sec"
            ref={(ele) => {
              card_sec = ele;
            }}
          >
            <i
              className="fa fa-shield job__profile__icons"
              aria-hidden="true"
            ></i>
            <h3>Security Consultant</h3>
          </div>
          <div
            className="project__job__profile__card color__fs"
            ref={(ele) => {
              card_stack = ele;
            }}
          >
            <i
              className="fa fa-desktop job__profile__icons"
              aria-hidden="true"
            ></i>
            <h3>Full Stack Developer</h3>
          </div>
          <div
            className="project__job__profile__card color__ml"
            ref={(ele) => {
              card_ml = ele;
            }}
          >
            <i
              className="fa fa-line-chart job__profile__icons"
              aria-hidden="true"
            ></i>
            <h3>Machine Learning Enthuiast</h3>
          </div>
        </div>
      </div>

      {/**top 3 projects display */}

      <div className="project__section">
        <div className="projects__intro_p1">
          <div
            className="project__intro"
            ref={(ele) => {
              project_section_intro = ele;
            }}
          >
            <h3>- AllProjects</h3>
            <p className="project__intro__desc">All my builds are live here</p>
            <Link to="allProjects" className="project__intro__desc color">
              Explore More
            </Link>
          </div>

          {projects !== undefined && (
            <div
              className="project1__card"
              ref={(ele) => {
                project_card_1 = ele;
              }}
            >
              <p className="project__card__name">{projects[0].name}</p>
              <div>
                {projects[0].image && (
                  <img
                    src={`${baseUrl}/api/v1/project/picture?filename=${projects[0].image.filename}`}
                    alt="demon"
                    className="project__image"
                  />
                )}
              </div>
              <code>- Built Tools</code>
              <div className="project__card__techstack">
                <div className="project__tech">
                  {projects[0].newTechArray &&
                    projects[0].newTechArray.map((tech, index) => (
                      <p key={index}>
                        <img
                          src={process.env.PUBLIC_URL + tech.img}
                          className="icon_img"
                          alt={tech.name}
                          title={tech.name}
                        />
                      </p>
                    ))}
                </div>

                <div className="project__golive">
                  <p>
                    <a
                      href={projects[0].code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/icons8-github-144.png"}
                        className="icon_img"
                        alt="github"
                        title="SourceCode"
                      />
                    </a>
                  </p>
                  <p>
                    <a
                      href={projects[0].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={process.env.PUBLIC_URL + "/shuttle.png"}
                        className="icon_img_shuttle"
                        alt="live"
                        title="Live"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/**project line 2 */}
      <div
        className="project__section2"
        ref={(ele) => {
          tech_satck_ref = ele;
        }}
      >
        <div
          className="project1__card project2__card__position"
          ref={(ele) => {
            project_card_2 = ele;
          }}
        >
          <p className="project__card__name">KanbanBoard</p>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/logo512.png"}
              alt="img"
              className="project__image"
            />
          </div>
          <code>- Built Tools</code>
          <div className="project__card__techstack">
            <div className="project__tech">
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"}
                  className="icon_img"
                  alt="NodeJs"
                  title="NodeJs"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-react-100.png"}
                  className="icon_img"
                  alt="ReactJs"
                  title="ReactJs"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-mongodb-96.png"}
                  className="icon_img"
                  alt="MongoDB"
                  title="MongoDB"
                />
              </p>
            </div>

            <div className="project__golive">
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-github-144.png"}
                  className="icon_img"
                  alt="github"
                  title="SourceCode"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/shuttle.png"}
                  className="icon_img_shuttle"
                  alt="live"
                  title="Live"
                />
              </p>
            </div>
          </div>
        </div>
        {/**peoject 3rd section */}
        <div
          className="project1__card project3__card__position"
          ref={(ele) => {
            project_card_3 = ele;
          }}
        >
          <p className="project__card__name">KanbanBoard</p>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/logo512.png"}
              alt=""
              className="project__image"
            />
          </div>
          <code>- Built Tools</code>
          <div className="project__card__techstack">
            <div className="project__tech">
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-node-js-96.png"}
                  className="icon_img"
                  alt="NodeJs"
                  title="NodeJs"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-react-100.png"}
                  className="icon_img"
                  alt="ReactJs"
                  title="ReactJs"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-mongodb-96.png"}
                  className="icon_img"
                  alt="MongoDB"
                  title="MongoDB"
                />
              </p>
            </div>

            <div className="project__golive">
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/icons8-github-144.png"}
                  className="icon_img"
                  alt="github"
                  title="SourceCode"
                />
              </p>
              <p>
                <img
                  src={process.env.PUBLIC_URL + "/shuttle.png"}
                  className="icon_img_shuttle"
                  alt="live"
                  title="Live"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <TechStackSection scrollTrigger="tech_satck_ref" />
    </>
  );
};
const mapStateToProps = ({ projects }) => {
  console.log("State projects::", projects);

  const topProjectKeyWords = ["twitter clone", "kanbanboard", "itracker"];
  // update state
  let _projects = [];
  projects.map((project) => {
    let techArray = project.techstack;
    let newTechArray = [];
    projectFilterCategory.map((icon) =>
      techArray.map((tech) => {
        if (tech.toLowerCase() === icon.name.toLowerCase()) {
          newTechArray.push({ name: tech, img: icon.img });
        }
        return (project = { ...project, newTechArray, showDescription: true });
      })
    );
    return _projects.push(project);
  });
  console.log("updated project:", _projects);
  // filter top 3 projects
  const topProjects = [];
  _projects.filter((project) => {
    topProjectKeyWords.map((key) => {
      if (project.name.toLowerCase().includes(key)) {
        topProjects.push(project);
      }
    });
  });
  console.log("top 3 projects::", topProjects);
  return { projects: topProjects.length > 0 ? topProjects : _projects };
};
const mapActionToProps = {
  getAllProjectAction,
};
export default connect(mapStateToProps, mapActionToProps)(ProjectSection);
