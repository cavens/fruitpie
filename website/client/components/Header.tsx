import { Link } from "react-router-dom";
import { useMouseSticky } from "../hooks/useMouseSticky";

export default function Header() {
  const { ref: intakeBtnRef } = useMouseSticky();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-fp-gray-border h-[70px] flex items-center justify-center">
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-[60px] flex items-start pt-[11px] sm:pt-0 sm:items-center justify-between">

        {/* Left: logo + tagline */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-1.5">
          <Link
            to="/"
            className="text-black text-[28px] font-bold font-sans leading-none"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            fruitpie
          </Link>
          <span className="text-black text-[14px] sm:text-[16px] font-normal font-sans leading-none">
            Boekhouders met superpowers
          </span>
        </div>

        {/* Right: Plan intake button */}
        <button
          ref={intakeBtnRef as any}
          onClick={() => document.querySelector('[data-section="intake"]')?.scrollIntoView({ behavior: 'smooth' })}
          className="
            inline-flex items-center justify-center
            h-8 px-5
            rounded-[3px]
            bg-fp-green-light
            border border-fp-green-fluo
            text-black text-[12px] font-normal font-mono
            whitespace-nowrap
            hover:bg-[#e8ffd6] hover:scale-110 transition-all
          "
          style={{ transitionDuration: "80ms" }}
        >
          Proefgesprek?
        </button>

      </div>
    </header>
  );
}
