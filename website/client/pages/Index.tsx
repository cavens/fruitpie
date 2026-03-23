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
      <div className="px-4 sm:px-6 lg:px-[60px]" style={{ position: "relative", zIndex: 0 }}><div style={{ height: "1px", backgroundColor: "#D2D8D5", maxWidth: "min(500px, 45vw)" }} /></div>
      {/* Pricing section */}
      <PricingSection />
      <div className="px-4 sm:px-6 lg:px-[60px]" style={{ position: "relative", zIndex: 0 }}><div style={{ height: "1px", backgroundColor: "#D2D8D5", maxWidth: "min(500px, 45vw)" }} /></div>
      {/* Hoe zijn wij anders section */}
      <HoeZijnWijAndersSection />
      <div className="px-4 sm:px-6 lg:px-[60px]" style={{ position: "relative", zIndex: 0 }}><div style={{ height: "1px", backgroundColor: "#D2D8D5", maxWidth: "min(500px, 45vw)" }} /></div>
      {/* Intake inplannen section */}
      <IntakeSection />
    </>
  );
}
