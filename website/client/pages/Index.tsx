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
      <div style={{ height: "1px", backgroundColor: "#D2D8D5", maxWidth: "500px", marginLeft: "60px", position: "relative", zIndex: 0 }} />
      {/* Pricing section */}
      <PricingSection />
      <div style={{ height: "1px", backgroundColor: "#D2D8D5", maxWidth: "500px", marginLeft: "60px", position: "relative", zIndex: 0 }} />
      {/* Hoe zijn wij anders section */}
      <HoeZijnWijAndersSection />
      <div style={{ height: "1px", backgroundColor: "#D2D8D5", maxWidth: "500px", marginLeft: "60px", position: "relative", zIndex: 0 }} />
      {/* Intake inplannen section */}
      <IntakeSection />
    </>
  );
}
