import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/Management.css";
const MainConsole = () => {
  let history = useHistory();
  return (
    <div className="manage__page">
      <code>Management Console</code>
      <code style={{ color: "red", cursor: "pointer" }}>Logout</code>

      <div className="manage__options">
        <div className="content__card">
          <h2>Contents</h2>
          <div className="divider"></div>
          <p onClick={() => history.push("/manage/projects")}>
            Manage Projects
          </p>
          <p onClick={() => history.push("/manage/blogs")}>Manage Blogs</p>
        </div>
      </div>
    </div>
  );
};
export default MainConsole;
