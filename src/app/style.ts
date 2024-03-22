import styled from "styled-components";

export const InquiryWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const InquiryList = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border: solid ${({ theme }) => theme.color.gray["700"]};
  width: 80.0625rem;
  min-height: 100vh;
  border-width: 0 0.0625rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 1.75rem;
`;

export const InquiryMenu = styled.span`
  display: flex;
  width: 100%;
  margin-top: 5.25rem;
`;

export const InquiryItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 80rem) {
    width: 57.25rem;
  }
  @media screen and (max-width: 60rem) {
    width: 38.25rem;
  }
  @media screen and (max-width: 40rem) {
    width: 19.25rem;
  }
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.text_lg.extrabold}
  margin-right: 1rem;
`;

export const FilterButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    ${({ theme }) => theme.typo.text_sm.regular}
    color: ${({ theme }) => theme.color.main};
    margin-left: 0.25rem;
  }
`;
