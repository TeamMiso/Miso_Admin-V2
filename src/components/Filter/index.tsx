import { FilterProps } from "@/types";
import * as S from "./style";
import { match } from "ts-pattern";
import { SmallCheck } from "@/assets";

const Filter = ({
  isOpen,
  isReviewChecked,
  setIsReviewChecked,
  isAnswerChecked,
  setIsAnswerChecked,
}: FilterProps) => {
  return (
    <S.FilterContainer
      display={match(isOpen)
        .with(true, () => "block")
        .otherwise(() => "none")}
    >
      <S.Title>답변 상태</S.Title>
      <S.CheckMenu>
        <S.ReviewBox
          onClick={() => setIsReviewChecked(!isReviewChecked)}
          checkedColor={match(isReviewChecked)
            .with(true, () => "APPROVED")
            .otherwise(() => "WAIT")}
          fontWeight={match(isReviewChecked)
            .with(true, () => "extrabold")
            .otherwise(() => "semibold")}
        >
          <SmallCheck />
          <span>검토 중</span>
        </S.ReviewBox>
        <S.AnswerBox
          onClick={() => setIsAnswerChecked(!isAnswerChecked)}
          checkedColor={match(isAnswerChecked)
            .with(true, () => "APPROVED")
            .otherwise(() => "WAIT")}
          fontWeight={match(isAnswerChecked)
            .with(true, () => "extrabold")
            .otherwise(() => "semibold")}
        >
          <SmallCheck />
          <span>답변 완료</span>
        </S.AnswerBox>
      </S.CheckMenu>
    </S.FilterContainer>
  );
};

export default Filter;
