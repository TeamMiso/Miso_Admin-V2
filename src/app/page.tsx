"use client";

import { Header } from "@/components";
import * as S from "./style";
import { useEffect } from "react";
import isCheckToken from "@/api/common/isCheckToken";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    isCheckToken(router);
  }, []);

  return (
    <S.InquiryWrapper>
      <Header />
    </S.InquiryWrapper>
  );
}
