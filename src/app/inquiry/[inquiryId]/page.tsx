"use client";

import { Header, AnswerText, AnswerInput } from "@/components";
import * as S from "./style";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import isInquiryDetail from "@/api/inquiry/isInquiryDetail";
import { match } from "ts-pattern";
import { InquiryDetailTypes } from "@/types";

export default function DetailPage() {
  const router = useRouter();
  const [inquiryDetail, setInquiryDetail] = useState<InquiryDetailTypes>({
    id: 0,
    inquiryDate: "",
    title: "",
    content: "",
    imageUrl: "",
    inquiryStatus: "",
  });
  const pathname = usePathname();
  const id = pathname.slice(9);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await isInquiryDetail(router, id);
        setInquiryDetail(data);
      } catch (error) {
        console.error("조회 데이터를 가져오는 중 오류 발생:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <S.DetailWrapper>
      <Header />
      <S.DetailContainer>
        <S.BackText onClick={() => router.push("/")}>{"< 돌아가기"}</S.BackText>
        <div>
          <S.Title>{inquiryDetail.title}</S.Title>
          <div>
            <S.Date>
              {`${inquiryDetail.inquiryDate.slice(
                2,
                4
              )}.${inquiryDetail.inquiryDate.slice(
                5,
                7
              )}.${inquiryDetail.inquiryDate.slice(8, 10)}`}
            </S.Date>
            <S.Status
              statusColor={match(inquiryDetail.inquiryStatus)
                .with("WAIT", () => "WAIT")
                .otherwise(() => "APPROVED")}
            >
              {match(inquiryDetail.inquiryStatus)
                .with("WAIT", () => "검토 중")
                .otherwise(() => "답변완료")}
            </S.Status>
          </div>
        </div>
        <S.MainContainer>
          <S.MainText>{inquiryDetail.content}</S.MainText>
          <S.MainImage imageUrl={inquiryDetail.imageUrl} />
        </S.MainContainer>
        {match(inquiryDetail.inquiryStatus)
          .with("WAIT", () => <AnswerInput id={inquiryDetail.id} />)
          .otherwise(() => (
            <AnswerText content={inquiryDetail.content} />
          ))}
      </S.DetailContainer>
    </S.DetailWrapper>
  );
}
