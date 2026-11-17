import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed, Kaushan_Script } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow-condensed',
});

const kaushanScript = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kaushan',
});

export const metadata: Metadata = {
  title: 'Thiago Correia (TC) — Locação de Máquinas e Construtora | Milagres - Bahia',
  description:
    'Locação de máquinas pesadas e construtora em Milagres - Bahia. Trator de esteira, escavadeira hidráulica, caçambas, muque compactador e obras de qualidade.',
  openGraph: {
    title: 'Thiago Correia (TC) — Locação de Máquinas e Construtora',
    description:
      'Locação de máquinas pesadas e construtora em Milagres - Bahia. Trabalho forte, resultado certo!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thiago Correia (TC) — Locação de Máquinas e Construtora',
    description:
      'Locação de máquinas pesadas e construtora em Milagres - Bahia. Trabalho forte, resultado certo!',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${barlowCondensed.variable} ${kaushanScript.variable}`}
    >
      <body className="font-body antialiased bg-[#060708] text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
