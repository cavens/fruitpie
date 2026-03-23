"use client";

import { useState } from "react";
import { useFadeInSection } from "../hooks/useFadeInSection";

export default function PricingSection() {
  const sectionRef = useFadeInSection();
  const presets = [500, 750, 1500, 2500];
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 750
  const monthlyAmount = presets[currentIndex];

  const fruitpieMonthly = Math.round(monthlyAmount * 0.5);
  const savingsMonthly = monthlyAmount - fruitpieMonthly;

  const huidigeYearly = monthlyAmount * 12;
  const fruitpieYearly = fruitpieMonthly * 12;
  const savingsYearly = savingsMonthly * 12;

  const handleMinus = () => {
    setCurrentIndex((prev) => (prev === 0 ? presets.length - 1 : prev - 1));
  };

  const handlePlus = () => {
    setCurrentIndex((prev) => (prev === presets.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={sectionRef} className="w-full pt-[25px] pb-[25px] relative z-20 fade-in-section">
      <div className="w-full px-4 sm:px-6 lg:px-[60px]">

        {/* Icon */}
        <div className="flex mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb537b4d4e3c74d6797d6871c89517220%2F606c3b8279f24ce48a737d21c462df1e?format=webp&width=800&height=1200"
            alt="Transparante pricing icon"
            className="h-[100px] w-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[40px] leading-tight font-normal text-black mb-8">
          <span className="font-serif italic">Aan de helft van </span>
          <span className="font-sans">de prijs.</span>
        </h2>

        {/* Body text */}
        <p className="text-[16px] font-sans font-normal text-black leading-normal mb-8 max-w-[500px]">
          Dankzij AI-automatisatie verwerken wij uw boekhouding sneller en met minder manuele handelingen. Dat vertaalt zich rechtstreeks in{" "}
          <strong>lagere kosten</strong>{" "}
          — zonder in te leveren op kwaliteit. Integendeel: doordat onze boekhouders minder tijd kwijt zijn aan routinetaken, hebben zij meer ruimte voor advies en controle.
        </p>

        {/* Pricing table */}
        <div className="max-w-[500px] border border-dashed border-fp-gray-border rounded-[5px]">
          {/* Huidig kantoor row */}
          <div className="grid grid-cols-[1fr_1px_1fr] border-b border-dashed border-fp-gray-border">
            <div className="bg-white flex items-center justify-end text-[12px] font-mono font-normal text-black pr-6 py-3">
              Huidig kantoor per maand
            </div>
            <div className="border-l border-dashed border-fp-gray-border"></div>
            <div className="bg-white px-4 py-3 flex items-center justify-between gap-2">
              <button
                onClick={handleMinus}
                className="text-[20px] font-bold text-black hover:opacity-70 hover:scale-110 transition-all"
                aria-label="Decrease amount"
              >
                −
              </button>
              <span className="text-[12px] font-mono font-normal text-black flex-1 text-center">
                {monthlyAmount}EUR
              </span>
              <button
                onClick={handlePlus}
                className="text-[20px] font-bold text-black hover:opacity-70 hover:scale-110 transition-all"
                aria-label="Increase amount"
              >
                +
              </button>
            </div>
          </div>

          {/* Fruitpie row */}
          <div className="grid grid-cols-[1fr_1px_1fr] border-b border-dashed border-fp-gray-border">
            <div className="bg-white text-right text-[12px] font-mono font-normal text-black pr-6 py-3">
              Fruitpie per maand
            </div>
            <div className="border-l border-dashed border-fp-gray-border"></div>
            <div className="bg-white text-center text-[12px] font-mono font-normal text-black px-4 py-3">
              {fruitpieMonthly}EUR
            </div>
          </div>

          {/* Besparing 1j row */}
          <div className="grid grid-cols-[1fr_1px_1fr]">
            <div className="bg-white text-right text-[12px] font-mono font-bold text-black pr-6 py-3">
              Besparing per jaar
            </div>
            <div className="border-l border-dashed border-fp-gray-border"></div>
            <div className="text-center text-[12px] font-mono font-bold text-black px-4 py-3 rounded-sm" style={{ backgroundColor: "#F3FFE8" }}>
              {savingsYearly}EUR
            </div>
          </div>
        </div>

        {/* Footer note - centered under matrix */}
        <p className="text-[16px] font-sans font-normal text-black mt-4 text-center max-w-[500px]">
          Maatwerk aan 85EUR/h uurtarief
        </p>


      </div>
    </section>
  );
}
