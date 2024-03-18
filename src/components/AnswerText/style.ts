import styled from "styled-components";

export const Title = styled.span`
  width: 100%;
  ${({ theme }) => theme.typo.text_lg.extrabold};
`;

export const AnswerTextarea = styled.div`
  ${({ theme }) => theme.typo.text_md.regular};
  margin-bottom: 1rem;
`;
