import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Beat Up Bears</title>
        <meta name="description" content="NFT collection of 8,888 bears" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>     
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
