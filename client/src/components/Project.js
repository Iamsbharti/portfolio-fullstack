import React, { useState } from "react";
import "../css/Project.css";
import { projectFilterCategory } from "../redux/defaultStore";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
const Project = () => {
  const [showCategory, setShowCategory] = useState("");
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
        <div className="project__page__intro">
          Currently showing {showCategory}
        </div>
        <div className="project__page__filters" className={classes.root}>
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
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Project;
