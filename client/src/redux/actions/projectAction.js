import { GET_PROJECTS } from "./actionType";
import * as apis from "../../api/apis";

export function getAllProjectAction(projectInfo) {
  return async (dispatch) => {
    let allProjectsResponse = await apis.getAllProjects(projectInfo);
    dispatch({ type: GET_PROJECTS, allProjectsResponse });
  };
}
