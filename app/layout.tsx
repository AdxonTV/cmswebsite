import type { Metadata } from "next";
import "./globals.css";

import { Suspense } from "react";
import Loading from "./components/loading";
import Navbar from "./components/navbar";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}    
  {/* <Navbar></Navbar> */}
    
        <Suspense fallback={<Loading />}> {children}</Suspense>
      </body>
    </html>
  );
}
