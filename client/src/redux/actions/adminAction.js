import { ADMIN_LOGIN } from "./actionType";
import * as apis from "../../api/apis";

export function adminLogin(userInfo) {
  console.log("Admin Login Action:", userInfo);
  return async (dispath) => {
    let loginResponse = await apis.loginApi(userInfo);
    console.log("Admin LoginAction res::", loginResponse);
    dispath({ type: ADMIN_LOGIN, loginResponse });
  };
}
