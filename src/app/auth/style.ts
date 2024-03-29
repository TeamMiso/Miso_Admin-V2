import { StaticImageData } from "next/image";
import styled from "@emotion/styled";

export const LoginPageWrapper = styled.div<{ imgUrl: StaticImageData }>`
  background-image: url(${({ imgUrl }) => imgUrl.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const BackgroundCover = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0.25rem);
`;

export const LoginContainer = styled.div`
  border: 0.0625rem solid ${({ theme }) => theme.color.gray["700"]};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  width: 27rem;
  height: 35rem;
`;

export const LoginWrapper = styled.div`
  margin: 2.5rem 1.5rem;
  height: calc(100% - 5rem);
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.green["500"]};
  ${({ theme }) => theme.typo.title_md.extrabold}
`;

export const SemiTitle = styled.span`
  color: ${({ theme }) => theme.color.gray["700"]};
  ${({ theme }) => theme.typo.text_lg.regular}
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input<{ isStatus: any }>`
  border: 0.0625rem solid
    ${({ isStatus, theme }) =>
      isStatus ? theme.color.red["500"] : theme.color.gray["700"]};
  color: ${({ isStatus, theme }) =>
    isStatus ? theme.color.red["500"] : theme.color.black};
  ${({ theme }) => theme.typo.text_sm.regular};
  border-radius: 0.5rem;
  width: calc(100% - 2.625rem);
  height: 3.375rem;
  padding: 0 1.25rem;
  margin-bottom: 1rem;
  &:focus {
    border-color: ${({ isStatus, theme }) =>
      isStatus ? theme.color.red["500"] : theme.color.green["500"]};
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.gray["700"]};
  }
`;

export const ErrorMessageWrap = styled.div`
  ${({ theme }) => theme.typo.caption.regular};
  color: ${({ theme }) => theme.color.red["500"]};
  position: absolute;
  margin-top: 3.5rem;
  &:last-child {
    margin-top: 8rem;
  }
`;

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.color.green["500"]};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.text_md.semibold};
  width: 100%;
  height: 3.375rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
`;
