import { AnswerTextProps } from "@/types";
import * as S from "./style";

const AnswerText = ({ content }: AnswerTextProps) => {
  return (
    <>
      <S.Title>답변내용</S.Title>
      <S.AnswerTextarea>{content}</S.AnswerTextarea>
    </>
  );
};

export default AnswerText;
