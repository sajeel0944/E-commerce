// import type { Metadata } from "next";
// import localFont from "next/font/local";

import Nav from "../Nav";
import Footer from "../footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      >
        <div className="bg-white">
        <Nav></Nav>
        {children}
        <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
