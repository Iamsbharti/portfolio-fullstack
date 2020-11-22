import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/Management.css";
const MainConsole = () => {
  let history = useHistory();
  return (
    <div className="manage__page">
      <p>Management Console</p>
      <div className="manage__options">
        <p onClick={() => history.push("/manage/Projects")}>Manage Projects</p>
        <p onClick={() => history.push("/manage/Blogs")}>Manage Blogs</p>
      </div>
    </div>
  );
};
export default MainConsole;
