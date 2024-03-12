import { FC } from "react";
import * as S from "./style";

interface ModalProps {
  isOpen: boolean;
  title: string;
  content1: string;
  content2: string;
  button: string;
  id: string;
  mainText: string;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  title,
  content1,
  content2,
  button,
  id,
  mainText,
  closeModal,
}) => {
  return (
    <S.ModalBackground
      style={{ display: isOpen ? "block" : "none" }}
      onClick={closeModal}
    >
      <S.ModalWrapper>
        <S.ModalTextBox>
          <S.Title>{title}</S.Title>
          <S.Content>{content1}</S.Content>
          <S.Content>{content2}</S.Content>
        </S.ModalTextBox>
        <S.ButtonContainer>
          <S.ButtonText onClick={closeModal}>돌아가기</S.ButtonText>
          <S.ButtonText>{button}</S.ButtonText>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </S.ModalBackground>
  );
};

export default Modal;
