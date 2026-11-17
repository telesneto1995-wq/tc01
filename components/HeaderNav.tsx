'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Home, Settings, Image as ImageIcon, Handshake, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Início', href: '#inicio', icon: Home },
  { id: 'servicos', label: 'Serviços', href: '#servicos', icon: Settings },
  { id: 'galeria', label: 'Galeria', href: '#galeria', icon: ImageIcon },
  { id: 'sobre', label: 'Sobre Nós', href: '#sobre', icon: Handshake },
  { id: 'contato', label: 'Contato', href: '#contato', icon: MapPin },
];

export default function HeaderNav() {
  const [activeId, setActiveId] = useState<string>('inicio');

  const handleNavClick = (id: string) => {
    setActiveId(id);
  };

  return (
    <header
      id="inicio"
      className="relative z-30 w-full bg-[#050607] border-b border-amber-500/25 shadow-[0_6px_24px_rgba(0,0,0,0.85)]"
    >
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 pl-3 sm:pl-6 pr-0 py-2 lg:py-0 lg:min-h-[88px]">
        {/* Top Row on Mobile / Left + Center on Desktop */}
        <div className="flex items-center justify-between lg:justify-start gap-3 lg:gap-8 pr-3 lg:pr-0">
          <a
            href="#inicio"
            onClick={() => handleNavClick('inicio')}
            className="shrink-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcf00] rounded"
            aria-label={`${SITE_CONFIG.brandMark} ${SITE_CONFIG.companyName} — ${SITE_CONFIG.tagline}`}
          >
            <Image
              src="/assets/extracted/logo_tc_header_clean.png"
              alt="TC Thiago Correia — Locação de Máquinas e Construtora"
              width={392}
              height={168}
              priority
              referrerPolicy="no-referrer"
              className="h-[52px] sm:h-[64px] lg:h-[76px] w-auto object-contain"
            />
          </a>

          {/* Mobile Location Pill Ribbon */}
          <div className="lg:hidden flex items-center gap-1.5 bg-gradient-to-r from-[#ffd400] to-[#f59e0b] text-[#111] px-3 py-1.5 clip-location-ribbon shadow-md shrink-0">
            <MapPin className="w-4 h-4 fill-[#111] text-[#ffd400] shrink-0" />
            <span className="font-script text-sm font-bold whitespace-nowrap">
              {SITE_CONFIG.location}
            </span>
          </div>
        </div>

        {/* Center Navigation */}
        <nav
          aria-label="Navegação principal"
          className="flex items-center justify-around sm:justify-center gap-2 sm:gap-7 lg:gap-9 px-2 lg:px-4 py-1.5 lg:py-0 border-t border-white/10 lg:border-t-0"
        >
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`group relative flex flex-col items-center justify-center gap-1 px-1.5 sm:px-2 py-1.5 text-[11px] sm:text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffcf00] rounded ${
                  isActive ? 'text-[#ffd000]' : 'text-gray-200 hover:text-[#ffd000]'
                }`}
              >
                <Icon
                  className={`w-4 h-4 sm:w-[19px] sm:h-[19px] transition-transform duration-150 group-hover:scale-105 ${
                    isActive ? 'text-[#ffd000]' : 'text-[#e5a800] group-hover:text-[#ffd000]'
                  }`}
                />
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-1 right-1 h-[2.5px] rounded-full bg-[#ffd000] transition-opacity duration-150 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Angled Location Ribbon */}
        <div className="hidden lg:flex items-center self-stretch">
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#ffd400] via-[#ffc400] to-[#f29d00] text-[#111] pl-8 pr-7 py-4 clip-location-ribbon shadow-[inset_0_1px_1px_rgba(255,255,255,0.65)]">
            <MapPin className="w-5 h-5 fill-[#111] text-[#ffd400] shrink-0" />
            <span className="font-script text-[22px] leading-none whitespace-nowrap">
              {SITE_CONFIG.location}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
