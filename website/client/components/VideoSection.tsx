import { useFadeInSection } from "../hooks/useFadeInSection";

export default function VideoSection() {
  const sectionRef = useFadeInSection();
  return (
    <>
      {/* Green band — exactly the height of the video */}
      <section
        ref={sectionRef}
        className="w-full m-0 relative z-20 fade-in-section"
        data-section="video"
        style={{
          borderTop: "1px solid #00FFCB",
          borderBottom: "1px solid #00FFCB",
          backgroundColor: "#F3FFE8",
          padding: "0",
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Video container — NO border, just the image */}
        <div
          className="w-full max-w-[800px] relative overflow-hidden px-4 sm:px-6 lg:px-[60px]"
          style={{ aspectRatio: "35 / 23", padding: "0" }}
        >
          {/* Video thumbnail image */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ac51920c27764e8045ce94af3c6acffcacc953f4?width=1604"
            alt="Video preview"
            className="w-full h-full object-cover"
          />

          {/* Play button — white circle with black triangle, centered */}
          <button
            className="absolute inset-0 flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all"
            aria-label="Play video"
          >
            <svg
              width="82"
              height="82"
              viewBox="0 0 82 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 md:w-20 md:h-20"
            >
              <circle cx="41" cy="41" r="41" fill="white" />
              <path
                d="M55.2857 41.2858L34.2857 53.4101L34.2857 29.1614L55.2857 41.2858Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Spacing below video before next section (Overstappen) */}
      <div style={{ height: "50px", backgroundColor: "white", margin: "0" }}></div>
    </>
  );
}
