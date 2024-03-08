"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "./style";
import "./style/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const MisoMetadata: Metadata = {
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
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
