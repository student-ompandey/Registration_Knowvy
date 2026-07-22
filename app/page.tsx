import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
import { AboutSection } from "@/components/AboutSection";
import { WhatWeDo } from "@/components/WhatWeDo";
import { PastEvents } from "@/components/PastEvents";
import { GallerySection } from "@/components/GallerySection";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Achievements } from "@/components/Achievements";
import { JoinUsSection } from "@/components/JoinUsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground scroll-smooth transition-colors duration-500 relative">
      <MouseGlow />
      <Navbar />
      {/* 1. Hero */}
      <HeroSection />
      {/* 2. Partners / Trusted By */}
      <PartnersSection />
      {/* 3. About Us */}
      <AboutSection />
      {/* 4. What We Do */}
      <WhatWeDo />
      {/* 5. Past Events */}
      <PastEvents />
      {/* 6. Gallery */}
      <GallerySection />
      {/* 7. Our Team */}
      <Team />
      {/* 8. Testimonials & Alumni */}
      <Testimonials />
      {/* 9. Achievements & Milestones */}
      <Achievements />
      {/* 11. Join Us / CTA */}
      <JoinUsSection />
      {/* 12. FAQ */}
      <FAQSection />
      {/* 13. Contact */}
      <ContactSection />
      {/* 14. Footer */}
      <Footer />
    </main>
  );
}
