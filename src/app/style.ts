import styled from "@emotion/styled";
import { match } from "ts-pattern";

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
  justify-content: flex-start;
  box-sizing: border-box;
  align-content: flex-start;
  padding: 0 1.75rem;
  @media screen and (max-width: 80rem) {
    justify-content: center;
  }
`;

export const InquiryMenu = styled.span`
  display: flex;
  width: 100%;
  margin-top: 6.25rem;
  height: fit-content;
  padding: 0 0.75rem;
`;

export const InquiryItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 80rem) {
    width: 57.45rem;
  }
  @media screen and (max-width: 60rem) {
    width: 38.35rem;
  }
  @media screen and (max-width: 40rem) {
    width: 19.25rem;
  }
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.text_lg.extrabold}
  margin-right: 1rem;
`;

export const FilterButton = styled.div<{
  isFilterOpen: boolean;
}>`
  background-color: ${({ theme, isFilterOpen }) =>
    match(isFilterOpen)
      .with(true, () => theme.color.green["500"])
      .otherwise(() => theme.color.white)};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: fit-content;
  span {
    ${({ theme }) => theme.typo.text_sm.regular}
    color: ${({ theme, isFilterOpen }) =>
      match(isFilterOpen)
        .with(true, () => theme.color.white)
        .otherwise(() => theme.color.main)};
    margin-left: 0.25rem;
  }
  svg {
    fill: ${({ theme, isFilterOpen }) =>
      match(isFilterOpen)
        .with(true, () => theme.color.white)
        .otherwise(() => theme.color.main)};
  }
`;
