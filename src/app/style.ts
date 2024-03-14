import styled from "styled-components";

export const InquiryWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const InquiryList = styled.div`
  border: solid ${({ theme }) => theme.color.gray["700"]};
  width: 75rem;
  height: 100vh;
  padding: 0 2.5rem;
  border-width: 0 0.0625rem;
  display: flex;
  flex-direction: column;
`;

export const InquiryMenu = styled.span`
  width: 100%;
  margin-top: 7rem;
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
