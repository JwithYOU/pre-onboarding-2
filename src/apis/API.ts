import axios from "axios";
// import { defaultInstance } from "./customAPI";

// const API = {
//   search: async (params: any): Promise<AxiosResponse<any>> => {
//     const response = await defaultInstance.get(`/search-conditions`, {
//       params,
//     });
//     return response;
//   },
// };

export interface ISearchData {
  id: number;
  name: string;
}

const API = async (keyword: string) => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  try {
    const res = await axios.get<ISearchData[]>(
      `${PROXY}/api/v1/search-conditions/?name=${keyword}`
    );
    const data = res.data.slice(0, 7);
    // cache 넣는 코드 있음
    return data;
  } catch (error) {
    console.error("Fetch error! ", error);
    throw error;
  }
};

export default API;

// const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

//   const searchingData = async (keyword: string) => {
//     try {
//       const res = await axios.get<ISearchData[]>(
//         `${PROXY}/api/v1/search-conditions/?name=${keyword}`,
//       );
//       console.info("calling api");

//       // if (res.statusText !== 'OK') throw new Error(`${res.statusText} (${res.status})`);

//       const data = res.data.slice(0, 7);
//       console.log("data: ", data);
//       return data;
//     } catch (error) {
//       console.error("Fetch error! ", error);
//       throw error;
//     }
//   };
