import styled from "styled-components";

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

export const CheckMenu = styled.div<{ fontWeight: string }>`
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
  span {
    ${({ theme, fontWeight }) => theme.typo.caption[fontWeight]};
  }
`;

export const ReviewBox = styled.div<{ checkedColor: string }>`
  color: ${({ theme, checkedColor }) => theme.color.status[checkedColor]};
  margin-bottom: 0.5rem;
  svg {
    fill: ${({ theme, checkedColor }) => theme.color.status[checkedColor]};
  }
`;

export const AnswerBox = styled.div<{ checkedColor: string }>`
  color: ${({ theme, checkedColor }) => theme.color.status[checkedColor]};
  svg {
    fill: ${({ theme, checkedColor }) => theme.color.status[checkedColor]};
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
