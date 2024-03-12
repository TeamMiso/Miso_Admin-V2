"use client";

import { MisoIcon } from "@/assets/svg";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.MenuContainer>
        <S.IconBox>
          <MisoIcon />
          MISO
        </S.IconBox>
        <S.LogOutButton>로그아웃</S.LogOutButton>
      </S.MenuContainer>
    </S.HeaderWrapper>
  );
};
export default Header;
