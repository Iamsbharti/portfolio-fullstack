import { CREATE_PROJECT, GET_PROJECTS } from "../actions/actionType";
import { projects } from "../defaultStore";
export function projectReducer(_projects = projects, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.allProjectsResponse;
    case CREATE_PROJECT:
      return [..._projects, action.newProject];
    default:
      return _projects;
  }
}
