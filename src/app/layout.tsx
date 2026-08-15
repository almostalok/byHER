import type { Metadata } from 'next';
import { Satisfy, Bebas_Neue, Plus_Jakarta_Sans, Playfair_Display, Space_Grotesk } from 'next/font/google';
import './globals.css';

const satisfy = Satisfy({
  subsets: ['latin'],
  variable: '--font-script',
  weight: ['400'],
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-condensed',
  weight: ['400'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
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
    <html 
      lang="en" 
      className={`${satisfy.variable} ${bebasNeue.variable} ${plusJakarta.variable} ${playfair.variable} ${spaceGrotesk.variable}`}
    >
      <body className="antialiased min-h-screen selection:bg-[#be3519] selection:text-[#ebdcc4] font-display">
        {children}
      </body>
    </html>
  );
}
