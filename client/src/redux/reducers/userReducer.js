import { ADMIN_LOGIN } from "../actions/actionType";

export function userReducer(action) {
  let user = {};
  switch (action.type) {
    case ADMIN_LOGIN:
      return action.loginResponse;
      break;
    default:
      return user;
  }
}
