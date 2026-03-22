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
        <div className="w-full max-w-[500px] border border-dashed border-[#A1A1A1] rounded-[5px] bg-white pt-5 pb-5 px-5">

          {/* Title */}
          <p className="text-center text-[16px] font-sans text-black mb-4 leading-snug">
            Fruitpie's <strong>overstap-agent regelt alles</strong>
          </p>

          {/* Green box */}
          <div className="border border-[#00FF2F] rounded-[5px] bg-[#F3FFE8] px-4 py-4 mb-4">
            <div className="flex flex-col items-center text-center font-mono text-[12px] leading-[1.5] text-black">
              <p className="font-bold">Jij geeft Fruitpie opdracht om overstap in gang te zetten</p>
              <svg className="my-2" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6399 0.360109L8 8L0.36011 0.360109" stroke="black"/></svg>
              <p>Overstap email naar huidige / vorige boekhouder</p>
              <svg className="my-2" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6399 0.360109L8 8L0.36011 0.360109" stroke="black"/></svg>
              <p className="font-bold">Boekhouder moet (wettelijk) dossier meteen aanleveren</p>
              <svg className="my-2" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6399 0.360109L8 8L0.36011 0.360109" stroke="black"/></svg>
              <p>Fruitpie agent controleert <span className="underline">dossier</span> op volledigheid</p>
              <svg className="my-2" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6399 0.360109L8 8L0.36011 0.360109" stroke="black"/></svg>
              <p>Fruitpie koppelt dossier aan bestaande systemen</p>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center font-mono text-[11px] text-[#666666] leading-snug">
            (Tijdens uw eventuele opzegtermijn (max 3m) betaalt u niet voor Fruitpie)
          </p>

        </div>

        {/* Bottom divider - constrained to 700px and left-aligned */}
        <div style={{ height: "1px", backgroundColor: "#D2D8D5", maxWidth: "500px", marginTop: "25px", position: "relative", zIndex: -1 }}></div>

      </div>
    </section>
  );
}
