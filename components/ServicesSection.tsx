import Image from 'next/image';
import { HardHat, ChevronRight } from 'lucide-react';
import { SERVICE_PANELS, buildWhatsAppUrl } from '@/lib/site-config';

export default function ServicesSection() {
  const servicesQuoteUrl = buildWhatsAppUrl(
    'Olá! Gostaria de saber mais sobre os serviços de terraplanagem e construção da Thiago Correia (TC).'
  );

  return (
    <section
      id="servicos"
      aria-label="Nossos Serviços"
      className="relative w-full bg-[#07080a] border-y-[3px] border-[#ffcf00] overflow-hidden shadow-[0_8px_28px_rgba(0,0,0,0.85)]"
    >
      {/* Top-right and bottom-left subtle golden edge accents */}
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none absolute top-0 right-0 w-24 h-1.5 bg-gradient-to-l from-[#ffe548] to-transparent z-20"
      />
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none absolute bottom-0 left-0 w-40 h-1.5 bg-gradient-to-r from-[#ffe548] to-transparent z-20"
      />

      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-stretch lg:min-h-[245px]">
        {/* Left Dark Angled Info Panel */}
        <div className="relative z-20 lg:w-[29%] bg-[#090a0c] px-5 sm:px-7 py-6 sm:py-7 lg:pr-12 flex flex-col justify-center clip-services-left">
          <div className="flex items-center gap-3">
            <HardHat className="w-11 h-11 sm:w-12 sm:h-12 text-[#ffcf00] fill-[#ffcf00]/15 shrink-0 drop-shadow-[0_2px_8px_rgba(255,207,0,0.35)]" />
            <h2 className="font-display font-black italic uppercase tracking-wide leading-[0.94]">
              <span className="block text-white text-[24px] sm:text-[27px]">NOSSOS</span>
              <span className="block text-[#ffd000] text-[30px] sm:text-[34px]">SERVIÇOS</span>
            </h2>
          </div>

          <div
            aria-hidden="true"
            className="w-24 h-[3px] bg-gradient-to-r from-[#ffcf00] to-transparent rounded-full mt-2.5 mb-3"
          />

          <p className="text-[14px] sm:text-[15px] leading-[1.4] text-gray-100 mb-5 max-w-[300px]">
            Da terraplanagem à construção, oferecemos soluções completas para sua obra, com
            eficiência e segurança.
          </p>

          <div>
            <a
              href={servicesQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#ffe23b] via-[#ffbe00] to-[#e08900] px-5 py-2 text-[#0c0c0c] shadow-[inset_0_2px_2px_rgba(255,255,255,0.7),0_5px_14px_rgba(0,0,0,0.7)] hover:brightness-110 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="font-display italic font-black text-[15px] sm:text-[16px] tracking-wide uppercase whitespace-nowrap">
                SAIBA MAIS
              </span>
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#111] text-[#ffd000] shrink-0">
                <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            </a>
          </div>
        </div>

        {/* Right 4 Slanted Service Photo Panels */}
        <div className="lg:w-[75%] lg:-ml-12 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-0 p-3 lg:p-0 bg-[#07080a]">
          {SERVICE_PANELS.map((panel, index) => {
            const isLast = index === SERVICE_PANELS.length - 1;
            return (
              <div
                key={panel.id}
                className={`relative h-[155px] sm:h-[195px] lg:h-auto lg:-ml-7 first:lg:ml-0 bg-[#121316] p-[2px] ${
                  isLast ? 'clip-service-panel-last' : 'clip-service-panel'
                }`}
              >
                <div
                  className={`relative w-full h-full overflow-hidden bg-[#0a0b0d] ${
                    isLast ? 'clip-service-panel-last' : 'clip-service-panel'
                  }`}
                >
                  <Image
                    src={panel.imageSrc}
                    alt={panel.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    referrerPolicy="no-referrer"
                    className="object-cover object-center scale-[1.24]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
