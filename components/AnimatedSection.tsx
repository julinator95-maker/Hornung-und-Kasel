"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/*
  Three states:
  "ssr"     — before useEffect runs. No inline style → element is visible by
              default CSS. This is what the server renders, so there is never
              a flash of invisible content on slow mobile connections.
  "hidden"  — mounted, element is below the fold. We hide it and wait.
  "visible" — element entered the viewport. Transition plays.
*/
type State = "ssr" | "hidden" | "visible";

export default function AnimatedSection({ children, className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("ssr");
  const animatedFromHidden = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (alreadyInView) {
      setState("visible");
      return;
    }

    animatedFromHidden.current = true;
    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let style: React.CSSProperties = {};

  if (state === "hidden") {
    style = {
      opacity: 0,
      transform: "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    };
  } else if (state === "visible" && animatedFromHidden.current) {
    style = {
      opacity: 1,
      transform: "translateY(0px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    };
  }
  // state === "ssr" or visible-from-ssr → no inline style → always visible

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
