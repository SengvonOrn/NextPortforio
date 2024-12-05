import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsivNavbar from "@/components/Home/Navbar/ResponsivNavbar";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Sengvon Portfolio",
  description: "protfolio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={sora.className}>
        <ResponsivNavbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
