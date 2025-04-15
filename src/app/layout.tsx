import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import NavBar from "./NavBar";

import { Theme } from "@radix-ui/themes";
import Footer from "./Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Find A Way",
  description: "Helping you navigate the early years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Theme
          appearance="light"
          accentColor="gray"
          grayColor="gray"
          radius="small"
        >
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
