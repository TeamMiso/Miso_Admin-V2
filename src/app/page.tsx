"use client";

import { Header } from "@/components";
import * as S from "./style";
import { useEffect, useState } from "react";
import isCheckToken from "@/api/common/isCheckToken";
import { useRouter } from "next/navigation";

export default function InquiryPage() {
  const router = useRouter();
  const [inquiryData, setInquiryData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await isCheckToken(router);
        setInquiryData(data);
      } catch (error) {
        console.error("조회 데이터를 가져오는 중 오류 발생:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <S.InquiryWrapper>
      <Header />
      <S.InquiryList>
        <S.InquiryMenu>
          <S.Title>문의목록</S.Title>
          <S.FilterButton>필터</S.FilterButton>
        </S.InquiryMenu>
      </S.InquiryList>
    </S.InquiryWrapper>
  );
}
