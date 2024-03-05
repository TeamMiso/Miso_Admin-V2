"use client";

import { ChangeEvent, useEffect, useState } from "react";
import * as S from "./style";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

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

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <S.LoginPageWrapper>
      <S.LoginContainer>
        <S.LoginWrapper>
          <S.TitleContainer>
            <S.Title>미소</S.Title>
            <S.SemiTitle>환경을 웃음으로 바꾸다 :)</S.SemiTitle>
          </S.TitleContainer>
          <S.InputContainer>
            <S.Input onChange={handleEmail} placeholder="이메일" type="text" />
            <S.ErrorMessageWrap>
              {!emailValid && email.length > 0 && (
                <span>올바른 이메일을 입력해주세요.</span>
              )}
            </S.ErrorMessageWrap>
            <S.Input
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
          <S.LoginButton>로그인</S.LoginButton>
        </S.LoginWrapper>
      </S.LoginContainer>
    </S.LoginPageWrapper>
  );
}
