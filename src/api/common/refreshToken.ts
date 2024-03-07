import axios from "axios";

export default function refreshToken() {
  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
  const api = axios.create({
    baseURL: baseURL,
  });

  async function isRefreshToken(): Promise<void> {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      const response = await api.post("refreshToken", {
        refreshToken: refreshToken,
      });

      const newAccessToken = response.data.accessToken;

      localStorage.setItem("accessToken", newAccessToken);
    } catch (error) {
      console.log("토큰 갱신 실패: ", error);
      throw error;
    }
  }
}
