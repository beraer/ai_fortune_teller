import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Wróżka Helena - Profesjonalne Wróżby Online, Tarot i Numerologia",
  description: "Poznaj odpowiedzi na nurtujące Cię pytania. Profesjonalne wróżby online, czytanie kart Tarota i interpretacje numerologiczne od doświadczonej wróżki.",
  keywords: "wróżby, tarot, numerologia, wróżka, przepowiednie, miłość, przyszłość",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-lato">
        <LanguageProvider>
          <ClientBody>{children}</ClientBody>
        </LanguageProvider>
      </body>
    </html>
  );
}
