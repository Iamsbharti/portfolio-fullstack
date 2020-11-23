import { ADMIN_LOGIN, LOGIN_ERROR } from "../actions/actionType";
let user = { error: false, status: 400, message: "", data: null };
export function userReducer(_user = user, action) {
  switch (action.type) {
    case ADMIN_LOGIN:
      return action.loginResponse;

    case LOGIN_ERROR:
      return _user;

    default:
      return _user;
  }
}
