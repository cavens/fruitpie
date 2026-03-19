import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";
import OverstappenSection from "../components/OverstappenSection";
import PricingSection from "../components/PricingSection";
import HoeZijnWijAndersSection from "../components/HoeZijnWijAndersSection";
import IntakeSection from "../components/IntakeSection";

export default function Index() {
  return (
    <>
      {/* Hero section inside container */}
      <HeroSection />
      {/* Video section full width */}
      <div className="w-screen relative left-[calc(-50vw+50%)]">
        <VideoSection />
      </div>
      {/* Overstappen section */}
      <OverstappenSection />
      {/* Pricing section */}
      <PricingSection />
      {/* Hoe zijn wij anders section */}
      <HoeZijnWijAndersSection />
      {/* Intake inplannen section */}
      <IntakeSection />
    </>
  );
}
