import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acadex",
  description: "Acadex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        {/* 🔥 GREEN BACKGROUND LAYER */}
        <div className="mt-16 absolute top-0 left-0 w-full h-1/2 -z-10 bg-green-100" />

        {/* CONTENT */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
