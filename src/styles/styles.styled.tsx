import styled from "styled-components";

const S = {
  MainContainer: styled.div`
    flex-direction: column;
    align-items: center;
    display: flex;
    width: 100%;
    background-color: #cae9ff;
  `,
  ContentWrapper: styled.div`
    flex-direction: column;
    display: flex;
    width: 100%;
    max-width: 360px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding: 120px 0 290px;
    @media (min-width: 1040px) {
      padding: 80px 0 160px;
      max-width: 1040px;
    }
  `,
  ContentInner: styled.div`
    width: 100%;
    margin: 0 auto;
    @media (min-width: 1040px) {
      display: flex;
      max-width: 490px;
    }
  `,

  Title: styled.h2`
    font-family: inherit;
    text-align: center;
    margin: 0;
    @media (min-width: 1040px) {
      margin-bottom: 40px;
      font-size: 2.125rem;
      font-weight: 700;
      letter-spacing: -0.018em;
      line-height: 1.6;
    }
  `,
  FormContainer: styled.div`
    width: 100%;
    margin: 0 auto;
    @media (min-width: 1040px) {
      display: flex;
    }
  `,
  FormWrapper: styled.div<{ inputFocus: boolean }>`
    border-radius: 42px;
    border: ${(props) =>
      props.inputFocus ? "2px solid #0074cc;" : "2px solid #ffffff;"}
    background-color: #ffffff;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: -0.018em;
    line-height: 1.6;
    width: 100%;
    position: relative;
    padding-right: 8px;
  `,
  FormInner: styled.div`
    flex-direction: row;
    flex: 1;
    align-items: center;
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.6;
    display: flex;
    padding: 20px 10px 20px 24px;
  `,
  InnerWrapper: styled.div`
    flex-direction: column;
    display: flex;
    width: 100%;
  `,
  Placeholder: styled.div`
    flex-direction: row;
    align-items: center;
    display: flex;
    position: relative;
  `,
  InnerPlaceholder: styled.div`
    align-items: center;
    width: 100%;
    display: flex;
  `,
  WatermarkContainer: styled.div`
    color: #a7afb7;
    position: absolute;
    pointer-events: none;
  `,
  WatermarkContent: styled.div`
    flex-direction: row;
    display: flex;
  `,
  Input: styled.input`
    padding-right: 25px;
    width: 100%;
    border: 0;
    min-width: 0;
    flex: 1;
    background-color: transparent;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  `,
  GrayMagnifier: styled.div`
    width: 16px;
    height: 16px;
    marin-right: 12px;
  `,
  InputPlease: styled.div`
    font-family: inherit;
  `,
  SearchButton: styled.button`
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    display: flex;
    font-weight: 500;
    border: 0;
    cursor: pointer;
    background-color: #007be9;
    color: #ffffff;
  `,
  MagnifierContainer: styled.div`
    width: 21px;
    height: 21px;
  `,
  LabelWrapper: styled.div`
    font-family: inherit;
  `,
  Label: styled.label`
    cursor: default;
  `,
  LabelInner: styled.div`
    opacity: 0;
    font-family: inherit;
    line-height: 7px;
  `,
  // searchList.tsx
  ListContainer: styled.div`
    z-index: 1;
  `,
  ListWrapper: styled.div`
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    flex-direction: column;
    display: flex;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0px;
    margin-top: 8px;
    padding-top: 24px;
    padding-bottom: 16px;
    box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
  `,
  RecentlySearch: styled.div`
    color: rgb(106, 115, 123);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.018em;
    line-height: 1.6;
    padding-left: 24px;
    padding-right: 24px;
    font-family: inherit;
  `,
  NoSearchList: styled.div`
  color: rgb(167, 175, 183);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
  font-family: inherit;
  cursor: default;
}`,
  SearchListLine: styled.div`
    background-color: rgb(237, 240, 242);
    height: 1px;
    margin-top: 24px;
    margin-bottom: 24px;
  `,
  RecomendedSearchContainer: styled.div`
    padding-left: 24px;
    padding-right: 24px;
  `,
  RecomendedTitle: styled.div`
    color: rgb(106, 115, 123);
    gap: 2px;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.018em;
    line-height: 1.6;
    display: flex;
    font-family: inherit;
  `,
  RecomendedListWrapper: styled.div`
    flex-flow: row wrap;
    gap: 8px;
    display: flex;
    margin-top: 16px;
    margin-bottom: 8px;
  `,
  RecomendedList: styled.div`
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: -0.018em;
    line-height: 1.6;
    cursor: pointer;
    background-color: rgb(238, 248, 255);
    color: rgb(0, 123, 233);
    padding: 8px 16px;
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    border-radius: 20px;
  `,
  InsertSearchList: styled.div`
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    display: flex;
    padding: 8px 24px;
    cursor: pointer;
  `,
  ListMagnifier: styled.div`
    color: rgb(167, 175, 183);
    align-self: flex-start;
    min-width: 16px;
    height: 16px;
    margin-top: 3px;
  `,
  MagnifierMargin: styled.div`
    margin-right: 12px;
  `,
  ListKeywords: styled.div`
    font-family: inherit;
    font-weight: 700;
  `,
};

export default S;
