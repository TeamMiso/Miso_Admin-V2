"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "./style";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
