import styled from "@emotion/styled";
import { match } from "ts-pattern";

export const InquiryItemWrapper = styled.div<{ display: string }>`
  border: 0.0625rem solid ${({ theme }) => theme.color.gray["800"]};
  display: ${({ display }) => display};
  width: 17.5rem;
  height: 15rem;
  cursor: pointer;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0.7425rem;
`;

export const ImageArea = styled.div<{ imageUrl: string }>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 10rem;
  border-radius: 0.95rem 0.95rem 0 0;
`;

export const TextArea = styled.div`
  border-top: 0.0625rem solid ${({ theme }) => theme.color.gray["800"]};
  padding: 0.5rem 1rem;
  display: flex;
  flex-wrap: wrap-reverse;
  height: 4rem;
  align-content: space-between;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.text_sm.semibold}
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.typo.caption.regular}
  width: 100%;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.color.gray["300"]};
  margin-right: 0.5rem;
`;

export const Status = styled.span<{ statusColor: boolean }>`
  color: ${({ theme, statusColor }) =>
    match(statusColor)
      .with(true, () => theme.color.green["400"])
      .otherwise(() => theme.color.gray["700"])};
`;
