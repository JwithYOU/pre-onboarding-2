import React from "react";
import S from "../styles/styles.styled";
import SearchInput from "./searchInput";
import SearchButton from "./searchButton";

interface IsSearchForm {
  onFocus: () => void;
  onBlur: () => void;
  inputFocus: boolean;
  setInputFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchForm = (props: IsSearchForm) => {
  return (
    <S.ContentInner>
      <S.FormContainer>
        <S.FormWrapper inputFocus={props.inputFocus}>
          <SearchInput
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            inputFocus={props.inputFocus}
          />
          <SearchButton />
        </S.FormWrapper>
      </S.FormContainer>
    </S.ContentInner>
  );
};

export default SearchForm;
