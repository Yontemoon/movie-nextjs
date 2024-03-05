

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-slate-700`}>
        <div className="w-screen overflow-x-hidden flex flex-col ">
          <Navbar/>
          <div className="flex flex-col justify-center items-center content-center self-center text-white container">
            {children}
            <Toaster/>
          </div>
        </div>
      </body>
    </html>
  );
}
