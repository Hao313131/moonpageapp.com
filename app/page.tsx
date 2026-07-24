import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { VoiceFeature } from "@/components/home/VoiceFeature";
import { Benefits } from "@/components/home/Benefits";
import { FreeTier } from "@/components/home/FreeTier";
import { StoryShowcase } from "@/components/home/StoryShowcase";
import { Trust } from "@/components/home/Trust";
import { Pricing } from "@/components/home/Pricing";
import { Faq } from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VoiceFeature />
        <Benefits />
        <FreeTier />
        <StoryShowcase />
        <Trust />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
