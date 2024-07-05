import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Header/>
      <body className="flex flex-col min-h-screen">
          <main className='flex-grow'>{children}</main>
      </body>
    <Footer/> 
    </>
  );
}