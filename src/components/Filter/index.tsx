import { FilterProps } from "@/types";
import * as S from "./style";
import { match } from "ts-pattern";

const Filter = ({ isOpen }: FilterProps) => {
  return (
    <S.FilterWrapper
      display={match(isOpen)
        .with(true, () => "block")
        .otherwise(() => "none")}
    >
      <S.FilterLayout>
        <S.FilterContainer>
          <S.Title>게시글 상태</S.Title>
          <S.CheckMenu>
            <div>
              <span>검토 중</span>
              <S.CheckBox type="checkbox" />
            </div>
            <div>
              <span>답변 완료</span>
              <S.CheckBox type="checkbox" />
            </div>
          </S.CheckMenu>
        </S.FilterContainer>
      </S.FilterLayout>
    </S.FilterWrapper>
  );
};

export default Filter;
