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
  left: calc(50% - 31.35rem);
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
  margin-bottom: 0.5rem;
  color: ${({ theme, checkedColor }) =>
    match(checkedColor)
      .with(true, () => theme.color.green["500"])
      .otherwise(() => theme.color.gray["700"])};
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
      .with(true, () => theme.color.green["500"])
      .otherwise(() => theme.color.gray["700"])};
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
