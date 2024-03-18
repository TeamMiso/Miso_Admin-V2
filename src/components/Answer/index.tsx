import * as S from "./style";

const Answer = () => {
  return (
    <S.AnswerWrapper>
      <S.Title>답변하기</S.Title>
      <S.AnswerTextarea placeholder="답변 내용 쓰기" />
      <S.AnswerButton>답변하기</S.AnswerButton>
    </S.AnswerWrapper>
  );
};

export default Answer;
