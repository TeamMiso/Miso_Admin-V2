"use client";

import * as S from "./style";

export default function LoginPage() {
  return (
    <S.LoginPageWrapper>
      <S.LoginContainer>
        <S.LoginWrapper>
          <S.TitleContainer>
            <S.Title>미소</S.Title>
            <S.SemiTitle>환경을 웃음으로 바꾸다 :)</S.SemiTitle>
          </S.TitleContainer>
          <S.InputContainer>
            <S.Input placeholder="이메일" type="text" />
            <S.Input placeholder="비밀번호" type="password" />
          </S.InputContainer>
          <S.LoginButton>로그인</S.LoginButton>
        </S.LoginWrapper>
      </S.LoginContainer>
    </S.LoginPageWrapper>
  );
}
