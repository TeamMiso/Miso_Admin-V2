import styled from "styled-components";

export const InquiryWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const InquiryList = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border: solid ${({ theme }) => theme.color.gray["700"]};
  width: 80.125rem;
  min-height: 100vh;
  border-width: 0 0.0625rem;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 1.75rem;
`;

export const InquiryMenu = styled.span`
  box-sizing: border-box;
  width: 100%;
  margin-top: 7rem;
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.title_md.extrabold}
`;

export const FilterButton = styled.span`
  ${({ theme }) => theme.typo.text_lg.regular}
  color: ${({ theme }) => theme.color.main};
  cursor: pointer;
`;
