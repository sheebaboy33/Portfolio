import { Inter } from "next/font/google";
import "../app.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sharm Fernando",
  description: "Welcome to my Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
