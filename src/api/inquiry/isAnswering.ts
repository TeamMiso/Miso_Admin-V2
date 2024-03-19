import axios from "axios";
import { toast } from "react-toastify";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export default async function isAnswering(
  router: AppRouterInstance,
  id: number,
  answer: string
): Promise<any> {
  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("엑세스 토큰을 찾지 못했습니다.");
    }

    const response = await api.patch(
      `/inquiry/respond/${id}`,
      {
        answer: answer,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    router.push(`/inquiry/complete/${id}`);

    return response.data;
  } catch (error) {
    toast.error("유효하지 않은 토큰입니다.");
    throw error;
  }
}
