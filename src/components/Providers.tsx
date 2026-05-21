"use client";
import { GlobalStyle } from "@/global";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
