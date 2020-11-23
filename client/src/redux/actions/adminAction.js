import { ADMIN_LOGIN, LOGIN_ERROR } from "./actionType";
import * as apis from "../../api/apis";

export function adminLoginAction(userInfo) {
  console.log("Admin Login Action:", userInfo);
  return async (dispath) => {
    let loginResponse = await apis.loginApi(userInfo);
    console.log("Admin LoginAction res::", loginResponse);
    dispath({ type: ADMIN_LOGIN, loginResponse });
  };
}
export function setUserStateOnError() {
  console.log("error-set session::");
  return (dispatch) => {
    dispatch({ type: LOGIN_ERROR });
  };
}
