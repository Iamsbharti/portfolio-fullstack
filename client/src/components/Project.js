import React, { useState, useEffect } from "react";
import "../css/Project.css";
import { projectFilterCategory } from "../redux/defaultStore";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import { getAllProjectAction } from "../redux/actions/projectAction";

const Project = ({ projects, getAllProjectAction }) => {
  const [showCategory, setShowCategory] = useState("All");
  const [showDescription, setShowDesc] = useState(true);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  }));
  const classes = useStyles();
  const handleExpandIcon = () => {
    console.log("handle expand");
    setShowDesc(!showDescription);
  };
  useEffect(() => {
    console.log("call projects action");
    getAllProjectAction();
  }, []);
  return (
    <>
      <div className="project__page">
        <div className="project__page__filters">
          <div className={classes.root}>
            {projectFilterCategory.map((filter, index) => (
              <Chip
                color="secondary"
                label={filter.name}
                key={index}
                avatar={
                  <Avatar
                    alt="Natacha"
                    src={process.env.PUBLIC_URL + `/${filter.img}`}
                  />
                }
                clickable
                variant="outlined"
                disabled={filter.disabled}
              />
            ))}
          </div>
        </div>
        <div className="project__page__intro">
          Currently showing {showCategory} Projects
        </div>
        <div className="project__page__cards__section">
          {projects.map((project, index) => (
            <div className="project__card" key={index}>
              <p className="project__card__name">{project.name}</p>
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
                  {project.newTechArray.map((tech, index) => (
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
                      href={project.code}
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
                      href={project.demo}
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
                    hidden={!showDescription}
                    title="See More!!"
                  >
                    <ExpandMoreOutlinedIcon
                      fontSize="large"
                      onClick={handleExpandIcon}
                    />
                  </p>
                  <p
                    className="collapse__icon"
                    hidden={showDescription}
                    title="Hide"
                  >
                    <ExpandLessOutlinedIcon
                      fontSize="large"
                      onClick={handleExpandIcon}
                    />
                  </p>
                </div>
              </div>
              <div className="project__description" hidden={showDescription}>
                <p className="description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  const { projects } = state;
  // update state
  let _projects = [];
  projects.map((project) => {
    let techArray = project.techstack;
    let newTechArray = [];
    let techIconObject = {};
    projectFilterCategory.map((icon) => {
      techArray.map((tech) => {
        if (tech.toLowerCase() === icon.name.toLowerCase()) {
          newTechArray.push({ name: tech, img: icon.img });
        }
        techIconObject = { newTechArray };
        //Object.assign(project, techIconObject);
        project = { ...project, newTechArray };
      });
    });
    _projects.push(project);
  });

  console.log("updated project:", projects);

  return { projects: _projects };
};
const mapActionToProps = {
  getAllProjectAction,
};
export default connect(mapStateToProps, mapActionToProps)(Project);
