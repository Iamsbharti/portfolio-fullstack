import React, { useState } from "react";
import "../css/Project.css";
import { projectFilterCategory } from "../redux/defaultStore";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
const Project = () => {
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
  return (
    <>
      <div className="project__page">
        <div className="project__page__filters">
          <div className={classes.root}>
            {projectFilterCategory.map((filter) => (
              <Chip
                color="secondary"
                label={filter.name}
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
          <div className="project__card">
            <p className="project__card__name">Twitter Clone</p>
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
              <p className="description">
                project description yes . this app does a lot of thing you would
                fill to fo. Love it or die
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = ({ projects }) => {
  console.log("State in Project:", projects);
};

export default connect(mapStateToProps)(Project);
