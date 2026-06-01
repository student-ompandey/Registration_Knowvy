import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyAttendSection } from "@/components/WhyAttendSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <WhyAttendSection />
      <BenefitsSection />
      <HighlightsSection />
      <ScheduleSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
