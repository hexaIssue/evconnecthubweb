import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EV Connect Hub",
  description:
    "EV Connect Hub: Your Ultimate EV Charging Solution. Find, Reserve, and Share Electric Vehicle Charging Points with Ease. Join the EV Revolution Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
