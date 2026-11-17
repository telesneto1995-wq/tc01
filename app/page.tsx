import HeaderNav from '@/components/HeaderNav';
import HeroSection from '@/components/HeroSection';
import MachinesSection from '@/components/MachinesSection';
import ServicesSection from '@/components/ServicesSection';
import ContactCtaSection from '@/components/ContactCtaSection';
import FooterSection from '@/components/FooterSection';

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#060708] text-white flex flex-col">
      <HeaderNav />
      <main className="flex-1">
        <HeroSection />
        <MachinesSection />
        <ServicesSection />
        <ContactCtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
