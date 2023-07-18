import React from "react";
import S from "../styles/styles.styled";

interface IsSearchInput {
  onFocus: () => void;
  onBlur: () => void;
  inputFocus: boolean;
}

const searchInput = (props: IsSearchInput) => {
  return (
    <S.FormInner>
      <S.InnerWrapper>
        <S.LabelWrapper>
          <S.Label>
            <S.LabelInner />
          </S.Label>
        </S.LabelWrapper>
        <S.Placeholder>
          <S.InnerPlaceholder>
            {props.inputFocus ? (
              <></>
            ) : (
              <S.WatermarkContainer>
                <S.WatermarkContent>
                  <S.GrayMagnifier>
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
                    </svg>
                  </S.GrayMagnifier>
                  <S.InputPlease>질환명을 입력해 주세요.</S.InputPlease>
                </S.WatermarkContent>
              </S.WatermarkContainer>
            )}
            <S.Input
              onFocus={props.onFocus}
              onBlur={props.onBlur}
              style={{ caretColor: "rgb(25, 118, 210)" }}
            />
          </S.InnerPlaceholder>
        </S.Placeholder>
      </S.InnerWrapper>
    </S.FormInner>
  );
};

export default searchInput;
