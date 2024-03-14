"use client";

import { Header } from "@/components";
import * as S from "./style";
import { useEffect, useState } from "react";
import isCheckToken from "@/api/common/isCheckToken";
import { useRouter } from "next/navigation";
import { InquiryItem } from "@/components";
import { InquiryItemType } from "@/types";

export default function InquiryPage() {
  const router = useRouter();
  const [inquiryItemList, setInquiryItemList] = useState<InquiryItemType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await isCheckToken(router);
        setInquiryItemList(data.inquiryList);
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
        {inquiryItemList.length > 0 &&
          inquiryItemList.map((data) => (
            <InquiryItem 
            id={data.id} 
            inquiryDate={data.inquiryDate}
            title={data.title}
            imageUrl={data.imageUrl}
            inquiryStatus={data.inquiryStatus}
            />
          ))}
      </S.InquiryList>
    </S.InquiryWrapper>
  );
}
