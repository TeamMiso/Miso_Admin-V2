import styled from "styled-components";

export const InquiryItemWrapper = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  box-sizing: border-box;
  justify-content: space-between;
  padding: 1.5rem 3.5rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray["900"]};
  }
`;

export const TextArea = styled.div`
  span {
    ${({ theme }) => theme.typo.text_md.regular};
    margin-right: 0.5rem;
  }
`;

export const SubTitle = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.color.gray["300"]};
`;

export const Status = styled.span<{ statusColor: string }>`
  color: ${({ theme, statusColor }) => theme.color.status[statusColor]};
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.text_lg.semibold};
`;

export const ImageArea = styled.div<{ imageUrl: string }>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
`;
