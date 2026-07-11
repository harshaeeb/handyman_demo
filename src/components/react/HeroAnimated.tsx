// src/components/react/HeroAnimated.tsx
// React island (client:load) for the hero's animated layer: staggered text
// reveal, floating gradient blobs, a magnetic CTA button, and a tilting
// bento stat grid. All copy/data is passed in as props from Hero.astro,
// which reads it from site.ts — this component owns zero business content.
import { useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export interface HeroAnimatedProps {
  eyebrow: string;
  taglineMain: string;
  taglineAccent?: string;
  city: string;
  reviewCount: number;
  rating: number;
  phone: string;
  phoneDisplay: string;
  yearsInBusiness: number;
  servicesCount: number;
  reviewPlatform: string;
}

function MagneticButton({
  href,
  className,
  style,
  children,
}: {
  href: string;
  className: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.25, y: relY * 0.35 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.5 }}
    >
      {children}
    </motion.a>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroAnimated({
  eyebrow,
  taglineMain,
  taglineAccent,
  city,
  reviewCount,
  rating,
  phone,
  phoneDisplay,
  yearsInBusiness,
  servicesCount,
  reviewPlatform,
}: HeroAnimatedProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* Floating gradient blobs */}
      <motion.div
        aria-hidden="true"
        className="blob pointer-events-none absolute -top-20 -right-16 w-80 h-80 sm:w-96 sm:h-96 opacity-50 blur-3xl"
        style={{ background: "linear-gradient(135deg, #f472b6, #f97316)" }}
        animate={reduceMotion ? undefined : { x: [0, 24, -12, 0], y: [0, -18, 14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="blob pointer-events-none absolute bottom-0 -left-16 w-72 h-72 opacity-40 blur-3xl"
        style={{ background: "linear-gradient(135deg, #818cf8, #06b6d4)" }}
        animate={reduceMotion ? undefined : { x: [0, -20, 10, 0], y: [0, 16, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="sticker inline-flex items-center gap-2 bg-white border-2 border-slate-900/5 shadow-sm rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--brand-500)] animate-pulse flex-shrink-0" />
            <span className="text-sm font-bold text-[var(--brand-700)] tracking-wide">{eyebrow}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900"
          >
            {taglineMain}
            {taglineAccent && <span className="block gradient-text-loud mt-1">{taglineAccent}</span>}
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
            Serving {city} &middot; {reviewCount}+ five-star reviews &middot; free estimates on every job.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <MagneticButton
              href={`tel:${phone}`}
              className="cta-ping animate-gradient pop-shadow inline-flex items-center gap-2 px-7 py-3.5 rounded-[1.5rem] font-bold text-white text-base"
              style={{ background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-500) 50%, #ec4899 100%)", backgroundSize: "200% 200%" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" />
              </svg>
              Call {phoneDisplay}
            </MagneticButton>
            <MagneticButton
              href="/contact"
              className="glass-light inline-flex items-center gap-2 px-7 py-3.5 rounded-[1.5rem] font-bold text-slate-900 text-base border-2 border-slate-900/10 shadow-sm"
            >
              Get a Free Quote
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
              </svg>
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["Z", "M", "P", "A"].map((initial, i) => (
                <div
                  key={initial}
                  className="w-8 h-8 rounded-full ring-2 ring-white flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, hsl(${20 + i * 35}, 80%, 50%), hsl(${50 + i * 30}, 70%, 45%))` }}
                >
                  {initial}
                </div>
              ))}
            </div>
            <div className="text-sm text-slate-500">
              <span className="flex gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3 text-amber-400">
                    <path d="M5.47.31a.6.6 0 0 1 1.06 0l1.13 2.29 2.52.37a.6.6 0 0 1 .33 1.02L8.67 5.8l.43 2.52a.6.6 0 0 1-.87.63L6 7.74 3.77 8.95a.6.6 0 0 1-.87-.63l.43-2.52L1.49 3.99a.6.6 0 0 1 .33-1.02l2.52-.37L5.47.31Z" />
                  </svg>
                ))}
              </span>
              <strong className="text-slate-900">{rating}</strong> &middot; {reviewCount}+ reviews
            </div>
          </motion.div>
        </motion.div>

        {/* Right: tilting bento grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-3" data-tilt-group>
            <div className="pop-shadow bg-white border-2 border-slate-900/5 rounded-[1.5rem] p-6 flex flex-col justify-between" data-tilt style={{ aspectRatio: "1" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--brand-600), #f97316)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-5 h-5">
                  <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" />
                </svg>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-slate-900">{yearsInBusiness}+</p>
                <p className="text-sm text-slate-500 mt-0.5">Years in {city}</p>
              </div>
            </div>

            <div
              className="pop-shadow rounded-[1.5rem] p-6 flex flex-col justify-between text-white"
              data-tilt
              style={{ aspectRatio: "1", background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
            >
              <div className="text-white/80 text-sm font-semibold">{reviewPlatform} Rating</div>
              <div>
                <p className="font-display text-5xl font-bold">{rating}&#9733;</p>
                <p className="text-sm text-white/80 mt-1">{reviewCount}+ reviews</p>
              </div>
            </div>

            <div className="pop-shadow bg-white border-2 border-slate-900/5 rounded-[1.5rem] p-6 flex flex-col justify-between" data-tilt style={{ aspectRatio: "1" }}>
              <div className="text-slate-500 text-sm">Services offered</div>
              <div>
                <p className="font-display text-5xl font-bold gradient-text-loud">{servicesCount}</p>
                <p className="text-sm text-slate-500 mt-1">&amp; counting</p>
              </div>
            </div>

            <div
              className="pop-shadow rounded-[1.5rem] p-6 flex flex-col items-center justify-center gap-3 text-center text-white"
              data-tilt
              style={{ aspectRatio: "1", background: "linear-gradient(135deg, #06b6d4, #22c55e)" }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20">
                <div className="w-4 h-4 rounded-full bg-white animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-bold">Free Estimates</p>
                <p className="text-xs text-white/80">By Appointment</p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            className="glass-light absolute -bottom-5 -left-5 rounded-[1.5rem] shadow-xl px-4 py-3 flex items-center gap-3"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, var(--brand-600), #f97316)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-5 h-5">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Locally Owned</p>
              <p className="text-xs text-slate-500">Committed to satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
