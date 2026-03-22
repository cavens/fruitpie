import { useFadeInSection } from "../hooks/useFadeInSection";


export default function OverstappenSection() {
  const sectionRef = useFadeInSection();
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

        {/* Overstap agent card */}
        <div className="w-full max-w-[806px] border border-dashed border-[#A1A1A1] rounded-[5px] bg-white pt-7 pb-6 px-6 sm:px-10">

          {/* Title */}
          <p className="text-center text-[18px] sm:text-[24px] font-sans text-black mb-6 leading-snug">
            Fruitpie's <strong>overstap-agent regelt alles</strong>
          </p>

          {/* Green box */}
          <div className="border border-[#00FF2F] rounded-[5px] bg-[#F3FFE8] px-4 sm:px-8 py-5 mb-5">
            <div className="flex flex-col gap-3 text-center font-mono text-[12px] sm:text-[15px] leading-[1.5] text-black">
              <p className="font-bold">Jij geeft Fruitpie opdracht om overstap in gang te zetten</p>
              <p>Overstap email naar huidige / vorige boekhouder</p>
              <p>Boekhouder moet (wettelijk) dossier meteen aanleveren</p>
              <p>Fruitpie agent controleert dossier op volledigheid</p>
              <p>Fruitpie koppelt dossier aan bestaande systemen</p>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center font-mono text-[11px] sm:text-[13px] text-[#666666] leading-snug">
            (Tijdens uw eventuele opzegtermijn (max 3m) betaalt u niet voor Fruitpie)
          </p>

        </div>

        {/* Bottom divider - constrained to 700px and left-aligned */}
        <div style={{ height: "1px", backgroundColor: "#D2D8D5", maxWidth: "500px", marginTop: "25px", position: "relative", zIndex: -1 }}></div>

      </div>
    </section>
  );
}
