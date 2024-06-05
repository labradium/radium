import { GeistMonoFont, GeistSansFont } from '@/lib/fonts';
import '@/styles/root-layout.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Radium | Empowering Developers.',
  description:
    'Welcome to Radium, the single platform designed to empower developers, whether they are beginners or professionals. Radium offers a comprehensive suite of tools and services crafted to streamline the development process, ensuring a swift and efficient delivery of projects.',
  icons: {
    icon: 'favicon.png',
  },
  openGraph: {
    title: 'Radium | Empowering Developers.',
    description:
      'Welcome to Radium, the single platform designed to empower developers, whether they are beginners or professionals. Radium offers a comprehensive suite of tools and services crafted to streamline the development process, ensuring a swift and efficient delivery of projects.',
    url: 'https://radium.vgseven.com',
    siteName: 'Radium',
    images: [
      {
        url: 'https://odouepjkxheu5esn.public.blob.vercel-storage.com/silver/make-happen.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://odouepjkxheu5esn.public.blob.vercel-storage.com/silver/make-happen.jpg',
        width: 1800,
        height: 1600,
        alt: 'Radium',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radium | Empowering Developers.',
    description:
      'Welcome to Radium, the single platform designed to empower developers, whether they are beginners or professionals. Radium offers a comprehensive suite of tools and services crafted to streamline the development process, ensuring a swift and efficient delivery of projects.',
    images: [
      'https://odouepjkxheu5esn.public.blob.vercel-storage.com/silver/make-happen.jpg',
    ],
  },
  metadataBase: new URL('https://radium.vgseven.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSansFont.variable} ${GeistMonoFont.variable} font-geistSans`}
      suppressHydrationWarning
    >
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
