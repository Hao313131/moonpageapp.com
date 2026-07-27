import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { StoryShowcase } from "@/components/home/StoryShowcase";
import { Trust } from "@/components/home/Trust";
import { Pricing } from "@/components/home/Pricing";
import { GuidePreview } from "@/components/home/GuidePreview";
import { Faq } from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <StoryShowcase />
        <Trust />
        <Pricing />
        <GuidePreview />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
