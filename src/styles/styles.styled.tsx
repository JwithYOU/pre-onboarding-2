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
};

export default S;
