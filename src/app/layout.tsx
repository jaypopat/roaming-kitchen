import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/socials";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roaming Kitchen",
  description: "Contact Roaming Kitchen for catering services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <GoogleAnalytics gaId="GTM-PJDHW4K7" />
        <Socials />
        <Footer />
      </body>
    </html>
  );
}
