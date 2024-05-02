import * as S from "./style";
import { match } from "ts-pattern";
import { useRouter } from "next/navigation";
import isLogout from "@/api/auth/isLogout";
import { ModalProps } from "@/types";
import isAnswering from "@/api/inquiry/isAnswering";

const Modal = ({
  isOpen,
  title,
  content1,
  content2,
  button,
  id,
  mainText,
  closeModal,
}: ModalProps) => {
  const router = useRouter();

  const logoutHandler = () => {
    isLogout(router).then(() => closeModal());
  };

  const accessHandler = () => {
    isAnswering(router, id).then(() => closeModal());
  };

  return (
    <S.ModalBackground
      display={match(isOpen)
        .with(true, () => "block")
        .otherwise(() => "none")}
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
            onClick={() =>
              match(button)
                .with("로그아웃", () => logoutHandler())
                .otherwise(() => accessHandler())
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
