import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';

export default function FooterSection() {
  return (
    <footer className="relative w-full bg-[#050607] py-6 sm:py-7 border-t border-amber-500/20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-4">
        {/* Left: Milagres - Bahia + Nossa terra, nosso orgulho! */}
        <div className="flex items-center justify-center md:justify-start gap-3 md:border-r md:border-amber-500/45 md:pr-6">
          <MapPin className="w-9 h-9 sm:w-10 sm:h-10 text-[#ffd000] fill-[#ffd000]/20 shrink-0" />
          <div>
            <p className="font-display font-bold text-[24px] sm:text-[26px] leading-none text-white tracking-tight">
              {SITE_CONFIG.location}
            </p>
            <p className="font-script text-[#ffd000] text-[18px] sm:text-[20px] leading-tight mt-0.5">
              Nossa terra, nosso orgulho!
            </p>
          </div>
        </div>

        {/* Center: TC Thiago Correia Logo */}
        <div className="flex justify-center md:border-r md:border-amber-500/45 md:px-6">
          <Image
            src="/assets/extracted/logo_tc_footer.png"
            alt="TC Thiago Correia — Locação de Máquinas e Construtora"
            width={355}
            height={145}
            referrerPolicy="no-referrer"
            className="h-[72px] sm:h-[84px] w-auto object-contain"
          />
        </div>

        {/* Right: Construindo um futuro melhor, juntos! */}
        <div className="flex flex-col items-center md:items-end justify-center text-center md:text-right">
          <p className="font-script text-white text-[22px] sm:text-[26px] leading-[1.15]">
            Construindo um futuro
            <br />
            melhor, juntos!
          </p>
          <span
            aria-hidden="true"
            className="block w-48 h-[4px] bg-gradient-to-r from-[#ffcf00] via-[#f59e0b] to-transparent brush-underline mt-1.5"
          />
        </div>
      </div>
    </footer>
  );
}
