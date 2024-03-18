import * as S from "./style";

const AnswerInput = () => {
  return (
    <S.AnswerInputWrapper>
      <S.Title>답변하기</S.Title>
      <S.AnswerTextarea placeholder="답변 내용 쓰기" />
      <S.AnswerButton>답변하기</S.AnswerButton>
    </S.AnswerInputWrapper>
  );
};

export default AnswerInput;
