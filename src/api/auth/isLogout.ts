import axios from "axios";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const api = axios.create({
  baseURL: baseURL,
});

export default async function isLogout(router: AppRouterInstance) {
  const logOut = await api.delete("/auth", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  if (logOut.status === 204) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.push("/auth");
  } else if (logOut.status === 404) {
    alert("존재하지 않는 유저 입니다.");
  } else {
    alert("존재하지 않는 토큰입니다.");
    router.push("/auth");
  }
}
