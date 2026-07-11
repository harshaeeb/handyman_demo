// src/components/react/StatCounter.tsx
// Small React island: counts a number up from 0 once it scrolls into view.
import { useEffect, useRef, useState } from "react";
import { useInView, animate, useReducedMotion } from "framer-motion";

export interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.4,
  className = "",
}: StatCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    // useReducedMotion() reports null/false on the very first render (it
    // can't synchronously read the media query before mount), so it can't
    // be trusted as a useState initializer — that left this permanently
    // stuck at 0 for anyone with reduced-motion enabled, since the old
    // effect bailed out here without ever setting the real value. Set it
    // explicitly instead of relying on mount-time state.
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value, duration, reduceMotion]);

  return (
    <p ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </p>
  );
}
