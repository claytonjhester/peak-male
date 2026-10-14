import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peak Male — Human potential, examined",
  description: "An evidence-aware research wire for body, mind, capability and culture.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
