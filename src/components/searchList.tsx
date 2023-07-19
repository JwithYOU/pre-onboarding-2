import React from "react";
import S from "../styles/styles.styled";

interface IsSearchList {
  searchKeyword: string;
}

const searchList = (props: IsSearchList) => {
  return (
    <S.ListContainer>
      <S.ListWrapper>
        {props.searchKeyword.length > 0 ? (
          <>
            <S.InsertSearchList>
              <S.ListMagnifier>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
                </svg>
              </S.ListMagnifier>
              <S.MagnifierMargin />
              <S.ListKeywords>{props.searchKeyword}</S.ListKeywords>
            </S.InsertSearchList>
            <S.RecomendedSearchContainer>
              <S.RecomendedTitle>추천 검색어</S.RecomendedTitle>
            </S.RecomendedSearchContainer>
          </>
        ) : (
          <>
            <S.NoSearchList>최근 검색어가 없습니다</S.NoSearchList>
            <S.SearchListLine />
            <S.RecomendedSearchContainer>
              <S.RecomendedTitle>추춴 검색어로 검색해보세요</S.RecomendedTitle>
              <S.RecomendedListWrapper>
                <S.RecomendedList>
                  <span>B형 간염</span>
                </S.RecomendedList>
                <S.RecomendedList>
                  <span>비만</span>
                </S.RecomendedList>
                <S.RecomendedList>
                  <span>관절염</span>
                </S.RecomendedList>
                <S.RecomendedList>
                  <span>우울증</span>
                </S.RecomendedList>
              </S.RecomendedListWrapper>
            </S.RecomendedSearchContainer>
          </>
        )}
      </S.ListWrapper>
    </S.ListContainer>
  );
};

export default searchList;
