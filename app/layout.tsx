import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProviders from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notpadd",
  description: "Create notes and track them using Notpadd today.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/notpadd-dark.svg",
        href: "/notpadd-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/notpadd-light.svg",
        href: "/notpadd-light.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
