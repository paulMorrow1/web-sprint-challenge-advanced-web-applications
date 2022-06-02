// ✨ implement axiosWithAuth
import axios from "axios";

// export const axiosWithAuth = axios.create({
//   baseURL: "http://localhost:9000",
//   headers: {
//     Authorization: localStorage.getItem("token"),
//   },
// });

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:9000",
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
};
