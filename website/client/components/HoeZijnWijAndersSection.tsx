import { useFadeInSection } from "../hooks/useFadeInSection";

export default function HoeZijnWijAndersSection() {
  const sectionRef = useFadeInSection();
  return (
    <section ref={sectionRef} className="w-full pt-[25px] pb-[25px] relative z-20 fade-in-section">
      <div className="w-full px-4 sm:px-6 lg:px-[60px]">

        {/* Icon */}
        <div className="flex mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb537b4d4e3c74d6797d6871c89517220%2F94ff8553b08944e3a15b844ffb49df7c?format=webp&width=800&height=1200"
            alt="Hoe zijn wij anders icon"
            className="h-[150px] w-auto"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[40px] leading-tight font-normal text-black mb-8">
          <span className="font-sans">Meer </span>
          <span className="font-serif italic">persoonlijk advies.</span>
        </h2>

        {/* Body text */}
        <p className="text-[16px] font-sans font-normal text-black leading-normal mb-8 max-w-[500px]">
          Met Fruitpie wordt uw boekhouding continu verwerkt en{" "}
          <strong>altijd up-to-date</strong>, waardoor u op{" "}
          <strong>elk moment inzicht heeft in uw cijfers.</strong>{" "}
          Dankzij AI-automatisatie gebeuren minder manuele handelingen en dus{" "}
          <strong>minder fouten</strong>, terwijl onze boekhouders zich focussen op{" "}
          <strong>persoonlijk en proactief advies.</strong>{" "}
          Door die efficiëntie werkt het model ook tot{" "}
          <strong>~50% voordeliger</strong>{" "}
          dan bij een traditioneel boekhoudkantoor.
        </p>

        {/* Matrix */}
        <div className="max-w-[500px] border border-dashed border-fp-gray-border rounded-[5px] overflow-hidden">
          <div className="flex">

            {/* Left axis labels column */}
            <div className="flex flex-col border-r border-dashed border-fp-gray-border w-[50px] flex-shrink-0">
              {/* Spacer aligns with top axis labels row */}
              <div className="h-[36px] border-b border-dashed border-fp-gray-border"></div>
              {/* Zonder mensen */}
              <div className="flex-1 h-[110px] flex items-center justify-center border-b border-dashed border-fp-gray-border">
                <p className="text-[9px] font-mono font-bold text-black tracking-widest uppercase text-center leading-tight" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                  Zonder mensen
                </p>
              </div>
              {/* Met mensen */}
              <div className="flex-1 h-[110px] flex items-center justify-center">
                <p className="text-[9px] font-mono font-bold text-black tracking-widest uppercase text-center leading-tight" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                  Met mensen
                </p>
              </div>
            </div>

            {/* Right: top labels + grid */}
            <div className="flex flex-col flex-1">
              {/* Top axis labels row */}
              <div className="flex border-b border-dashed border-fp-gray-border h-[36px]">
                <div className="flex-1 flex items-center justify-center border-r border-dashed border-fp-gray-border bg-white">
                  <p className="text-[9px] font-mono font-bold text-black tracking-widest uppercase">AI in de rand</p>
                </div>
                <div className="flex-1 flex items-center justify-center bg-white">
                  <p className="text-[9px] font-mono font-bold text-black tracking-widest uppercase">AI in de kern</p>
                </div>
              </div>

              {/* Top row */}
              <div className="flex border-b border-dashed border-fp-gray-border">
                <div className="flex-1 h-[110px] flex items-center justify-center border-r border-dashed border-fp-gray-border relative bg-white">
                  <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="#D2D8D5" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1="100" y1="0" x2="0" y2="100" stroke="#D2D8D5" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                </div>
                <div className="flex-1 h-[110px] flex items-center justify-center bg-white">
                  <p className="text-[12px] font-mono font-normal text-black">AI tools</p>
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex">
                <div className="flex-1 h-[110px] flex items-center justify-center border-r border-dashed border-fp-gray-border bg-white">
                  <p className="text-[12px] font-mono font-normal text-black">Klassiek kantoor</p>
                </div>
                <div className="flex-1 h-[110px] flex flex-col items-center justify-center gap-2" style={{ backgroundColor: "#F3FFE8" }}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fb537b4d4e3c74d6797d6871c89517220%2F7e5d14f551b54df98c20079f07bb1fc2?format=webp&width=800&height=1200"
                    alt="Fruitpie wheel"
                    className="w-[32px] h-[32px]"
                  />
                  <p className="text-[12px] font-mono font-normal text-black">The sweet spot</p>
                </div>
              </div>
            </div>

          {/* Right axis labels column (empty) */}
          <div className="flex flex-col border-l border-dashed border-fp-gray-border w-[50px] flex-shrink-0 bg-white">
            <div className="h-[36px] border-b border-dashed border-fp-gray-border"></div>
            <div className="flex-1 h-[110px] border-b border-dashed border-fp-gray-border"></div>
            <div className="flex-1 h-[110px]"></div>
          </div>

          </div>
        </div>


      </div>
    </section>
  );
}
