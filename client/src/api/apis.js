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
