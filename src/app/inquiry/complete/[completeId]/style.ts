import styled from "styled-components";

export const CompleteWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const CompleteContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border: solid ${({ theme }) => theme.color.gray["700"]};
  width: 80rem;
  min-height: 100vh;
  border-width: 0 0.0625rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.title_md.extrabold}
  margin-bottom: 0.5rem;
`;

export const SemiTitle = styled.span`
  ${({ theme }) => theme.typo.text_lg.semibold}
  color: ${({ theme }) => theme.color.gray["300"]};
`;

export const Date = styled.span`
  ${({ theme }) => theme.typo.text_md.regular}
  color: ${({ theme }) => theme.color.gray["300"]};
`;

export const CompleteButton = styled.div`
  ${({ theme }) => theme.typo.btn_lg.extrabold}
  background-color: ${({ theme }) => theme.color.green["500"]};
  color: ${({ theme }) => theme.color.white};
  padding: 0 8.5rem;
  border-radius: 0.5rem;
  margin-top: 4rem;
  cursor: pointer;
`;
