import styled from "@emotion/styled";
import { match } from "ts-pattern";

export const FilterContainer = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  border: 0.0625rem solid ${({ theme }) => theme.color.gray["700"]};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  width: 10rem;
  padding: 1rem;
  box-sizing: border-box;
  left: calc(50% - 32.125rem);
  position: absolute;
  margin-top: 9.25rem;
  z-index: 0;
  @media screen and (max-width: 80.125rem) {
    left: 8rem;
  }
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.text_sm.semibold};
`;

export const CheckMenu = styled.div`
  margin-top: 1rem;
  div {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  svg {
    margin-right: 0.5rem;
  }
`;

export const ReviewBox = styled.div<{
  checkedColor: boolean;
}>`
  color: ${({ theme, checkedColor }) =>
    match(checkedColor)
      .with(true, () => theme.color.green["500"])
      .otherwise(() => theme.color.gray["700"])};
  margin-bottom: 0.5rem;
  svg {
    fill: ${({ theme, checkedColor }) =>
      match(checkedColor)
        .with(true, () => theme.color.green["500"])
        .otherwise(() => theme.color.gray["700"])};
  }
  span {
    ${({ theme, checkedColor }) =>
      match(checkedColor)
        .with(true, () => theme.typo.caption.extrabold)
        .otherwise(() => theme.typo.caption.semibold)};
  }
`;

export const AnswerBox = styled.div<{
  checkedColor: boolean;
}>`
  color: ${({ theme, checkedColor }) =>
    match(checkedColor)
      .with(true, () => theme.typo.caption.extrabold)
      .otherwise(() => theme.typo.caption.semibold)};
  svg {
    fill: ${({ theme, checkedColor }) =>
      match(checkedColor)
        .with(true, () => theme.typo.caption.extrabold)
        .otherwise(() => theme.typo.caption.semibold)};
  }
  span {
    ${({ theme, checkedColor }) =>
      match(checkedColor)
        .with(true, () => theme.typo.caption.extrabold)
        .otherwise(() => theme.typo.caption.semibold)};
  }
`;

export const CheckBox = styled.input`
  background-color: ${({ theme }) => theme.color.gray["700"]};
  border-radius: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  appearance: none;
  &:checked {
    background-color: ${({ theme }) => theme.color.main};
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  }
`;
