import type { Metadata } from "next";
import { Bodoni_Moda, Lora } from "next/font/google";
import "./globals.css";

const headingFont = Bodoni_Moda({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bodyFont = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "encantostoreju",
  description:
    "Site demonstrativo de marca com GSAP, responsivo e performático",
  keywords: ["encantostoreju", "GSAP", "Landing", "Next.js", "Tailwind"],
  icons: {
    icon: "/assets/icon.ico",
    shortcut: "/assets/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icon.ico" />
        <link rel="shortcut icon" href="/assets/icon.ico" />
      </head>
      <body className={`${bodyFont.className} ${headingFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
