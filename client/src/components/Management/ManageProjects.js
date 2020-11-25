import React, { useEffect } from "react";
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
import DialogComponent from "./DialogComponent";
const ManageProjects = ({ projects, getAllProjectAction }) => {
  //let history = useHistory();
  const handleAddProject = () => {};
  const color = HUE[50];
  /*const styles = {
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    height: 380,
    overflowY: "auto",
    fontFamily: "Roboto",
     {
      _id: '5fb4ba8d0619c95b770418ef',
      type: [
        'Reactjs',
        'clone'
      ],
      techstack: [
        'reactjs'
      ],
      projectId: 'hbiOTA1RR',
      name: 'StackOverFLow min Clone',
      demo: 'https://stack-overflow-isomorphic.herokuapp.com/',
      code: 'https://github.com/Iamsbharti/StackOverFlow-Isomorphic',
      description: 'A stackoverflow clone with minimum functionality like search and include category.',
      userId: '3SJTd1d-m',
      image: {
        _id: '5fb4ba8b0619c95b770418ed',
        length: 69625,
        chunkSize: 261120,
        uploadDate: '2020-11-18T06:09:16.962Z',
        filename: '25c9d8426a070aa357f30fb53b473265',
        md5: 'e4f9b84356e0a5a59fd63dfaf4456290',
        contentType: 'image/png'
      },
      __v: 0
    },
  };*/

  useEffect(() => {
    console.log("get all projects");
    getAllProjectAction();
  }, [getAllProjectAction]);

  //handle dialog transition
  const [value, setValue] = useState(false);
  //open the dialog box
  const handleClick = () => {
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
        <Button onClick={handleAddProject}>
          <AddBoxOutlined color="primary" />
          <span style={{ color: "white" }}>Add Project</span>
        </Button>
        {value && (
          <DialogComponent open={value} onCloseDialog={handleCloseDialog} />
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
