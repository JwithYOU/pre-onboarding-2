import React, { useState } from "react";
import S from "./styles/styles.styled";
import SearchForm from "./components/searchForm";

const Main = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const inputOnFocusHandler = () => {
    setInputFocus(true);
  };

  const inputOnBlursHandler = () => {
    setInputFocus(false);
  };

  const searchKeywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
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
        />
      </S.ContentWrapper>
    </S.MainContainer>
  );
};

export default Main;
