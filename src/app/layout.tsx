import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/petronyx/Header";
import CookieNotice from "@/components/petronyx/CookieNotice";
import Footer from "@/components/petronyx/Footer";

export const metadata: Metadata = {
  title: "PETRONYX GLOBAL",
  description: "Energy Supply. Global Reach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Petronyx" />
        <link rel="stylesheet" href="https://use.typekit.net/gdj5hiw.css" />
      </head>
      <body className="app-like antialiased tracking-tight leading-snug">
        <Header />
        {children}
        <CookieNotice />
        <Footer />
      </body>
    </html>
  );
}
