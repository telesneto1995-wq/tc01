import Image from 'next/image';
import { Check } from 'lucide-react';
import { MACHINE_CARDS, SERVICE_CHECKLIST, buildWhatsAppUrl } from '@/lib/site-config';

export default function MachinesSection() {
  return (
    <section
      id="galeria"
      aria-label="Máquinas e Equipamentos"
      className="relative w-full bg-industrial-dark py-6 sm:py-7 border-b border-amber-500/20"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-6 lg:gap-4 items-center">
        {/* 5 Slanted Equipment Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-1">
          {MACHINE_CARDS.map((machine) => (
            <a
              key={machine.id}
              href={buildWhatsAppUrl(
                `Olá! Gostaria de solicitar um orçamento para ${machine.quoteSubject}.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd000] rounded"
            >
              {/* Outer Gold Slanted Frame */}
              <div className="bg-gradient-to-b from-[#d69c18] via-[#ffcf24] to-[#6e4b05] p-[1.5px] clip-machine-frame shadow-[0_8px_20px_rgba(0,0,0,0.85)] transition-transform duration-150 group-hover:-translate-y-0.5">
                <div className="bg-[#0b0c0e] clip-machine-frame flex flex-col overflow-hidden">
                  {/* Machine Photo */}
                  <div className="relative w-full h-[108px] sm:h-[112px] lg:h-[98px] bg-[#0d0e11] overflow-hidden">
                    <Image
                      src={machine.imageSrc}
                      alt={machine.imageAlt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      referrerPolicy="no-referrer"
                      className="object-cover object-center scale-[1.08] transition-transform duration-200 group-hover:scale-[1.13]"
                    />
                  </div>

                  {/* Dark Label Footer */}
                  <div className="min-h-[46px] px-3 py-1.5 bg-gradient-to-b from-[#17191d] to-[#08090b] border-t border-amber-500/45 flex flex-col items-center justify-center text-center">
                    {machine.titleLines.map((line, idx) => (
                      <span
                        key={idx}
                        className="font-display font-bold uppercase text-white text-[12px] sm:text-[13px] leading-[1.12] tracking-wide group-hover:text-[#ffd000] transition-colors"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Right Vertical Checklist */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 lg:pl-3">
          {SERVICE_CHECKLIST.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-b from-[#ffe23b] to-[#e08900] text-[#0c0c0c] shrink-0 shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                <Check className="w-3.5 h-3.5 stroke-[3.5]" />
              </span>
              <span className="text-[14px] sm:text-[15px] font-medium text-gray-100 whitespace-nowrap">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
