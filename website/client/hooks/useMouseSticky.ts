import { useRef } from "react";

// Global listener setup
let isListenerAttached = false;
const buttonElements = new Set<HTMLButtonElement>();
const MAX_OFFSET = 10; // Increased to 10px for more pronounced movement

function setupGlobalMouseListener() {
  if (isListenerAttached) return;
  isListenerAttached = true;

  const handleDocumentMouseMove = (e: MouseEvent) => {
    buttonElements.forEach((button) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Check if mouse is within the button + 20px zone around it
      const expandedRect = {
        left: rect.left - 20,
        right: rect.right + 20,
        top: rect.top - 20,
        bottom: rect.bottom + 20,
      };

      const isInZone = mouseX >= expandedRect.left && mouseX <= expandedRect.right &&
                       mouseY >= expandedRect.top && mouseY <= expandedRect.bottom;

      if (isInZone) {
        const distX = mouseX - centerX;
        const distY = mouseY - centerY;

        // Calculate distance from center
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance > 0) {
          // Normalize and apply max offset (4px max - doubled)
          const offsetX = (distX / distance) * MAX_OFFSET;
          const offsetY = (distY / distance) * MAX_OFFSET;

          button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
      } else {
        button.style.transform = "translate(0, 0)";
      }
    });
  };

  document.addEventListener("mousemove", handleDocumentMouseMove);
}

export function useMouseSticky() {
  const ref = useRef<HTMLButtonElement>(null);

  // Setup global listener once
  setupGlobalMouseListener();

  // Register and unregister button from the set
  const setRef = (element: HTMLButtonElement | null) => {
    if (element) {
      buttonElements.add(element);
    } else if (ref.current) {
      buttonElements.delete(ref.current);
    }
    ref.current = element;
  };

  return { ref: setRef };
}
