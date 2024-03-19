import { ChangeEvent, useState } from "react";
import * as S from "./style";
import { Modal } from "@/components";
import { AnswerInputProps } from "@/types";

const AnswerInput = ({ id }: AnswerInputProps) => {
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainText, setMainText] = useState("");

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMainText(e.target.value);
  };

  return (
    <S.AnswerInputWrapper>
      <S.Title>답변하기</S.Title>
      <S.AnswerTextarea placeholder="답변 내용 쓰기" onChange={handleText} />
      <S.AnswerButton onClick={openModal}>답변하기</S.AnswerButton>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={"답변을 게시할까요?"}
        content1={"한 번 답변하면 수정할 수 없어요!"}
        content2={"신중히 답변해 보아요 :)"}
        button={"답변 게시"}
        id={id}
        mainText={mainText}
      />
    </S.AnswerInputWrapper>
  );
};

export default AnswerInput;
