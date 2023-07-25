import React, { useState } from "react";
import S from "./styles/styles.styled";
import SearchForm from "./components/searchForm";
import useSearch from "./hooks/useSearch";
import { DEBOUNCED_TIME } from "./utils/constants";
import axios from "axios";

export interface SearchResponseItem {
  id: number;
  name: string;
}

interface ISearchData {
  id: number;
  name: string;
}

const Main = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const { searchResponse, isSearching, handleSearch, getSearchData } =
    useSearch({
      searchKeyword,
      debounceDelay: DEBOUNCED_TIME,
    });

  const inputOnFocusHandler = () => {
    setInputFocus(true);
  };

  const inputOnBlursHandler = () => {
    setInputFocus(false);
  };

  const searchKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    searchingData(e.target.value);
  };

  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  const searchingData = async (keyword: string) => {
    try {
      const res = await axios.get<ISearchData[]>(
        `${PROXY}/api/v1/search-conditions/?name=${keyword}`
      );
      console.info("calling api");

      // if (res.statusText !== 'OK') throw new Error(`${res.statusText} (${res.status})`);

      const data = res.data.slice(0, 7);
      console.log("data: ", data);
      return data;
    } catch (error) {
      console.error("Fetch error! ", error);
      throw error;
    }
  };

  return (
    <S.MainContainer>
      <S.ContentWrapper>
        <S.Title>
          국내 모든 임상시험 검색하고<br></br>온라인으로 참여하기
        </S.Title>
        <SearchForm
          onFocus={inputOnFocusHandler}
          inputFocus={inputFocus}
          searchKeyword={searchKeyword}
          onChange={searchKeywordHandler}
          setInputFocus={setInputFocus}
          onBlur={inputOnBlursHandler}
          searchResponse={searchResponse}
          getSearchData={getSearchData}
          isSearching={isSearching}
          handleSearch={handleSearch}
        />
      </S.ContentWrapper>
    </S.MainContainer>
  );
};

export default Main;
