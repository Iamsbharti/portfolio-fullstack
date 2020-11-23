import axios from "axios";
import FormData from "form-data";
export const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";

export const getAllProjects = async () => {
  console.log("calling api");
  try {
    let allProjects = await axios.get(`${baseUrl}/api/v1/portfolio/projects`);
    console.log("GET all projects response", allProjects);
    return allProjects.data.data;
  } catch (error) {
    console.warn("Error Fetching Projects");
  }
};

export const loginApi = async ({ loginId, password }) => {
  console.log("Login api call");
  //http://localhost:3001/api/v1/portfolio/login
  try {
    let loginRes = await axios.post(`${baseUrl}/api/v1/portfolio/login`, {
      loginId: loginId,
      password: password,
    });

    console.log("Login Response:", loginRes);
    let {
      firstName,
      lastName,
      userName,
      userId,
      authToken,
    } = loginRes.data.data;
    /**local storage */
    localStorage.setItem("userId", userId);
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("name", firstName + " " + lastName);
    localStorage.setItem("userName", userName);

    let returnVal = loginRes.toObject();
    delete returnVal.authToken;
    returnVal = {
      ...returnVal,
      error: loginRes.error,
      message: loginRes.message,
    };
    console.log("return value__login:", returnVal);
    return returnVal;
  } catch (error) {
    console.warn("Error", error.message);
  }
};
