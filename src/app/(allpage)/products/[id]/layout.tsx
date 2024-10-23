import type { Metadata } from "next";
import localFont from "next/font/local";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {/* <div className="bg-green-300 h-96"> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
