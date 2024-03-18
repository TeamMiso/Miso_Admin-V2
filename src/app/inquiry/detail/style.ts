import styled from "styled-components";

export const DetailWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const DetailContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  border: solid ${({ theme }) => theme.color.gray["700"]};
  width: 80rem;
  min-height: 100vh;
  border-width: 0 0.0625rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 7rem 2.5rem 0 2.5rem;
`;

export const BackText = styled.span`
  color: ${({ theme }) => theme.color.main};
  ${({ theme }) => theme.typo.text_md.semibold}
  cursor: pointer;
  width: fit-content;
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo.title_md.extrabold}
`;

export const SemiTitle = styled.span`
  ${({ theme }) => theme.typo.text_lg.regular}
  margin-right: 0.5rem;
  &:first-child {
    color: ${({ theme }) => theme.color.gray["300"]};
  }
  &:last-child {
    color: ${({ theme }) => theme.color.gray["700"]};
  }
`;

export const MainContainer = styled.div`
  ${({ theme }) => theme.typo.text_md.regular}
  color: ${({ theme }) => theme.color.gray["300"]};
  border-bottom: solid 0.0625rem #bfbfbf;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.5rem 0;
  margin-bottom: 1.5rem;
`;

export const MainText = styled.div`
  max-width: 45rem;
`;

export const MainImage = styled.div`
  border-radius: 0.5rem;
  background-color: red;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 26.25rem;
  height: 17.5rem;
`;
