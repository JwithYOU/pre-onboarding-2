import { AxiosResponse } from "axios";
import { defaultInstance } from "./customAPI";

const API = {
  search: async (params: any): Promise<AxiosResponse<any>> => {
    const response = await defaultInstance.get(`search-conditions`, {
      params,
    });
    return response;
  },
};

export default API;