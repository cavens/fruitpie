import { useRef, useEffect } from "react";
import { useMouseSticky } from "../hooks/useMouseSticky";
import { useFadeInSection } from "../hooks/useFadeInSection";

function DashedConnector({ arrow = false }: { arrow?: boolean }) {
  return (
    <svg
      width="30"
      height="16"
      viewBox="0 0 70 16"
      fill="none"
      className="flex-shrink-0"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="8"
        x2={arrow ? "56" : "70"}
        y2="8"
        stroke="black"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {arrow && (
        <polyline
          points="56,4 70,8 56,12"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function OverstappenSection() {
  const sectionRef = useFadeInSection();
  const { ref: initiateButtonRef } = useMouseSticky();
  const { ref: confirmButtonRef } = useMouseSticky();
  const { ref: manageButtonRef } = useMouseSticky();
  return (
    <section ref={sectionRef} className="w-full pt-0 pb-[25px] relative z-20 fade-in-section" data-section="overstappen">
      <div className="px-4 sm:px-6 lg:px-[60px]">

        {/* Bowtie icon */}
        <div className="flex mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb537b4d4e3c74d6797d6871c89517220%2F90a584be3dcf4766919e8335eb65a298?format=webp&width=800&height=1200"
            alt="Overstappen icon"
            className="h-[50px] w-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[40px] leading-tight font-normal text-black mb-8">
          <span className="font-sans">Overstappen is </span>
          <span className="font-serif italic">easy as pie.</span>
        </h2>

        {/* Body text */}
        <p className="text-[16px] font-sans font-normal text-black leading-normal mb-14 max-w-[500px]">
          Van boekhouder veranderen is{" "}
          <strong>wettelijk geregeld</strong>{" "}
          in België.{" "}
          <strong>U tekent een nieuwe opdrachtbrief</strong>{" "}
          bij Fruitpie, waarna{" "}
          <strong>wij uw huidige boekhouder contacteren</strong>{" "}
          en het{" "}
          <strong>dossier opvragen.</strong>{" "}
          Tijdens een eventuele opzeg periode bij uw huidige kantaar betaalt u niet voor Fruitpie.
        </p>

        {/* Three-step flow */}
        <div className="flex items-center flex-wrap gap-y-4">
          <button
            ref={initiateButtonRef as any}
            className="h-8 px-5 rounded-[3px] border border-fp-gray-stroke bg-fp-gray-border text-black text-[12px] font-mono font-normal whitespace-nowrap hover:scale-110 transition-all"
            style={{ transitionDuration: "80ms" }}
          >
            Fruitpie initieert
          </button>

          <DashedConnector />

          <button
            ref={confirmButtonRef as any}
            className="h-8 px-5 rounded-[3px] bg-black text-white text-[12px] font-mono font-normal whitespace-nowrap hover:scale-110 transition-all"
            style={{ transitionDuration: "80ms" }}
          >
            Jij bevestigt
          </button>

          <DashedConnector arrow />

          <button
            ref={manageButtonRef as any}
            className="h-8 px-5 rounded-[3px] border border-fp-gray-stroke bg-fp-gray-border text-black text-[12px] font-mono font-normal whitespace-nowrap hover:scale-110 transition-all"
            style={{ transitionDuration: "80ms" }}
          >
            Fruitpie regelt
          </button>
        </div>

        {/* Bottom divider - constrained to 700px and left-aligned */}
        <div style={{ height: "1px", backgroundColor: "#D2D8D5", maxWidth: "500px", marginTop: "25px", position: "relative", zIndex: -1 }}></div>

      </div>
    </section>
  );
}
