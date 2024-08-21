import { Analytics } from '@vercel/analytics/react';
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

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
    description: 'Explore Minestone Diam, your trusted partner in ethically sourced diamonds.',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" relative scroll-smooth antialiased">

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