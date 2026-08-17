import type { Metadata } from "next";
import { HeyGenNav } from "@/components/heygen/HeyGenNav";
import { HeyGenHero } from "@/components/heygen/HeyGenHero";
import { SeriesIntro } from "@/components/heygen/SeriesIntro";
import { RouteMap } from "@/components/heygen/RouteMap";
import { StopAgenda } from "@/components/heygen/StopAgenda";
import { Audience } from "@/components/heygen/Audience";
import { WhyAIVideo } from "@/components/heygen/WhyAIVideo";
import { SeriesMomentum } from "@/components/heygen/SeriesMomentum";
import { HostedBy } from "@/components/heygen/HostedBy";
import { BringToCity } from "@/components/heygen/BringToCity";
import { HeyGenFaq } from "@/components/heygen/HeyGenFaq";
import { FinalCta } from "@/components/heygen/FinalCta";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "HeyGen India RoadShow Series | 9 Cities. One Mission.",
  description:
    "Join the HeyGen India RoadShow Series across 9 cities. Connecting founders, creators, and marketers for real conversations on modern growth and AI video.",
  openGraph: {
    title: "HeyGen India RoadShow Series | 9 Cities. One Mission.",
    description:
      "Join the HeyGen India RoadShow Series across 9 cities. Connecting founders, creators, and marketers for real conversations on modern growth and AI video.",
    images: ["/heygen/posters/series-poster.png"],
  },
};

export default function HeyGenPage() {
  return (
    <div className="theme-heygen">
      <main className="flex min-h-screen flex-col bg-background text-foreground">
        <HeyGenNav />
        <HeyGenHero />
        <SeriesIntro />
        <RouteMap />
        <StopAgenda />
        <Audience />
        <WhyAIVideo />
        <SeriesMomentum />
        <HostedBy />
        <BringToCity />
        <HeyGenFaq />
        <FinalCta />
        <Footer />
      </main>
    </div>
  );
}
