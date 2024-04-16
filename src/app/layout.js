import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Minestone Diam",
  description: "Minestone Diam",
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

      </body>
    </html>
  );
}