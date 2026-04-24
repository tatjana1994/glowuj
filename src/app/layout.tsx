import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Glowuj',
    template: '%s | Glowuj',
  },
  description:
    'Uploaduj fotografiju lica i tela i dobiješ personalizovanu paletu boja, body shape guide i outfit preporuke.',
  applicationName: 'Glowuj',
  keywords: [
    'style analysis',
    'color palette',
    'body shape',
    'outfit recommendations',
    'AI stylist',
    'analiza boja',
    'stil',
    'outfit',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Glowuj',
    description:
      'Uploaduj fotografiju lica i tela i dobiješ personalizovanu paletu boja, body shape guide i outfit preporuke.',
    url: siteUrl,
    siteName: 'Glowuj',
    locale: 'sr_RS',
    type: 'website',
    images: [
      {
        url: '/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'Glowuj',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glowuj',
    description: 'Lična stilska analiza',
    images: ['/ogimage.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='sr'>
      <body>
        <div className='flex min-h-screen flex-col'>
          <SiteHeader />
          <main className='flex-1'>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
