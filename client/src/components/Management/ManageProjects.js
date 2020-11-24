import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../../css/Management.css";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core";
import HUE from "@material-ui/core/colors/indigo";
import { AddBoxOutlined, Edit, Delete } from "@material-ui/icons";
import { connect } from "react-redux";
import { getAllProjectAction } from "../../redux/actions/projectAction";
const ManageProjects = ({ projects }) => {
  let history = useHistory();
  const handleAddProject = () => {};
  const color = HUE[50];
  const styles = {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 380,
    overflowY: "auto",
    fontFamily: "Roboto",
  };
  useEffect(() => {
    if (projects != undefined) {
      getAllProjectAction();
    }
  }, [projects]);
  return (
    <div className="manage__page">
      <code>Manage Projects Console</code>
      <div className="managae__content">
        <Button onClick={handleAddProject}>
          <AddBoxOutlined color="primary" />
          <span style={{ color: "white" }}>Add Project</span>
        </Button>
        <div className="projects">
          <p>Current Projects</p>
          <List component="ul">
            {projects &&
              projects.map((project, index) => (
                <ListItem key={index}>
                  <ListItemText primary={project.name} />
                  <IconButton>
                    <Edit style={{ color: color }} />
                  </IconButton>
                  <ListItemSecondaryAction>
                    <IconButton edge="end">
                      <Delete style={{ color: color }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
          </List>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { projects } = state;
  return { projects };
};
const mapActioToProps = { getAllProjectAction };
export default connect(mapStateToProps)(ManageProjects);
