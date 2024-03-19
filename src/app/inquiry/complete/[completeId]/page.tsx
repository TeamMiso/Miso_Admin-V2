"use client";

import Check from "@/assets/svg/Check";
import * as S from "./style";
import { Header } from "@/components";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { InquiryDetailTypes } from "@/types";
import isInquiryDetail from "@/api/inquiry/isInquiryDetail";

export default function CompletePage() {
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
  const id = Number(pathname.slice(18));

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
    <S.CompleteWrapper>
      <Header />
      <S.CompleteContainer>
        <S.CompleteBox>
          <Check />
          <S.TextBox>
            <S.Title>답변완료</S.Title>
            <S.SemiTitle>{inquiryDetail.title}</S.SemiTitle>
            <S.Date>
              {" "}
              {`${inquiryDetail.inquiryDate.slice(
                2,
                4
              )}.${inquiryDetail.inquiryDate.slice(
                5,
                7
              )}.${inquiryDetail.inquiryDate.slice(8, 10)}`}
            </S.Date>
          </S.TextBox>
          <S.CompleteButton onClick={() => router.push("/")}>
            메인 화면으로
          </S.CompleteButton>
        </S.CompleteBox>
      </S.CompleteContainer>
    </S.CompleteWrapper>
  );
}
