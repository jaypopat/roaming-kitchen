import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body className={inter.className}>
          <main>{children}</main>
      </body>
    </>
  );
}