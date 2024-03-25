import styled from "@emotion/styled";
import { match } from "ts-pattern";

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

export const MainContainer = styled.div`
  ${({ theme }) => theme.typo.text_md.regular}
  border-bottom: solid 0.0625rem #bfbfbf;
  display: flex;
  flex-wrap: wrap;
  padding: 2.5rem 0;
  margin-bottom: 2.5rem;
`;

export const MainImage = styled.div<{ imageUrl: string }>`
  background-image: url(${({ imageUrl }) => imageUrl});
  border-radius: 0.5rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 26.25rem;
  height: 17.5rem;
  margin-right: 1rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo.text_lg.semibold}
  color: ${({ theme }) => theme.color.black};
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.color.gray["300"]};
  ${({ theme }) => theme.typo.text_md.regular}
  margin-right: 0.5rem;
`;

export const Status = styled.span<{ statusColor: boolean }>`
  color: ${({ theme, statusColor }) =>
    match(statusColor)
      .with(true, () => theme.color.green["500"])
      .otherwise(() => theme.color.gray["700"])};
  ${({ theme }) => theme.typo.text_md.regular}
`;

export const MainText = styled.div`
  max-width: 45rem;
`;
