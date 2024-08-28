import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import CursorCircle from '@/components/CursorCircle';

export const metadata = {
  metadataBase: new URL('https://www.minestonediam.com'),
  title: {
    template: '%s',
    default: 'Minestone Diam',
  },
  keywords: [
    'Minestone Diam', , 'diamonds', 'ethical diamonds', 'sustainable diamonds',
    'diamond sourcing', 'diamond industry', 'Surat diamonds',
    'quality diamonds', 'trusted diamond partner', 'diamond trade'
  ],
  openGraph: {
    title: 'Minestone Diam',
    description: 'Explore Minestone Diam, your trusted partner in ethically sourced diamonds.',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Minestone Diam - Ethically Sourced Diamonds',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" relative scroll-smooth antialiased">
        <CursorCircle />

        <main className=" relative flex flex-col min-h-screen ">
          <Navbar />
          <div className=" flex-grow flex-1 min-h-[100vh]">{children}</div>
          <Footer />
        </main>
        <Analytics />
      </body>
    </html>
  );
}