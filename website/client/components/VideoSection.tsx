import { useState, useEffect } from "react";
import { useFadeInSection } from "../hooks/useFadeInSection";
import { useMouseSticky } from "../hooks/useMouseSticky";

const THUMBNAIL = "/video-thumbnail.jpg";
// Replace with your actual video URL when ready
const VIDEO_URL = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoSection() {
  const sectionRef = useFadeInSection();
  const [open, setOpen] = useState(false);
  const { ref: playBtnRef } = useMouseSticky(50);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('play-video', handler);
    return () => window.removeEventListener('play-video', handler);
  }, []);

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
          className="w-full max-w-[600px] relative overflow-hidden"
          style={{ aspectRatio: "35 / 23", padding: "0" }}
        >
          {/* Video thumbnail image */}
          <img
            src={THUMBNAIL}
            alt="Video preview"
            className="w-full h-full object-cover"
          />

          {/* Invisible full-area click target */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setOpen(true)}
          />

          {/* Play button — flex-centered wrapper so magnetic transform doesn't break centering */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              ref={playBtnRef as any}
              onClick={() => setOpen(true)}
              className="group pointer-events-auto"
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
                  style={{
                    transformOrigin: "44.78px 41.29px",
                    transition: "transform 0.15s ease",
                  }}
                  className="group-hover:scale-125"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Spacing below video before next section (Overstappen) */}
      <div style={{ height: "50px", backgroundColor: "white", margin: "0" }}></div>

      {/* Video modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-[900px] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full rounded-[3px]"
              src={VIDEO_URL}
              poster={THUMBNAIL}
              controls
              autoPlay
              playsInline
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-8 right-0 text-white text-[12px] font-mono hover:opacity-70"
            >
              SLUITEN ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
