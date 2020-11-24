import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/Management.css";
import { Button } from "@material-ui/core";
import { AddBoxOutlined } from "@material-ui/icons";
const ManageProjects = () => {
  let history = useHistory();
  const handleAddProject = () => {};
  return (
    <div className="manage__page">
      <code>Manage Projects Console</code>
      <div className="managae__content">
        <Button onClick={handleAddProject}>
          <AddBoxOutlined color="primary" />
          <span style={{ color: "white" }}>Add Project</span>
        </Button>
      </div>
    </div>
  );
};
export default ManageProjects;
