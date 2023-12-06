import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavBar, Footer } from "./common";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOFTHOTEL",
  description: "Seu buscador de hotéis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <NavBar />
        <div className="max-w-screen-2xl m-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
