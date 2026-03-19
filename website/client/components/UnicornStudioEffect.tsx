import { useEffect, useRef } from "react";

declare global {
  interface Window {
    UnicornStudio?: any;
  }
}

export default function UnicornStudioEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    const loadUnicornStudio = async () => {
      // Check if UnicornStudio is already loaded
      if (!window.UnicornStudio) {
        // Load the library from CDN
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js";
        script.async = true;

        script.onload = () => {
          initializeScene();
        };

        script.onerror = () => {
          console.error("Failed to load Unicorn Studio library");
        };

        document.head.appendChild(script);
      } else {
        initializeScene();
      }
    };

    const initializeScene = async () => {
      if (!containerRef.current) return;

      try {
        const UnicornStudio = window.UnicornStudio;

        // Add the Unicorn Studio scene
        sceneRef.current = await UnicornStudio.addScene({
          elementId: "unicorn-hero-effect",
          fps: 60,
          scale: 1,
          dpi: 1.5,
          filePath: "/unicorn/hero-effect.json",
          lazyLoad: false,
          fixed: false,
          altText: "Animated hero background effect",
          ariaLabel: "Interactive WebGL effect",
          production: false,
          interactivity: {
            mouse: {
              disableMobile: true,
              disabled: false,
            },
          },
        });
      } catch (error) {
        console.error("Failed to initialize Unicorn Studio scene:", error);
      }
    };

    loadUnicornStudio();

    return () => {
      // Clean up on unmount
      if (sceneRef.current && window.UnicornStudio) {
        try {
          sceneRef.current.destroy?.();
        } catch (error) {
          console.error("Error destroying Unicorn Studio scene:", error);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="unicorn-hero-effect"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
