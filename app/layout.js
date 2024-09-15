import localFont from "next/font/local";
import "./globals.css";
import TopNavbar from "@/Components/Share/TopNavbar";
import CenterNavbar from "@/Components/Share/CenterNavbar";

const gelatoSans = localFont({
  src: "./fonts/GelatoSans-Regular.woff",
  variable: "--font-gelato-sans",
  weight: "100 300 400 600 800",
});

export const metadata = {
  title: "Global Print On Demand Dlatform | Gelato",
  description: "Global print on demand platform website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gelatoSans.variable}  antialiased`}>
        <TopNavbar />
        <CenterNavbar />
        <main className="max-w-screen-lg  xl:max-w-screen-xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
