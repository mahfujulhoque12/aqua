import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google"; // Import both fonts
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

// Import Open Sans and Roboto Google fonts
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "AQUA Consultant & Associates",
  description: "Generated by create next app",
  icons: {
    icon: '/logo.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${roboto.variable} antialiased`} // Apply both fonts
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
