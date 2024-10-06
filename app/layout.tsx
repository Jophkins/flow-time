import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
  weight: ['100', '400', '500', '700']
})

export const metadata: Metadata = {
  title: "Flow Time",
  description: "Productivity app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
