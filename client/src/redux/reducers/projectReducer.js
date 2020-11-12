import { bindActionCreators } from "redux";
import { GET_PROJECTS } from "../actions/actionType";
import { projects } from "../defaultStore";
export function projectReducer(_projects = projects, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.allProjects;
    default:
      return _projects;
  }
}
