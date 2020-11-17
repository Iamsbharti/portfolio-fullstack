import React, { useState } from "react";
import "../css/Project.css";
import { projectFilterCategory } from "../redux/defaultStore";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import {} from "../";
const Project = () => {
  const [showCategory, setShowCategory] = useState("All");
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  }));
  const classes = useStyles();

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
        <div className="project__page__cards__section"></div>
      </div>
    </>
  );
};
const mapStateToProps = ({ projects }) => {
  console.log("State in Project:", projects);
};

export default connect(mapStateToProps)(Project);
