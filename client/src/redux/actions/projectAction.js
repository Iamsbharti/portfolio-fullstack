import { GET_PROJECTS } from "./actionType";

import * as apis from "../../api/apis";

export function getAllProjectAction() {
  console.log("get all projects actions");
  return async (dispatch) => {
    let allProjectsResponse = await apis.getAllProjects();
    console.log("all project response in action:", allProjectsResponse);
    dispatch({ type: GET_PROJECTS, allProjectsResponse });
  };
}
