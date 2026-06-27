import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier Nume | Design Agency",
  description:
    "A premium design agency crafting editorial digital experiences for ambitious startups and enterprise brands.",
  keywords: ["Design Agency", "UI/UX", "Web Development", "Brand Identity", "Next.js"],
  openGraph: {
    title: "Atelier Nume | Premium Design Agency",
    description: "Crafting editorial digital experiences for ambitious startups and enterprise brands.",
    type: "website",
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{const t=localStorage.getItem('atelier-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
