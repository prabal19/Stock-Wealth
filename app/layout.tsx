import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Provider } from "@/components/helper/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stockwealth.us/"),
  title: { default: "Stock Wealth", template: `%s | Nexus News` },
  description: "Stay updated with the latest tech and global news.",
  openGraph: {
    url: "/",
    title: "Stock Wealth",
    description: "",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Wealth",
    description: "",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo2.png", 
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>

  <Header />
        {children}
        <div className="h-16">
          <Footer />
        </div>
        </Provider>
      
      </body>
    </html>
  );
}
