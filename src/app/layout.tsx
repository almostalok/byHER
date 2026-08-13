import type { Metadata } from 'next';
import { Caveat, Outfit, Inter } from 'next/font/google';
import './globals.css';

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'byHER | Led by Her, Built for All',
  description: 'An organization for women building software and hardware products from zero to one while learning skills and networking. Led by her, built for all.',
  keywords: [
    'byHER',
    'Women in Tech',
    'Hardware & Software',
    'Zero to One',
    'Makers Collective',
    'Embedded Systems',
    'Software Engineering',
    'Networking',
    'Skill Learning'
  ],
  openGraph: {
    title: 'byHER | Led by Her, Built for All',
    description: 'An organization for women building software and hardware products from zero to one while learning skills and networking.',
    type: 'website',
  },
  icons: {
    icon: '/assets/byher_logo_cream.png',
    apple: '/assets/byher_logo_cream.png',
    shortcut: '/assets/byher_logo_cream.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${outfit.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen selection:bg-[#be3519] selection:text-[#ebdcc4]">
        {children}
      </body>
    </html>
  );
}
