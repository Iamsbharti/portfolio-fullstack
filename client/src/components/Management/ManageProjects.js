import React, { useEffect, useState } from "react";
//import { useHistory } from "react-router-dom";
import "../../css/Management.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
} from "@material-ui/core";
import HUE from "@material-ui/core/colors/indigo";
import { AddBoxOutlined, Edit, Delete } from "@material-ui/icons";
import { connect } from "react-redux";
import { getAllProjectAction } from "../../redux/actions/projectAction";
import FormInput from "./FormInput";
const ManageProjects = ({ projects, getAllProjectAction }) => {
  //let history = useHistory();
  const [editMode, setEditMode] = useState(false);
  const [projectToEdit, setProjectToEdit] = useState({});
  const color = HUE[50];

  useEffect(() => {
    console.log("get all projects");
    getAllProjectAction();
  }, [getAllProjectAction]);

  //handle dialog transition
  const [value, setValue] = useState(false);
  //open the dialog box
  const handleClick = () => {
    console.log("open dialog box");
    setValue(true);
  };
  //reset the value after dialog is closed
  const handleCloseDialog = (_value) => {
    setValue(_value);
  };
  return (
    <div className="manage__page">
      <code>Manage Projects Console</code>
      <div className="managae__content">
        <Button onClick={handleClick}>
          <AddBoxOutlined color="primary" />
          <span style={{ color: "white" }}>Add Project</span>
        </Button>
        {value && (
          <FormInput
            open={value}
            onCloseDialog={handleCloseDialog}
            mode={editMode}
          />
        )}
        <div className="projects">
          <p className="header">Current Projects</p>
          <List component="ul">
            {projects &&
              projects.map((project, index) => (
                <ListItem key={index}>
                  <ListItemText
                    className="project_name"
                    primary={project.name}
                  />
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
const mapActionToProps = {
  getAllProjectAction,
};
export default connect(mapStateToProps, mapActionToProps)(ManageProjects);
