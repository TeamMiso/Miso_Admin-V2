import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { toast } from "react-toastify";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const api = axios.create({
  baseURL: baseURL,
});

export default async function isLogout(router: AppRouterInstance) {
  const logout = await api.delete("/auth", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  if (logout.status === 204) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    toast.success("로그아웃 했습니다.");
    router.push("/auth");
  } else if (logout.status === 404) {
    toast.info("존재하지 않는 유저 입니다.");
  } else if (logout.status === 500) {
    router.push("/auth");
  } else {
    toast.info("존재하지 않는 토큰입니다.");
  }
}
