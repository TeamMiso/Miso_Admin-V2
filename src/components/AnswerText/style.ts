import styled from "@emotion/styled";

export const Title = styled.span`
  width: 100%;
  ${({ theme }) => theme.typo.text_md.extrabold};
`;

export const AnswerTextarea = styled.div`
  ${({ theme }) => theme.typo.text_sm.regular};
  margin-bottom: 1rem;
`;
