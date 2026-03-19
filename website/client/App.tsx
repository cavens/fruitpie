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

    // Set responsive image size and position based on viewport
    const updateImageSize = () => {
      const isMobile = window.innerWidth < 480; // Small phones only
      const size = isMobile ? "270px" : "540px"; // Half size on small phones

      if (el) {
        el.style.width = size;
        el.style.height = size;
        if (isMobile) {
          // Left edge aligned to middle on mobile
          el.style.left = "50%";
          el.style.right = "auto";
          el.style.transform = "none";
        } else {
          // Right side on desktop
          el.style.left = "auto";
          el.style.right = "calc((100vw - 1200px) / 2 + 20px)";
          el.style.transform = "none";
        }
      }
      if (emptyPlate) {
        emptyPlate.style.width = size;
        emptyPlate.style.height = size;
        if (isMobile) {
          // Left edge aligned to middle on mobile
          emptyPlate.style.left = "50%";
          emptyPlate.style.right = "auto";
          emptyPlate.style.transform = "none";
        } else {
          // Right side on desktop
          emptyPlate.style.left = "auto";
          emptyPlate.style.right = "calc((100vw - 1200px) / 2 + 20px)";
          emptyPlate.style.transform = "none";
        }
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update image size in case viewport changed
      updateImageSize();

      // Handle first image (full plate)
      if (el) {
        // Show image only when scrolled 600px or more
        if (scrollY < 600) {
          el.style.display = "none";
        } else {
          el.style.display = "block";
          // Image appears 600px higher, starting at -400px instead of 200px
          el.style.top = (-400 + scrollY * 0.5) + "px";
        }
      }

      // Handle second image (empty plate)
      if (emptyPlate) {
        const intakeSection = document.querySelector('[data-section="intake"]');
        if (!intakeSection) return;

        const intakeRect = intakeSection.getBoundingClientRect();
        const intakeTopAbsolute = scrollY + intakeRect.top;
        const intakeBottomAbsolute = scrollY + intakeRect.bottom;

        // Empty plate scrolls in from bottom as we approach intake section
        // Start showing much earlier so image is higher at bottom of page
        const showStartY = intakeTopAbsolute - 2500;
        const showEndY = intakeTopAbsolute;

        if (scrollY < showStartY) {
          emptyPlate.style.display = "none";
        } else {
          emptyPlate.style.display = "block";
          // Position: starts below viewport and moves up
          const progress = Math.min(1, (scrollY - showStartY) / (showEndY - showStartY));
          // Starts at bottom (window height + 600) and moves up as progress increases
          const imageTop = window.innerHeight + 600 - progress * (window.innerHeight + 600);
          emptyPlate.style.top = imageTop + "px";
        }
      }
    };

    // Initial size update
    updateImageSize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateImageSize);
    // Initial call
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateImageSize);
    };
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
