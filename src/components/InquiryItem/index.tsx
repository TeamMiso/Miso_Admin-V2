"use client";

import { InquiryItemType } from "@/types";
import * as S from "./style";
import { match } from "ts-pattern";
import { useRouter } from "next/navigation";

const InquiryItem = ({
  id,
  inquiryDate,
  title,
  imageUrl,
  inquiryStatus,
}: InquiryItemType) => {
  const router = useRouter();

  return (
    <S.InquiryItemWrapper onClick={() => router.push(`/inquiry/detail`)}>
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
