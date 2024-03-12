import * as S from "./style";
import { FC } from "react";
import { match } from "ts-pattern";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import isLogout from "@/api/auth/isLogout";

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
  const router = useRouter();

  const logoutHandler = (router: AppRouterInstance) => {
    isLogout(router);
  };

  const accessHandler = () => {};

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
          <S.ButtonText
            onClick={
              // match(button)
              // .with("로그아웃", () => logoutHandler(router))
              // .otherwise(() => accessHandler())
              () => logoutHandler(router)
            }
          >
            {button}
          </S.ButtonText>
        </S.ButtonContainer>
      </S.ModalWrapper>
    </S.ModalBackground>
  );
};

export default Modal;
