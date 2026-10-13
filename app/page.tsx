import StoryScene from "@/components/portfolio/StoryScene";
import Hero from "@/components/portfolio/Hero";
import CinematicHero from "@/components/portfolio/CinematicHero";
import Homepage from "@/components/portfolio/Homepage";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#03040d] text-white">
      <Hero />
      <CinematicHero />
      <About />
      <Skills />
      <StoryScene />
    </main>
  );
}
