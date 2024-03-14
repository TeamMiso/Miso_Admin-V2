import styled from "styled-components";

export const FilterWrapper = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  right: 0;
  position: fixed;
  padding-top: 7.5rem;
  width: calc(50% - 40rem);
  height: 100vh;
`;

export const FilterLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FilterContainer = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.color.gray["700"]};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  width: 10rem;
  padding: 0.5rem;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.text_md.semibold};
`;

export const CheckMenu = styled.div`
  div {
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    cursor: pointer;
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
