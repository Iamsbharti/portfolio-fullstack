import axios from "axios";
import FormData from "form-data";
import { toast } from "react-toastify";
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
  try {
    let loginRes = await axios.post(`${baseUrl}/api/v1/portfolio/login`, {
      userName: loginId,
      password: password,
    });

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

    let returnVal = loginRes.data.data;
    delete returnVal.authToken;
    returnVal = {
      ...returnVal,
      error: loginRes.data.error,
      message: loginRes.data.message,
    };
    return returnVal;
  } catch (error) {
    console.warn("Error", error.message);
    return error.response.data;
  }
};
export const createProject = async (projectInfo) => {
  console.log("Create Project api::", projectInfo);
  let data = new FormData();
  const {
    name,
    description,
    type,
    techstack,
    demo,
    code,
    file,
    userId,
  } = projectInfo;
  data.append("userId", userId);
  data.append("name", name);
  data.append("description", description);
  data.append("type", type);
  data.append("techstack", techstack);
  data.append("demo", demo);
  data.append("code", code);
  data.append("file", file);
  console.log("Auth token::", localStorage.getItem("authToken"));

  let createProjectConfig = {
    method: "post",
    url: `${baseUrl}/api/v1/portfolio/createProject?userId=${userId}`,
    headers: {
      authToken: localStorage.getItem("authToken"),
    },
    data: data,
  };

  try {
    let createProjectResponse = await axios(createProjectConfig);
    console.log("create project success::", createProjectResponse.data.message);
    if (!createProjectResponse.data.error) {
      toast.success("Project Created");
    }
    return createProjectResponse.data.data;
  } catch (error) {
    console.warn("Create Project Error::", error.response.data);
    toast.error(error.response.data.message);
    return error.response.data;
  }
};
export const updateProject = async (projectInfo) => {
  console.log("update Project api::", projectInfo);
  let data = new FormData();
  const {
    name,
    description,
    type,
    techstack,
    demo,
    code,
    file,
    fileChg,
    userId,
    projectId,
  } = projectInfo;
  data.append("userId", userId);
  data.append("name", name);
  data.append("description", description);
  data.append("type", type);
  data.append("techstack", techstack);
  data.append("demo", demo);
  data.append("code", code);
  data.append("file", file);

  console.log("Auth token::", localStorage.getItem("authToken"));
  let updateProjectConfig = {
    method: "post",
    url: `${baseUrl}/api/v1/portfolio/updateProject?userId=${userId}&projectId=${projectId}&fileChg=${fileChg}`,
    headers: {
      authToken: localStorage.getItem("authToken"),
    },
    data: data,
  };

  try {
    let updateProjectResponse = await axios(updateProjectConfig);
    console.log("update project success::", updateProjectResponse.data.message);
    if (!updateProjectResponse.data.error) {
      toast.success("Project Updated");
    }
    return updateProjectResponse.data.data;
  } catch (error) {
    console.warn("Update Project Error::", error.response.data);
    toast.error(error.response.data.message);
    return error.response.data;
  }
};
