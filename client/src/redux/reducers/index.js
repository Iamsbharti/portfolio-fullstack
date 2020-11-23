import { projectReducer } from "./projectReducer";
import { userReducer } from "./userReducer";
import { combineReducers } from "redux";

export default combineReducers({
  projects: projectReducer,
  user: userReducer,
});
