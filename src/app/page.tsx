import { HeroSection } from '@/components/marketing/hero-section';
import { HowItWorksSection } from '@/components/marketing/how-it-works-section';
import { BenefitsSection } from '@/components/marketing/benefits-section';
import { PreviewSection } from '@/components/marketing/preview-section';
import { CtaSection } from '@/components/marketing/cta-section';
import { AboutSection } from '@/components/marketing/about-section';

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <AboutSection />
        <PreviewSection />
        {/* <PricingSection /> */}
        <CtaSection />
      </main>
    </>
  );
}
