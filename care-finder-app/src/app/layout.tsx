import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from '../components/Bootstrap';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Care Home Finder",
  description: "Developed By John ogheneochuko for third semester examination..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container-fluid'>
          <Navbar />
          <div className='content'>{children}</div>

        </div>
      <BootstrapClient />
      </body>
    </html>
  );
}
