import S from "../styles/styles.styled";
import SearchInput from "./searchInput";
import SearchButton from "./searchButton";

const searchForm = () => {
  return (
    <S.ContentInner>
      <S.FormContainer>
        <S.FormWrapper>
          <SearchInput />
          <SearchButton />
        </S.FormWrapper>
      </S.FormContainer>
    </S.ContentInner>
  );
};

export default searchForm;
