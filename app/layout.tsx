

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import NextSessionProvider from "@/provider/NextSessionProvider";
import AccountInfoProvider from "@/provider/AccountInfoProvider";
import Footer from "@/components/Footer";
import { work_sans } from "@/utils/font";


export const metadata: Metadata = {
  title: "Monte Movies",
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
          <body className={`${work_sans.className} bg-backgroundColor`}>
            <div className="w-full flex flex-col">
              <Navbar />
              <div className="flex flex-col justify-center items-center content-center self-center text-white container px-28 ">
                {children}
                <Footer/>
                <Toaster/>
              </div>
            </div>
          </body>
        </AccountInfoProvider>
      </NextSessionProvider>
    </html>
  );
}
