import { useRef } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────
const MAX_OFFSET     = 8;    // max px translation toward mouse
const MAX_SCALE      = 1.08; // max scale when mouse is at button center
const DEFAULT_RADIUS = 80;   // attraction zone: px beyond button edge
const LERP           = 0.14; // smoothing factor (lower = smoother/slower)

// ─── Shared state (one rAF loop for all buttons) ──────────────────────────────
type BtnState = {
  el: HTMLElement;
  radius: number;
  x: number; y: number; scale: number;   // current (lerped)
  tx: number; ty: number; tScale: number; // target
};

const buttons = new Map<HTMLElement, BtnState>();
let mouseX = 0;
let mouseY = 0;
let rafRunning = false;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function tick() {
  buttons.forEach((s) => {
    const rect = s.el.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = mouseX - cx;
    const dy = mouseY - cy;

    // Circular attraction zone from button edge
    const edgeR = Math.max(rect.width, rect.height) / 2 + s.radius;
    const dist  = Math.sqrt(dx * dx + dy * dy);

    if (dist < edgeR) {
      // proximity: 1 at center, 0 at edge of zone
      const prox = 1 - dist / edgeR;
      s.tx     = (dx / edgeR) * MAX_OFFSET;
      s.ty     = (dy / edgeR) * MAX_OFFSET;
      s.tScale = 1 + (MAX_SCALE - 1) * prox;
    } else {
      s.tx = 0; s.ty = 0; s.tScale = 1;
    }

    s.x     = lerp(s.x,     s.tx,     LERP);
    s.y     = lerp(s.y,     s.ty,     LERP);
    s.scale = lerp(s.scale, s.tScale, LERP);

    s.el.style.transform =
      `translate(${s.x.toFixed(3)}px, ${s.y.toFixed(3)}px) scale(${s.scale.toFixed(4)})`;
  });

  requestAnimationFrame(tick);
}

function startLoop() {
  if (rafRunning) return;
  rafRunning = true;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  requestAnimationFrame(tick);
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useMouseSticky(radius = DEFAULT_RADIUS) {
  const elRef = useRef<HTMLElement | null>(null);

  const setRef = (element: HTMLElement | null) => {
    if (element) {
      buttons.set(element, { el: element, radius, x: 0, y: 0, scale: 1, tx: 0, ty: 0, tScale: 1 });
      elRef.current = element;
      startLoop();
    } else if (elRef.current) {
      buttons.delete(elRef.current);
      elRef.current = null;
    }
  };

  return { ref: setRef };
}
