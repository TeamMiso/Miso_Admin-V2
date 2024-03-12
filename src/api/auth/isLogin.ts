import axios from "axios";
import isRefreshToken from "../common/isRefreshToken";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "react-toastify";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const api = axios.create({
  baseURL: baseURL,
});

export default async function isLogin(
  email: string,
  pw: string,
  router: AppRouterInstance
) {
  try {
    const response = await api.post("/auth/signIn", {
      email: email,
      password: pw,
    });

    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem(
        "refreshToken",
        "Bearer " + response.data.refreshToken
      );
      const { data } = await api.get("/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (data.role === "ROLE_ADMIN") {
        toast.success("로그인에 성공하셨습니다.");
        router.push("/inquiry");
      } else {
        toast.error("관리자 계정이 아닙니다.");
      }
    } else {
      toast.error("등록되지 않은 회원입니다.");
    }
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      try {
        await isRefreshToken();

        const response = await api.post("/auth/signIn", {
          email: email,
          password: pw,
        });

        if (response.status === 200) {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
        } else {
          toast.error("등록되지 않은 회원입니다.");
        }
      } catch (refreshError) {
        toast.error("토큰 갱신 및 로그인 실패");
      }
    } else if (error.response && error.response.status === 404) {
      toast.info("이메일과 암호가 일치하지 않습니다.");
    }
  }
}
