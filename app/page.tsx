import CinematicHero from "@/components/portfolio/CinematicHero";
import StoryScene from "@/components/portfolio/StoryScene";
import Navbar from "@/components/portfolio/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CinematicHero />
      <StoryScene />
    </main>
  );
}
