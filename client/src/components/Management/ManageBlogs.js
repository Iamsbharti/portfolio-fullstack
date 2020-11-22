import React from "react";
import { useHistory } from "react-router-dom";
import "../../css/Management.css";
const ManageBlogs = () => {
  let history = useHistory();
  return (
    <div className="manage__page">
      <code>Manage Blog Console</code>
    </div>
  );
};
export default ManageBlogs;
