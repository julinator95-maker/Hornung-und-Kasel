"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* Hero content stays fully visible until 80% scroll, then fades out */
  const heroOpacity = useTransform(scrollYProgress, [0.8, 1.0], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  /* Justitia moves at 40% of scroll speed — slower = deeper parallax depth */

  const justitiaY = useTransform(scrollYProgress, [0, 1], ["0px", "-250px"]);

  return (
    <>
      {/* ──────────────────────── HERO ──────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[75vh] md:min-h-[110vh] flex items-start md:items-center justify-center overflow-hidden pt-24 md:pt-20"
      >
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#0d1520] to-zinc-950" />

        <motion.div style={{ y: justitiaY }} className="absolute inset-0 pointer-events-none">
          {/* Mobile: portrait image */}
          <Image
            src="/justitia-neu.png.png"
            fill
            sizes="100vw"
            className="md:hidden object-cover object-center opacity-[0.28]"
            alt=""
            aria-hidden
            priority
          />
          {/* Desktop: original landscape image */}
          <Image
            src="/justitita.png"
            fill
            sizes="100vw"
            className="hidden md:block object-cover object-left opacity-[0.28]"
            alt=""
            aria-hidden
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent from-[10%] via-zinc-950/70 via-[40%] to-zinc-950 to-[60%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-zinc-950 to-transparent" />
        </motion.div>


        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <p className="hero-eyebrow text-brand text-xs tracking-[0.35em] uppercase font-sans font-medium mb-10">
            Rechtsanwälte in Bürogemeinschaft · Trier
          </p>

          <h1
            className="hero-headline font-serif font-light leading-[0.88] tracking-tight text-zinc-50"
            style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
          >
            Hornung
            <span className="block italic text-zinc-300">&amp; Kasel</span>
          </h1>

          <div className="hero-rule w-14 h-px bg-brand mx-auto mt-10 mb-8" />

          <p className="hero-sub text-zinc-400 font-sans font-light text-base md:text-lg tracking-wide max-w-lg mx-auto mb-12">
            Kompetenz, Erfahrung und persönlicher Einsatz —
            <br className="hidden sm:block" /> für Ihr Recht.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/die-kanzlei"
              className="px-8 py-4 bg-brand text-white text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-brand/85 transition-colors duration-300"
            >
              Unsere Kanzlei
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-4 border border-zinc-700 text-zinc-300 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:border-zinc-400 hover:text-zinc-100 transition-colors duration-300"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </motion.div>

      </section>

      {/* ──────────────────────── INTRO ──────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-brand text-xs tracking-[0.3em] uppercase font-sans font-medium mb-6">
              Unsere Kanzlei
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              className="font-serif font-light text-zinc-100 leading-tight mb-8"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Eine Bürogemeinschaft mit
              <br />
              <em className="italic text-zinc-300">Stärke durch Teamwork</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-zinc-400 font-sans font-light text-lg leading-relaxed max-w-2xl mb-4">
              Wir sind eine Bürogemeinschaft von Anwälten mit gemeinsamen Kanzleiräumen
              in der Stadtmitte von Trier. Von dort vertreten wir die Interessen unserer
              Mandantinnen und Mandanten grundsätzlich bundesweit.
            </p>
            <p className="text-zinc-500 font-sans font-light text-base leading-relaxed max-w-2xl">
              Jeder unserer Anwälte betreut seine Mandate eigenverantwortlich und unabhängig —
              gemeinsame Büroorganisation und fachlicher Austausch schaffen dabei Synergien.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="mt-10">
            <Link
              href="/die-kanzlei"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-sans text-zinc-400 hover:text-zinc-100 transition-colors duration-200 group"
            >
              Mehr über uns
              <span className="block h-px bg-zinc-500 group-hover:bg-zinc-100 transition-all duration-300 w-8 group-hover:w-14" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ──────────────────────── ANWÄLTE ──────────────────────── */}
      <section className="py-24 px-6 bg-zinc-900/30 border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16">
            <p className="text-brand text-xs tracking-[0.3em] uppercase font-sans font-medium mb-4">
              Das Team
            </p>
            <h2
              className="font-serif font-light text-zinc-100"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Die Anwälte
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: "Hans-Georg Hornung",
                title: "Rechtsanwalt",
                image: "/hornung.png",
                areas: [
                  "Familienrecht",
                  "Baurecht (privates)",
                  "Strafrecht und Ordnungswidrigkeitenrecht",
                  "Straßenverkehrsrecht",
                  "Versicherungsrecht",
                ],
              },
              {
                name: "Roman Kasel",
                title: "Rechtsanwalt",
                image: "/kasel.png",
                areas: [
                  "Strafrecht und Ordnungswidrigkeitenrecht",
                  "Migrationsrecht",
                  "Mietrecht",
                  "Arbeitsrecht",
                  "Schaden- & Haftpflichtrecht",
                ],
              },
            ].map((lawyer, i) => (
              <AnimatedSection key={lawyer.name} delay={i * 0.15}>
                <Link href="/die-anwaelte" className="group block cursor-pointer">
                  <div className="aspect-[4/5] relative overflow-hidden mb-6 border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-300">
                    <Image
                      src={lawyer.image}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      alt={lawyer.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-1">
                        {lawyer.title}
                      </p>
                      <h3 className="font-serif text-zinc-100 text-2xl font-light">
                        {lawyer.name}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {lawyer.areas.map((area) => (
                      <li key={area} className="flex items-center gap-3 text-zinc-500 text-sm font-sans font-light">
                        <span className="w-1 h-1 bg-brand flex-shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────── KONTAKT CTA ──────────────────────── */}
      <section className="py-24 px-6 bg-zinc-900/30 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <AnimatedSection>
            <p className="text-brand text-xs tracking-[0.3em] uppercase font-sans font-medium mb-3">
              Sprechen Sie uns an
            </p>
            <h2
              className="font-serif font-light text-zinc-100"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
            >
              Wir helfen Ihnen weiter.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="flex-shrink-0">
            <Link
              href="/kontakt"
              className="inline-block px-10 py-5 bg-brand text-white text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-brand/85 transition-colors duration-300"
            >
              Kontakt aufnehmen
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
