import type { Metadata } from "next";
import "./globals.css";
import Author from 'next/font/local'


const myFont = Author({
  src: '../../public/fonts/Author-Bold.ttf',
  display: 'swap',
    }
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
