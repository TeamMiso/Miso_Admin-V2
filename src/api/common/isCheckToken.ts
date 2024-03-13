import axios from "axios";
import { toast } from "react-toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export default async function isCheckToken(
  router: AppRouterInstance
): Promise<void> {
  try {
    const { data } = await api.get("/inquiry/all", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  } catch (error: any) {
    router.push("/auth");
    toast.info("다시 로그인 해주세요.");
  }
}