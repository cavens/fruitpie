import { useMouseSticky } from "../hooks/useMouseSticky";
import { useFadeInSection } from "../hooks/useFadeInSection";

export default function IntakeSection() {
  const sectionRef = useFadeInSection();
  const { ref: buttonRef } = useMouseSticky();

  return (
    <section ref={sectionRef} className="w-full pt-[25px] pb-[25px] relative z-20 fade-in-section" data-section="intake">
      <div className="w-full px-4 sm:px-6 lg:px-[60px]">

        {/* Calendar + pencil icon */}
        <div className="mb-8">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Calendar body */}
            <rect x="4" y="10" width="44" height="40" rx="3" ry="3" stroke="black" strokeWidth="2.5" fill="none" />
            {/* Calendar top bar */}
            <line x1="4" y1="22" x2="48" y2="22" stroke="black" strokeWidth="2.5" />
            {/* Calendar hooks */}
            <line x1="15" y1="4" x2="15" y2="16" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="37" y1="4" x2="37" y2="16" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
            {/* Pencil body */}
            <path d="M34 42 L44 32 L50 38 L40 48 Z" stroke="black" strokeWidth="2" fill="none" strokeLinejoin="round" />
            {/* Pencil tip */}
            <path d="M34 42 L31 51 L40 48 Z" stroke="black" strokeWidth="2" fill="none" strokeLinejoin="round" />
            {/* Pencil top */}
            <path d="M44 32 L47 29 L53 35 L50 38 Z" stroke="black" strokeWidth="2" fill="none" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Heading — left-aligned */}
        <h2 className="text-[40px] leading-tight font-sans font-normal text-black mb-8">
          Intake inplannen
        </h2>

        {/* Body text — left-aligned, max 500px wide */}
        <p className="text-[16px] font-sans font-normal text-black leading-normal mb-10 max-w-[500px]">
          De intake is <strong>volledig vrijblijvend.</strong> We bekijken kort hoe
          complex je bedrijf is en kunnen <strong>meteen een duidelijke
          prijs</strong> geven. Samen overlopen we <strong>hoe een overdracht
          verloopt</strong> en tonen we in een <strong>korte demo hoe we werken.</strong>{" "}
          Zo weet je meteen waar je aan toe bent.
        </p>

        {/* CTA Button */}
        <button
          ref={buttonRef as any}
          className="h-8 px-5 bg-black text-white text-[12px] font-mono font-normal rounded-[3px] whitespace-nowrap hover:bg-gray-900 hover:scale-110 transition-all"
          style={{ transitionDuration: "80ms" }}
        >
          Prik moment!
        </button>

      </div>
    </section>
  );
}
