import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import Image from "next/image";
import { Background } from "@/components/background";

const languages = ["pl", "en"];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ostatni dzwonek",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Background />

        {children}
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
