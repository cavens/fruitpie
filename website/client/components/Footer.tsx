export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 relative z-50">
      <div className="flex flex-col items-center gap-8 text-center">

        {/* Address block */}
        <div className="flex flex-col gap-1">
          <p className="text-[14px] font-sans font-normal text-[#888] leading-relaxed">
            Fruitpie bv
          </p>
          <p className="text-[14px] font-sans font-normal text-[#888] leading-relaxed">
            Spanjaardsteeg 21/4
          </p>
          <p className="text-[14px] font-sans font-normal text-[#888] leading-relaxed">
            2000 Antwerpen
          </p>
        </div>

        {/* Email */}
        <a
          href="mailto:hello@fruitpie.ai"
          className="text-[14px] font-sans font-normal text-[#888] hover:text-white transition-colors"
        >
          hello@fruitpie.ai
        </a>

        {/* Phone */}
        <a
          href="tel:+3247723843​5"
          className="text-[14px] font-sans font-normal text-[#888] hover:text-white transition-colors"
        >
          0032 477 23 84 35
        </a>

        {/* Fruitpie wheel logo */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb537b4d4e3c74d6797d6871c89517220%2F8d6ba8d284454369b7774051922a4ac9?format=webp&width=800&height=1200"
            alt="Fruitpie wheel logo"
            className="w-[48px] h-[48px] opacity-60"
          />

          {/* Copyright */}
          <p className="text-[12px] font-mono font-normal text-[#555] tracking-widest">
            © 2026 Fruitpie bv
          </p>
        </div>

      </div>
    </footer>
  );
}
