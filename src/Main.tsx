import S from "./styles/styles.styled";
import SearchForm from "./components/searchForm";

const Main = () => {
  return (
    <S.MainContainer>
      <S.ContentWrapper>
        <S.Title>
          국내 모든 임상시험 검색하고<br></br>온라인으로 참여하기
        </S.Title>
        <SearchForm />
      </S.ContentWrapper>
    </S.MainContainer>
  );
};

export default Main;
