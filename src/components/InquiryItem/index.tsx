"use client";

import { InquiryItemType } from "@/types";
import * as S from "./style";
import { match } from "ts-pattern";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const InquiryItem = ({
  id,
  inquiryDate,
  title,
  imageUrl,
  inquiryStatus,
  isReviewChecked,
  isAnswerChecked,
}: InquiryItemType) => {
  const router = useRouter();
  const [display, setDisplay] = useState<string>("flex");

  useEffect(() => {
    setDisplay(
      match(inquiryStatus)
        .with("WAIT", () => {
          return match(isReviewChecked)
            .with(true, () => "flex")
            .otherwise(() => "none");
        })
        .with("COMPLETE", () => {
          return match(isAnswerChecked)
            .with(true, () => "flex")
            .otherwise(() => "none");
        })
        .otherwise(() => "flex")
    );
  }, [inquiryStatus, isReviewChecked, isAnswerChecked]);

  return (
    <S.InquiryItemWrapper
      onClick={() => router.push(`/inquiry/detail`)}
      display={display}
    >
      <S.TextArea>
        <S.SubTitle>
          <S.Date>
            {`${inquiryDate.slice(2, 4)}.${inquiryDate.slice(
              5,
              7
            )}.${inquiryDate.slice(8, 10)}`}
          </S.Date>
          <S.Status
            statusColor={match(inquiryStatus)
              .with("WAIT", () => "WAIT")
              .otherwise(() => "APPROVED")}
          >
            {match(inquiryStatus)
              .with("WAIT", () => "검토 중")
              .otherwise(() => "답변완료")}
          </S.Status>
        </S.SubTitle>
        <S.Title>{title}</S.Title>
      </S.TextArea>
      <S.ImageArea imageUrl={imageUrl} />
    </S.InquiryItemWrapper>
  );
};
export default InquiryItem;
