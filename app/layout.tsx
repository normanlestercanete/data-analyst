import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { profile } from '@/data/profile';
import { publicPath } from '@/lib/paths';
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
    default: 'Norman Lester Canete | Power BI Developer & Data Analyst',
    template: '%s',
  },
  description: 'Explore Power BI dashboards and case studies by Norman Lester Canete, a Power BI developer specializing in DAX, Power Query, data modeling, and business reporting.',
  applicationName: 'Norman Lester Canete Portfolio',
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: ['Norman Lester Canete', 'Power BI Developer', 'Data Analyst', 'Business Intelligence', 'DAX', 'Power Query'],
  ...(profile.siteUrl ? { alternates: { canonical: `${profile.siteUrl}/` } } : {}),
  openGraph: {
    title: 'Norman Lester Canete | Power BI Developer & Data Analyst',
    description: 'Power BI dashboards, data models, and case studies spanning workplace, revenue, and supply-chain analytics.',
    type: 'website',
    siteName: 'Norman Lester Canete',
    ...(profile.siteUrl ? { url: `${profile.siteUrl}/`, images: [{ url: `${profile.siteUrl}/og.png`, width: 1200, height: 630, alt: 'Norman Lester Canete Power BI developer portfolio' }] } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Norman Lester Canete | Power BI Developer & Data Analyst',
    description: 'Explore Power BI dashboards, data models, and business intelligence case studies.',
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
      <head>
        <link rel="icon" href={publicPath('/favicon.png')} type="image/png" />
        {profile.siteUrl && <link rel="sitemap" type="application/xml" href={`${profile.siteUrl}/sitemap.xml`} />}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
