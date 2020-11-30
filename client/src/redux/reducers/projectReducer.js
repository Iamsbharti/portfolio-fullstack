import {
  CREATE_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
} from "../actions/actionType";
import { projects } from "../defaultStore";
export function projectReducer(_projects = projects, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.allProjectsResponse;
    case CREATE_PROJECT:
      return [..._projects, action.newProject];
    case UPDATE_PROJECT:
      const { projectId } = action.updatedProject;
      return _projects.map((project) =>
        project.projectId === projectId
          ? { ...project, ...action.updatedProject }
          : project
      );
    default:
      return _projects;
  }
}
