import Image from 'next/image';
import {
  ShieldCheck,
  Handshake,
  TrendingUp,
  ChevronRight,
  Instagram,
} from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '@/lib/site-config';

export default function ContactCtaSection() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section
      id="sobre"
      aria-label="Diferenciais, Orçamento e Contatos"
      className="relative w-full bg-industrial-dark border-b border-amber-500/35 py-6 sm:py-7"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1.05fr_0.78fr_1.17fr] items-center gap-6 lg:gap-4">
        {/* Left: 3 Value Pillars */}
        <div className="grid grid-cols-3 divide-x divide-amber-500/20 text-center">
          <div className="px-2 sm:px-3 flex flex-col items-center">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#ffcf00] mb-1.5" />
            <p className="text-[13px] sm:text-[14px] leading-[1.2] text-gray-100">
              <strong className="block font-bold text-white">Qualidade</strong>
              <span>em tudo que faz</span>
            </p>
          </div>

          <div className="px-2 sm:px-3 flex flex-col items-center">
            <Handshake className="w-7 h-7 sm:w-8 sm:h-8 text-[#ffcf00] mb-1.5" />
            <p className="text-[13px] sm:text-[14px] leading-[1.2] text-gray-100">
              <strong className="block font-bold text-white">Parceria</strong>
              <span>que constrói</span>
            </p>
          </div>

          <div className="px-2 sm:px-3 flex flex-col items-center">
            <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-[#ffcf00] mb-1.5" />
            <p className="text-[13px] sm:text-[14px] leading-[1.2] text-gray-100">
              <strong className="block font-bold text-white">Crescimento</strong>
              <span>junto com você</span>
            </p>
          </div>
        </div>

        {/* Center: Solicite Seu Orçamento Agora */}
        <div className="flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full max-w-[330px] bg-gradient-to-b from-[#17191f] via-[#0e1014] to-[#060709] border border-amber-500/40 px-5 py-3.5 text-center clip-cta-panel shadow-[0_8px_22px_rgba(0,0,0,0.8)] hover:border-[#ffd000] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd000]"
          >
            <span className="block font-display italic font-extrabold uppercase text-white text-[18px] sm:text-[21px] leading-none tracking-wide">
              SOLICITE SEU
            </span>
            <span className="block font-display italic font-black uppercase text-[#ffd000] text-[22px] sm:text-[26px] leading-[1.08] tracking-wide mt-0.5 group-hover:brightness-110">
              ORÇAMENTO AGORA!
            </span>
            <span
              aria-hidden="true"
              className="block w-4/5 mx-auto h-[4px] bg-gradient-to-r from-[#ffcf00] via-[#f59e0b] to-transparent brush-underline mt-1.5"
            />
          </a>
        </div>

        {/* Right: WhatsApp & Instagram Action Buttons */}
        <div
          id="contato"
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-end gap-3 lg:pl-5 lg:border-l lg:border-white/25"
        >
          {/* WhatsApp Button with Official Symbol */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Fale Conosco pelo WhatsApp ${SITE_CONFIG.whatsapp.displayPhone}`}
            title={`WhatsApp: ${SITE_CONFIG.whatsapp.displayPhone}`}
            className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-b from-[#2be067] via-[#19c352] to-[#0d8c37] border border-[#72f79d]/60 px-4 py-2.5 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_6px_18px_rgba(16,185,129,0.35)] hover:brightness-110 active:scale-[0.99] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="flex items-center gap-2.5">
              <Image
                src="/assets/extracted/whatsapp_symbol.png"
                alt=""
                width={38}
                height={38}
                referrerPolicy="no-referrer"
                className="w-9 h-9 object-contain shrink-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
              />
              <span className="text-left leading-[1.15]">
                <span className="block font-bold text-[13px] sm:text-[14px] whitespace-nowrap">
                  Fale Conosco
                </span>
                <span className="block font-medium text-[12px] sm:text-[13px] text-white/95 whitespace-nowrap">
                  pelo WhatsApp
                </span>
              </span>
            </span>
            <ChevronRight className="w-4 h-4 text-white shrink-0 stroke-[2.5]" />
          </a>

          {/* Instagram Button in Vibrant Site Yellow-Gold & Orange */}
          <a
            href={SITE_CONFIG.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Siga nosso Instagram ${SITE_CONFIG.instagram.handle}`}
            className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-b from-[#ffe600] via-[#ffb800] to-[#ff7b00] border border-[#fff08a]/80 px-4 py-2.5 text-[#0c0c0c] shadow-[inset_0_2px_2px_rgba(255,255,255,0.75),0_6px_22px_rgba(255,184,0,0.45)] hover:brightness-110 active:scale-[0.99] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0c0c0c]/10 shrink-0">
                <Instagram className="w-7 h-7 text-[#0c0c0c] stroke-[2.25]" />
              </span>
              <span className="text-left leading-[1.15]">
                <span className="block font-semibold text-[13px] sm:text-[14px] whitespace-nowrap">
                  Siga nosso
                </span>
                <span className="block font-extrabold text-[13px] sm:text-[14px] whitespace-nowrap">
                  Instagram
                </span>
              </span>
            </span>
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#111] text-[#ffd000] shrink-0">
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
