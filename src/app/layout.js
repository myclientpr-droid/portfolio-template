import {
  Inter
} from 'next/font/google';
import {
  Navigation
} from '@/components/layouts/Navigation';
import {
  Footer
} from '@/components/layouts/Footer';
import './globals.css';
import {
  SpeedInsights
} from "@vercel/speed-insights/next";
import {
  Analytics
} from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter( {
  subsets: ['latin']
});

export const metadata = {
  title: 'Writer Noor Aziz',
  description: 'A modern portfolio template built with Next.js',
};

export default function RootLayout( {
  children
}) {
  return (
    <html lang="en">
    <head>
      <meta name="google-site-verification" content="HHEUeoU41cwIxQKZGJ_siRAyE6uPZ6J905DwzDN0ZMY" />

    {/* Google AdSense */}
<meta name="google-adsense-account" content="ca-pub-4649419420895287">

    {/* Google Analytics */}
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-M8T36YDCKY"
      />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-M8T36YDCKY');
      `}
    </Script>
  </head>
  <body className={inter.className}>
    <Navigation />
    <main>{children}</main>
    <Analytics />
    <SpeedInsights />
    <Footer />
  </body>
</html>
);
}