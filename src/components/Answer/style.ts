import styled from "styled-components";

export const AnswerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
`;

export const Title = styled.span`
  width: 100%;
  ${({ theme }) => theme.typo.text_lg.extrabold};
`;

export const AnswerTextarea = styled.textarea`
  ${({ theme }) => theme.typo.text_md.extrabold};
  width: 100%;
  height: calc(100% - 8.5rem);
  resize: none;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.gray["700"]};
  }
`;

export const AnswerButton = styled.div`
  background-color: ${({ theme }) => theme.color.green["500"]};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.btn_lg.extrabold};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  width: 22.5rem;
  height: 3rem;
  margin: 1.5rem 0;
  cursor: pointer;
`;
