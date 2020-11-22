import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/Management.css";
const MainConsole = () => {
  let history = useHistory();
  return (
    <div className="manage__page">
      <code>Management Console</code>
      <div className="manage__options">
        <p onClick={() => history.push("/manage/projects")}>Manage Projects</p>
        <p onClick={() => history.push("/manage/blogs")}>Manage Blogs</p>
      </div>
    </div>
  );
};
export default MainConsole;
