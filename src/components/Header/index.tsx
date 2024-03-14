"use client";

import { MisoIcon } from "@/assets/svg";
import * as S from "./style";
import { useState } from "react";
import { Modal } from "@/components";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <S.HeaderWrapper>
      <S.MenuContainer>
        <S.IconBox>
          <MisoIcon />
          MISO
        </S.IconBox>
        <S.LogOutButton onClick={openModal}>로그아웃</S.LogOutButton>
      </S.MenuContainer>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={"로그아웃 하시겠습니까?"}
        content1={"정말로 로그아웃 하시겠습니까?"}
        content2={""}
        button={"로그아웃"}
        id={""}
        mainText={""}
      />
    </S.HeaderWrapper>
  );
};
export default Header;
