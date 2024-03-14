"use client";

import * as S from "./style";

const InquiryItem = () => {
  return (
    <S.InquiryItemWrapper>
      <S.TextArea>
        <S.SubTitle>
          <S.Date>23.12.29</S.Date>
          <S.Status>검토중</S.Status>
        </S.SubTitle>
        <S.Title>유색 페트병이 등록되어 있지 않습니다.</S.Title>
      </S.TextArea>
      <S.ImageArea></S.ImageArea>
    </S.InquiryItemWrapper>
  );
};
export default InquiryItem;
