import "@/shared/styles/reset.css";
import * as styles from "./style.css";
import type { Metadata } from "next";
import Header from "@/shared/layout/Header";
import Footer from "@/shared/layout/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
