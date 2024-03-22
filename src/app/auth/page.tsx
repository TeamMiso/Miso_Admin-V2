"use client";

import { ChangeEvent, useState } from "react";
import * as S from "./style";
import isLogin from "@/api/auth/isLogin";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Background } from "@/assets";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [pwValid, setPwValid] = useState<boolean>(false);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp(/.{3,}/);
    setPw(e.target.value);
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleLoginClick = (router: AppRouterInstance) => {
    isLogin(email, pw, router);
  };

  return (
    <S.LoginPageWrapper imgUrl={Background}>
      <S.LoginContainer>
        <S.LoginWrapper>
          <S.TitleContainer>
            <S.Title>미소</S.Title>
            <S.SemiTitle>환경을 웃음으로 바꾸다 :)</S.SemiTitle>
          </S.TitleContainer>
          <S.InputContainer>
            <S.Input
              isStatus={!emailValid && email.length > 0}
              onChange={handleEmail}
              placeholder="이메일"
              type="text"
            />
            <S.ErrorMessageWrap>
              {!emailValid && email.length > 0 && (
                <span>올바른 이메일을 입력해주세요.</span>
              )}
            </S.ErrorMessageWrap>
            <S.Input
              isStatus={!pwValid && pw.length}
              onChange={handlePassword}
              placeholder="비밀번호"
              type="password"
            />
            <S.ErrorMessageWrap>
              {!pwValid && pw.length > 0 && (
                <span>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</span>
              )}
            </S.ErrorMessageWrap>
          </S.InputContainer>
          <S.LoginButton onClick={() => handleLoginClick(router)}>
            로그인
          </S.LoginButton>
        </S.LoginWrapper>
      </S.LoginContainer>
    </S.LoginPageWrapper>
  );
}
