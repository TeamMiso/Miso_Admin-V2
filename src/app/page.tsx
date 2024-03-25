"use client";

import { Filter, Header } from "@/components";
import * as S from "./style";
import { useEffect, useState } from "react";
import isCheckToken from "@/api/common/isCheckToken";
import { useRouter } from "next/navigation";
import { InquiryItem } from "@/components";
import { InquiryItemTypes } from "@/types";
import { FilterIcon } from "@/assets";

export default function InquiryPage() {
  const router = useRouter();
  const [inquiryItemList, setInquiryItemList] = useState<InquiryItemTypes[]>(
    []
  );
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isReviewChecked, setIsReviewChecked] = useState(true);
  const [isAnswerChecked, setIsAnswerChecked] = useState(true);

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
          <S.FilterButton
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            isFilterOpen={isFilterOpen}
          >
            <FilterIcon />
            <span>필터</span>
          </S.FilterButton>
        </S.InquiryMenu>
        <S.InquiryItemContainer>
          {inquiryItemList.length > 0 &&
            inquiryItemList.map((data) => (
              <InquiryItem
                id={data.id}
                inquiryDate={data.inquiryDate}
                title={data.title}
                imageUrl={data.imageUrl}
                inquiryStatus={data.inquiryStatus}
                isReviewChecked={isReviewChecked}
                isAnswerChecked={isAnswerChecked}
              />
            ))}
        </S.InquiryItemContainer>
      </S.InquiryList>
      <Filter
        isOpen={isFilterOpen}
        isReviewChecked={isReviewChecked}
        setIsReviewChecked={setIsReviewChecked}
        isAnswerChecked={isAnswerChecked}
        setIsAnswerChecked={setIsAnswerChecked}
      />
    </S.InquiryWrapper>
  );
}
