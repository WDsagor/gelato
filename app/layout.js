import localFont from "next/font/local";
import "./globals.css";
import TopNavbar from "@/Components/Share/Navbar/TopNavbar";
import CenterNavbar from "@/Components/Share/Navbar/CenterNavbar";
import MainMenu from "@/Components/Share/Navbar/Mainmenu";

const gelatoSans = localFont({
  src: "./fonts/GelatoSans-Regular.woff",
  variable: "--font-gelato-sans",
  weight: "100 200 300 400 500 600 800",
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
        <div className="sticky top-0 z-30">
          <CenterNavbar />
          <MainMenu />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
