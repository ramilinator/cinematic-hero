import Navbar from "@/components/portfolio/Navbar";
import StoryScene from "@/components/portfolio/StoryScene";
import Hero from "@/components/portfolio/Hero";
import Hero2 from "@/components/portfolio/Hero2";
import Hero4 from "@/components/portfolio/Hero4";
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
      <CinematicHero />
      <StoryScene />
    </main>
  );
}
