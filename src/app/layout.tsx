import type { Metadata } from "next";
import Provider from "./provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/globals.css";
import "./styles/font.css";

export const metadata: Metadata = {
  title: "Miso Admin",
  description: "미소의 관리자 전용 페이지입니다.",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
          <ToastContainer position="top-right" theme="light" autoClose={1500} />
        </Provider>
      </body>
    </html>
  );
}
