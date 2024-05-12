import { FollowingPointerDemo } from "@/components/shared/FolowingCard";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Hero } from "@/components/shared/Hero";
import StartNow from "@/components/shared/StartNow";
import { AnimatedTooltipPreview } from "@/components/shared/TooltipSection";


export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <StartNow />
      <AnimatedTooltipPreview />
      <FollowingPointerDemo />
      <Footer />
    </div>
  );
}
