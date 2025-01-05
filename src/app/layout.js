import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SahilTechie",
  description: "Sahil Gupta Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          {/* Add your navigation here */}
        </header>
        {children}
        <footer>
          {/* Add your footer here */}
        </footer>
      </body>
    </html>
  );
}
