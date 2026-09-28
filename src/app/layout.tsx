import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AIAssistant from "@/components/Global/AIAssistant";
import NetworkStatus from "@/components/Global/NetworkStatus";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VTOP - Student Portal",
  description: "Enhanced Institutional VTOP Portal with AI Academic Assistant",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "VTOP",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/globe.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1B365D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <NetworkStatus />
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
