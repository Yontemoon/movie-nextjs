

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import { Toaster } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import NextSessionProvider from "@/provider/NextSessionProvider";
import { getServerSession } from "next-auth";
import AccountInfoProvider from "@/provider/AccountInfoProvider";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { work_sans } from "@/utils/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monte Movie - Home",
  description: "Home Page",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">
      <NextSessionProvider>
        <AccountInfoProvider>
          <body className={`${work_sans.className} bg-[#0a2f52]`}>
            <div className="w-screen  flex flex-col ">
              <Navbar />
              <div className="flex flex-col justify-center items-center content-center self-center text-white container px-28">
                {children}
                <Footer/>
                <Toaster />
              </div>
            </div>
          </body>
        </AccountInfoProvider>
      </NextSessionProvider>
    </html>
  );
}
