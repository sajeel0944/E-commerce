
import Footer from "@/components/footer";
import Nav from "@/components/Nav";



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
