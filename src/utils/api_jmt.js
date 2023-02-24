import axios from "axios";
import authHeader from "./jwt-token-access/auth-token-header";

//pass new generated access token here
//const token = accessToken

//apply base url for axios
const API_URL = "https://api.plata3b.com/public";

const axiosApi = axios.create({
  baseURL: API_URL,
});

//axiosApi.defaults.headers.common["Authorization"] = token

axiosApi.defaults.headers.common["Authorization"] = null;

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  console.log("interceptar");
  config.headers.Authorization = authHeader;
  console.log(authHeader);
  return config;
});

export function jget(url, config = {}) {
  console.log("get jget obtener");
  const obj = JSON.parse(localStorage.getItem("authUser"));
  if (obj != null) {
    axiosApi.defaults.headers.common["Authorization"] =
      "Bearer " + obj.accessToken;
    config = {
      headers: { Authorization: "Bearer " + obj.accessToken },
    };
  }
  return axiosApi.get(url, { ...config }).then((response) => response.data);
}

export function jpost(url, data, config = {}, file = null) {
  const obj = JSON.parse(localStorage.getItem("authUser"));
  if (obj != null) {
    axiosApi.defaults.headers.common["Authorization"] =
      "Bearer " + obj.accessToken;

    // axiosApi.defaults.headers.common["Content-Type"] = "multipart/form-data";
    config = {
      headers: {
        Authorization: "Bearer " + obj.accessToken,
        // "Content-Type": "multipart/form-data",
      },
    };
  }

  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response);
        return error.response.status == 401;
      } else {
        console.log("Error", error.message);
      }
    });
}

export async function jput(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function jdel(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
