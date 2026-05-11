"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const STRIPES = 10;

export default function StripeReveal({ src, alt, className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} fill className="object-cover object-center" alt={alt} />
      {Array.from({ length: STRIPES }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 bottom-0 bg-zinc-950"
          style={{
            left: `${(i / STRIPES) * 100}%`,
            width: `${100 / STRIPES + 0.3}%`,
            originY: 1,
          }}
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          /* once: false → replays every time element scrolls into view */
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1.0,          /* slower = softer */
            delay: i * 0.06,        /* gentle stagger */
            ease: [0.4, 0, 0.2, 1], /* soft cubic-bezier, no hard snap */
          }}
        />
      ))}
    </div>
  );
}
