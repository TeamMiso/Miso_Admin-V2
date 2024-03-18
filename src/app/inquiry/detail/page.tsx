"use client";

import { Header, Answer } from "@/components";
import * as S from "./style";
import { useRouter } from "next/navigation";

export default function DetailPage() {
  const router = useRouter();
  return (
    <S.DetailWrapper>
      <Header />
      <S.DetailContainer>
        <S.BackText onClick={() => router.push("/")}>{"< 돌아가기"}</S.BackText>
        <div>
          <S.Title>유색 페트병이 등록되어 있지 않습니다.</S.Title>
          <div>
            <S.SemiTitle>23.12.19</S.SemiTitle>
            <S.SemiTitle>검토중</S.SemiTitle>
          </div>
        </div>
        <S.MainContainer>
          <S.MainText>
            와~ 희철이! 내 동생 도희철이~ 와 이라십니까 형님? 니가 직접 가라!
            응? 니가 가서 우리 2공수 아들 모조리 델고 온나. 뭐랍니까? 웃어? 이
            새끼 봐라… 잠깐만 잠깐만, 야 야 야 어어어! 놔 봐라 쫌! 안 쏜다! 야
            도희철 일루 와, 앞으로 와 이 스끼야! 총 잡아. 총 잡아! 니가 가기
            싫으모 내 심장에다가 팍 쏴 삐라. 쏘라고!
          </S.MainText>
          <S.MainImage />
        </S.MainContainer>
        <Answer />
      </S.DetailContainer>
    </S.DetailWrapper>
  );
}
