import  { Header } from "@/components/Header";
import NavBarLateral from "@/components/NavBarLateral";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SGV - Sistema de Gestão de Vendas",
  description: "App Gestor de Vendas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning={true}>
      <script src="//code.jivosite.com/widget/VmBEDuFv7H" async></script>

      <body
        cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-gray-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Header />
            <NavBarLateral />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
