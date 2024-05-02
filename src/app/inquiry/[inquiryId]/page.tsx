"use client";

import { Header, AnswerText, AnswerInput } from "@/components";
import * as S from "./style";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import isInquiryDetail from "@/api/inquiry/isInquiryDetail";
import { match } from "ts-pattern";
import { InquiryDetailTypes } from "@/types";
import isAnswering from "@/api/inquiry/isAnswering";

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
  const [answerContent, setAnswerContent] = useState<string>("");
  const pathname = usePathname();
  const id = Number(pathname.slice(9));

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await isInquiryDetail(router, id);
        const answerData = await isAnswering(router, id);
        setInquiryDetail(data);
        setAnswerContent(answerData.answer);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <S.DetailWrapper>
      <Header />
      <S.DetailContainer>
        <S.MainContainer>
          <S.MainImage imageUrl={inquiryDetail.imageUrl} />
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
                  .with("WAIT", () => true)
                  .otherwise(() => false)}
              >
                {match(inquiryDetail.inquiryStatus)
                  .with("WAIT", () => "검토 중")
                  .otherwise(() => "답변완료")}
              </S.Status>
            </div>
            <S.MainText>{inquiryDetail.content}</S.MainText>
          </div>
        </S.MainContainer>
        {match(inquiryDetail.inquiryStatus)
          .with("WAIT", () => <AnswerInput id={inquiryDetail.id} />)
          .otherwise(() => (
            <AnswerText content={answerContent} />
          ))}
      </S.DetailContainer>
    </S.DetailWrapper>
  );
}
