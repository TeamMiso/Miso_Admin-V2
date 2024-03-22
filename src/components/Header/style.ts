import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: fixed;
  display: flex;
  justify-content: center;
`;

export const MenuContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border: solid ${({ theme }) => theme.color.gray["700"]};
  border-width: 0 0.0625rem;
  padding: 1.5rem 2.5rem;
  width: 75rem;
  display: flex;
  justify-content: space-between;
`;

export const IconBox = styled.div`
  ${({ theme }) => theme.typo.text_md.semibold}
  color: ${({ theme }) => theme.color.green["500"]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogOutButton = styled.div`
  background-color: ${({ theme }) => theme.color.red["800"]};
  color: ${({ theme }) => theme.color.error};
  ${({ theme }) => theme.typo.caption.semibold};
  border-radius: 0.5rem;
  width: 4.625rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
