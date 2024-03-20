import styled from "styled-components";

export const InquiryItemWrapper = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  width: 17.5rem;
  height: 15rem;
  cursor: pointer;
  border-radius: 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.gray["800"]};
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  margin: 0.75rem;
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

export const Status = styled.span<{ statusColor: string }>`
  color: ${({ theme, statusColor }) => theme.color.status[statusColor]};
`;
