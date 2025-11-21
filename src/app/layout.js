import { Inter } from 'next/font/google';
import { Navigation } from '@/components/layouts/Navigation';
import { Footer } from '@/components/layouts/Footer';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Template',
  description: 'A modern portfolio template built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Analytics/>
        <SpeedInsights/>
        <Footer />
      </body>
    </html>
  );
}