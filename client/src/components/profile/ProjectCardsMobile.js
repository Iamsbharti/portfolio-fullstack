import React, { useRef, useEffect, useState } from "react";
import "../../css/Project.css";
import "../../css/Blogs.css";
import {
  jobProfileCardIntro,
  animateProjectCard1Intro,
  animateProjectIntro,
  animateProjectIntroMobile,
} from "../Animation";
import { baseUrl } from "../../api/apis";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
const ProjectCardsMobile = ({ projects }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [stateProjects, setStateProjects] = useState(projects);
  const chevronWidth = 70;
  /**project card */
  let project_card_1 = useRef(null);
  let project_section = useRef(null);
  let project_card_2 = useRef(null);
  let project_card_3 = useRef(null);
  let project_section_intro = useRef(null);
  let project_section_intro__mobile = useRef(null);

  useEffect(() => {
    /**animateProjectCard1Intro(
      project_section,
      project_card_1,
      project_card_2,
      project_card_3
    );
    animateProjectIntro(project_section, project_section_intro);
    animateProjectIntroMobile(project_section, project_section_intro__mobile);
    **/
  });
  useEffect(() => {
    console.log("Effect projects");
    setStateProjects(projects);
    // eslint-disable-next-line
  }, [projects]);
  /**  useEffect(() => {
    console.log("Effect stateprojects");
    setStateProjects(stateProjects);
    // eslint-disable-next-line
  }, [stateProjects]);
**/
  const handleExpandIcon = (projectId) => {
    console.log("handle expand", projectId);
    // change global state
    // eslint-disable-next-line
    setStateProjects(
      stateProjects.map((project) =>
        project.projectId === projectId
          ? { ...project, showDescription: !project.showDescription }
          : project
      )
    );
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
    root1: {
      display: "flex",
      margin: "2px 0px 0px 0px",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.1),
      },
    },
  }));
  const classes = useStyles();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        {stateProjects.map((project, index) => (
          <div className="project__card" key={index}>
            <p className="project__card__name">{project.name}</p>
            <div className="project__image">
              {project.image && (
                <img
                  src={`${baseUrl}/api/v1/project/picture?filename=${project.image.filename}`}
                  alt="demon"
                  className="project__image"
                />
              )}
            </div>
            <code>- Built Tools</code>
            <div className="project__card__techstack">
              <div className="project__tech">
                {project.newTechArray &&
                  project.newTechArray.map((tech, index) =>
                    index < 3 ? (
                      <p key={index}>
                        <img
                          src={process.env.PUBLIC_URL + tech.img}
                          className="icon_img"
                          alt={tech.name}
                          title={tech.name}
                        />
                      </p>
                    ) : (
                      ""
                    )
                  )}
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
                <p
                  className="expand__icon"
                  hidden={!project.showDescription}
                  title="See More!!"
                >
                  <ExpandMoreOutlinedIcon
                    fontSize="large"
                    onClick={() => handleExpandIcon(project.projectId)}
                  />
                </p>
                <p
                  className="collapse__icon"
                  hidden={project.showDescription}
                  title="Hide"
                >
                  <ExpandLessOutlinedIcon
                    fontSize="large"
                    onClick={() => handleExpandIcon(project.projectId)}
                  />
                </p>
              </div>
            </div>
            <div
              className="project__description"
              hidden={project.showDescription}
            >
              <p className="description">{project.description}</p>
              <div className={classes.root1}>
                {project.type.map((tp, index) => (
                  <Chip color="primary" label={tp} key={index} size="small" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCardsMobile;
