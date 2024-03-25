import styled from "@emotion/styled";

export const ModalBackground = styled.div<{ display: string }>`
  background-color: rgba(0, 0, 0, 0.35);
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: ${({ display }) => display};
`;

export const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  width: 24rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const ModalTextBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.text_md.semibold}
  margin-bottom: 0.5rem;
`;

export const Content = styled.span`
  color: ${({ theme }) => theme.color.gray[400]};
  ${({ theme }) => theme.typo.text_sm.regular}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonText = styled.div`
  ${({ theme }) => theme.typo.btn_lg.semibold}
  margin-left: 1rem;
  cursor: pointer;
  &:first-child {
    color: ${({ theme }) => theme.color.gray["700"]};
  }
  &:last-child {
    color: ${({ theme }) => theme.color.green["500"]};
  }
`;
