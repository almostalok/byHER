import type { Metadata } from 'next';
import { Archivo_Narrow, Bricolage_Grotesque, Hanken_Grotesk, Bebas_Neue, Satisfy } from 'next/font/google';
import './globals.css';

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-condensed',
  weight: ['400'],
  display: 'swap',
});

const satisfy = Satisfy({
  subsets: ['latin'],
  variable: '--font-script',
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'byHER | Led by her. Built for all.',
  description: 'A collective of builders, breakers, and thinkers under the DEAD CODE SOCIETY. Less talk about tech, more actually building tech.',
  keywords: [
    'byHER',
    'DEAD CODE SOCIETY',
    'Women in Tech',
    'Makers Collective',
    'Analog Tech Zine',
    'Zero to One',
    'Software Engineering',
    'Hardware & Web3'
  ],
  openGraph: {
    title: 'byHER | Led by her. Built for all.',
    description: 'A collective of builders, breakers, and thinkers under the DEAD CODE SOCIETY. Less talk about tech, more actually building tech.',
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
      className={`${archivoNarrow.variable} ${bricolageGrotesque.variable} ${hankenGrotesk.variable} ${bebasNeue.variable} ${satisfy.variable} light`}
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="antialiased min-h-screen bg-[#fff8f7] text-[#241918] selection:bg-[#9e4037] selection:text-[#ffffff] font-body-md">
        {children}
      </body>
    </html>
  );
}
