import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    ...options,
  });

  instance.interceptors.request.use(
    (response) => {
      console.log("interceptors > request", response);
      return response;
    },
    (error) => {
      console.log("interceptors > error", error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    (request) => {
      console.log("intercepters > request", request);
      return request;
    },
    (error) => {
      console.log("intercepters > error", error);
      return Promise.reject(error);
    }
  );

  instance.defaults.timeout = 5000;
  return instance;
};

export const defaultInstance = axiosApi(API_BASE_URL);
