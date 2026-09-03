import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { profile } from '@/data/profile';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  ...(profile.siteUrl ? { metadataBase: new URL(profile.siteUrl) } : {}),
  title: {
    default: 'Norman Lester Canete — Power BI & Business Intelligence Specialist',
    template: '%s',
  },
  description: 'Power BI, Business Intelligence, DAX, Power Query, data modeling, KPI design, and reporting automation by Norman Lester Canete.',
  applicationName: 'Norman Lester Canete Portfolio',
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: ['Norman Lester Canete', 'Power BI Specialist', 'Power BI Developer', 'DAX Specialist', 'Data Analyst', 'Business Intelligence', 'Power BI Philippines'],
  ...(profile.siteUrl ? { alternates: { canonical: profile.siteUrl } } : {}),
  openGraph: {
    title: 'Norman Lester Canete — Power BI & Business Intelligence Specialist',
    description: 'Turning complex business data into clear, dependable Power BI reporting and decision-support systems.',
    type: 'website',
    siteName: 'Norman Lester Canete',
    ...(profile.siteUrl ? { url: profile.siteUrl, images: [{ url: `${profile.siteUrl}/og.png`, width: 1200, height: 630, alt: 'Norman Lester Canete — Power BI & Business Intelligence Specialist' }] } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Norman Lester Canete — Power BI & Business Intelligence Specialist',
    description: 'Turning complex business data into clear, dependable Power BI reporting and decision-support systems.',
    ...(profile.siteUrl ? { images: [`${profile.siteUrl}/og.png`] } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
