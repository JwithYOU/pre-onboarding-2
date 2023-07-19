import React from "react";
import S from "../styles/styles.styled";
import SearchInput from "./searchInput";
import SearchButton from "./searchButton";
import SearchList from "./searchList";

interface IsSearchForm {
  onFocus: () => void;
  onBlur: () => void;
  inputFocus: boolean;
  setInputFocus: React.Dispatch<React.SetStateAction<boolean>>;
  searchKeyword: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm = (props: IsSearchForm) => {
  return (
    <S.ContentInner>
      <S.FormContainer>
        <S.FormWrapper inputFocus={props.inputFocus}>
          <SearchInput
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onChange={props.onChange}
            searchKeyword={props.searchKeyword}
            inputFocus={props.inputFocus}
          />
          <SearchButton />
          {props.inputFocus && (
            <SearchList searchKeyword={props.searchKeyword} />
          )}
        </S.FormWrapper>
      </S.FormContainer>
    </S.ContentInner>
  );
};

export default SearchForm;
