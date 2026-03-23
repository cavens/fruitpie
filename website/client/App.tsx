import "./global.css";

import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  const imageRef = useRef<HTMLDivElement>(null);
  const emptyPlateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    const emptyPlate = emptyPlateRef.current;
    if (!el && !emptyPlate) return;

    const updatePositions = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 480;
      const size = isMobile ? "270px" : "540px";

      // Apply size + horizontal position
      [el, emptyPlate].forEach((img) => {
        if (!img) return;
        img.style.width = size;
        img.style.height = size;
        if (isMobile) {
          img.style.left = "50%";
          img.style.right = "auto";
        } else {
          img.style.left = "auto";
          img.style.right = "calc((100vw - 1200px) / 2 + 20px)";
        }
      });

      // Handle first image (full plate) — show only after video section scrolls off screen
      if (el) {
        const videoEl = document.querySelector('video, iframe');
        const videoSection = videoEl?.closest('section') ?? document.querySelectorAll('section')[1];
        const videoBottom = videoSection ? videoSection.getBoundingClientRect().bottom : 0;
        if (videoBottom > 0) {
          el.style.display = "none";
        } else {
          el.style.display = "block";
          // Slower parallax on mobile
          const speed = isMobile ? 0.3 : 0.5;
          el.style.top = (-400 + scrollY * speed) + "px";
        }
      }

      // Handle second image (empty plate)
      if (emptyPlate) {
        const intakeSection = document.querySelector('[data-section="intake"]');
        if (!intakeSection) return;

        const intakeRect = intakeSection.getBoundingClientRect();
        const intakeTopAbsolute = scrollY + intakeRect.top;

        // On mobile: start appearing 2 viewport heights before intake section
        // On desktop: keep original 1200px offset
        const showStartY = isMobile
          ? intakeTopAbsolute - window.innerHeight * 2
          : intakeTopAbsolute - 1200;
        const showEndY = intakeTopAbsolute;

        if (scrollY < showStartY) {
          emptyPlate.style.display = "none";
        } else {
          emptyPlate.style.display = "block";
          const progress = Math.min(1, (scrollY - showStartY) / (showEndY - showStartY));

          let imageTop: number;
          const footer = document.querySelector('footer');
          const footerTop = footer ? footer.getBoundingClientRect().top : window.innerHeight;
          const imageHeight = isMobile ? 270 : 540;
          const finalTop = footerTop - imageHeight;
          const startTop = isMobile ? window.innerHeight : window.innerHeight + 600;
          imageTop = startTop + progress * (finalTop - startTop);

          emptyPlate.style.top = imageTop + "px";
        }
      }
    };

    // Use rAF loop so positions update during iOS momentum scrolling,
    // not just after touch ends (scroll events don't fire mid-gesture on iOS)
    let rafId: number;
    const loop = () => {
      updatePositions();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      {/* Images at root level for proper z-index stacking */}
      {/* Background image - parallax effect */}
      <div
        ref={imageRef}
        style={{
          position: "fixed",
          width: "540px",
          height: "540px",
          right: "calc((100vw - 1200px) / 2 + 20px)",
          left: "auto",
          top: "200px",
          zIndex: 20,
          pointerEvents: "none",
          display: "block",
          willChange: "transform",
        }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fb537b4d4e3c74d6797d6871c89517220%2F8f1381e635224d0b8436d74c98d0ab43?format=webp&width=800&height=1200"
          alt="Fruit pie full plate"
          style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
        />
      </div>

      {/* Empty plate image - scrolls in from bottom */}
      <div
        ref={emptyPlateRef}
        style={{
          position: "fixed",
          width: "540px",
          height: "540px",
          right: "calc((100vw - 1200px) / 2 + 20px)",
          left: "auto",
          top: "200px",
          zIndex: 1,
          pointerEvents: "none",
          display: "none",
          willChange: "transform",
        }}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fb537b4d4e3c74d6797d6871c89517220%2F50c1ea10a45447558f6434babb56208d?format=webp&width=800&height=1200"
          alt="Fruit pie empty plate"
          style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
        />
      </div>

      <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <div className="pt-[70px] bg-white flex justify-center">
            <div className="w-full max-w-[1200px]">
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    </>
  );
}
