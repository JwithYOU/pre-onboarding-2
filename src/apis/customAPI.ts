import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosApi = ({ options }: any) => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    ...options,
  });

  instance.defaults.timeout = 5000;
  return instance;
};

export const defaultInstance = axiosApi(API_BASE_URL);
