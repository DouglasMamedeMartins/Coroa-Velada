import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "@/global";

export const metadata: Metadata = {
  title: "Ficha RPG",
  description: "Ficha de personagem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
