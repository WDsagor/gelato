import localFont from "next/font/local";
import "./globals.css";
import TopNavbar from "@/Components/Share/TopNavbar";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
