import S from "../styles/styles.styled";

const searchList = () => {
  return (
    <S.ListContainer>
      <S.ListWrapper>
        <S.RecentlySearch>최근 검색어</S.RecentlySearch>
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
      </S.ListWrapper>
    </S.ListContainer>
  );
};

export default searchList;
