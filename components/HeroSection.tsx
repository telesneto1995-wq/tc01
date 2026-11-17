import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/site-config';

export default function HeroSection() {
  const quoteUrl = buildWhatsAppUrl(
    'Olá! Gostaria de fazer um orçamento com a Thiago Correia (TC) — Locação de Máquinas e Construtora.'
  );

  return (
    <section className="relative w-full bg-hero-sunset overflow-hidden border-b border-amber-500/20">
      {/* Subtle earthworks texture at bottom-left */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full lg:w-[50%] h-[58px] opacity-85 overflow-hidden">
        <Image
          src="/assets/extracted/hero_earth_clean.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          referrerPolicy="no-referrer"
          className="object-cover object-bottom"
        />
      </div>

      {/* Left atmospheric contrast scrim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent"
      />

      {/* Right Hero Visual Composition (Desktop background layer) */}
      <div className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-[62%] mask-hero-machines">
        <Image
          src="/assets/extracted/hero_machines_art.png"
          alt="Escavadeira hidráulica, caminhão caçamba amarelo e logotipo TC Thiago Correia ao pôr do sol no canteiro de obras"
          fill
          priority
          sizes="62vw"
          referrerPolicy="no-referrer"
          className="object-cover object-right-bottom"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 pt-8 pb-4 lg:py-12 min-h-[420px] lg:min-h-[470px] flex flex-col justify-center">
        <div className="max-w-[540px]">
          <h1 className="font-script text-[32px] sm:text-[42px] lg:text-[46px] leading-[1.12] tracking-normal drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            <span className="block text-white">Jovem Sonhador</span>
            <span className="block text-[#ffd000]">que não para de Lutar!</span>
          </h1>

          {/* Tapered golden brush stroke */}
          <div
            aria-hidden="true"
            className="w-[88%] max-w-[460px] h-[5px] bg-gradient-to-r from-[#ffcf00] via-[#f59e0b] to-transparent brush-underline mt-2 mb-5"
          />

          {/* Value Proposition Paragraph with vertical gold accent rule */}
          <div className="relative pl-4 sm:pl-5 mb-6 max-w-[470px]">
            <span
              aria-hidden="true"
              className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-[#ffcf00] via-[#f59e0b] to-[#c25900]"
            />
            <p className="text-[15px] sm:text-[17px] leading-[1.45] text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              <strong className="font-bold text-white">Thiago Correia</strong>, construindo sonhos,
              realizando projetos e movimentando{' '}
              <strong className="font-bold text-[#ffd000]">Milagres</strong> e região com qualidade,
              compromisso e trabalho de verdade!
            </p>
          </div>

          {/* Primary Quote CTA Button */}
          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#ffe23b] via-[#ffbe00] to-[#e08900] px-6 sm:px-7 py-2.5 sm:py-3 text-[#0c0c0c] shadow-[inset_0_2px_2px_rgba(255,255,255,0.75),0_8px_22px_rgba(0,0,0,0.75)] hover:brightness-110 active:scale-[0.99] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="font-display italic font-black text-lg sm:text-[22px] tracking-wide uppercase whitespace-nowrap">
              FAÇA SEU ORÇAMENTO
            </span>
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#111] text-[#ffd000] shrink-0">
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </span>
          </a>
        </div>
      </div>

      {/* Mobile / Tablet Machine + TC Artwork Showcase */}
      <div className="lg:hidden relative w-full aspect-[705/490] mt-2 border-t border-amber-500/20">
        <Image
          src="/assets/extracted/hero_machines_art.png"
          alt="Escavadeira hidráulica, caminhão caçamba amarelo e logotipo TC Thiago Correia ao pôr do sol no canteiro de obras"
          fill
          priority
          sizes="100vw"
          referrerPolicy="no-referrer"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
