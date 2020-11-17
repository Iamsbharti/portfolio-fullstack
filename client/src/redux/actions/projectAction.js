import { GET_PROJECTS } from "./actionType";
import * as apis from "../../api/apis";

export function getAllProjectAction() {
  return async (dispatch) => {
    let allProjectsResponse = await apis.getAllProjects();
    dispatch({ type: GET_PROJECTS, allProjectsResponse });
  };
}
