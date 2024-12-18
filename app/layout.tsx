import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";

export const metadata = {
  title: {
    // 객체일 수 있음
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: "The best moives on the best framework",
  favicon: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
