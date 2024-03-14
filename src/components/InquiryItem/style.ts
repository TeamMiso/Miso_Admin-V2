import styled from "styled-components";

export const InquiryItemWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 0 3.5rem;
  height: 8rem;
  align-items: center;
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

export const Status = styled.span`
  color: ${({ theme }) => theme.color.gray["700"]};
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo.text_lg.semibold};
`;

export const ImageArea = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  background-color: gray;
`;
