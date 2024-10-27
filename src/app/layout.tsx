import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
// import { title } from "process";

export const metadata: Metadata={
  title:"SUK Electronic",
  description:"",
  icons:{
    icon:['/picture/ssss11.jpeg']
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className="bg-[url('/picture/bgim1.jpg')] bg-cover [@media(max-width:450px)]:bg-[1200px,650px]"
      >
        {children}
      </body>
    </html>
  );
}
