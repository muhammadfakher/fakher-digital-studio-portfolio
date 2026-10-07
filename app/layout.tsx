import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fakher Nadeem | Video Editor, Graphic Designer & AI Video Creator",
  description:
    "Portfolio of Fakher Nadeem, a video editor, graphic designer and AI video creator in Karachi, Pakistan. Available for fully remote full-time and part-time roles.",
  keywords: [
    "Fakher Nadeem",
    "Video Editor",
    "Graphic Designer",
    "AI Video Creator",
    "Remote Video Editor",
    "360 Tech Solution",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
