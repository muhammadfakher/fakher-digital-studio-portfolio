import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Fakher Nadeem — Digital Creator & Developer",
  description:
    "Video editing, graphic design, websites and AI-powered digital solutions by Muhammad Fakher Nadeem.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
