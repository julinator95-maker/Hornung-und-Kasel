"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function DieKanzlei() {
  return (
    <>
      {/* ── Page header with Ken Burns city image ── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
        {/* Ken Burns via CSS animation — compositor-driven, no JS jank */}
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="/city.png"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
            alt="Trier Stadtmitte"
            priority
          />
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/20" />
        <div className="absolute inset-0 bg-zinc-950/30" />

        {/* Page title overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <AnimatedSection>
            <p className="text-brand text-xs tracking-[0.3em] uppercase font-sans font-medium mb-4">
              Die Kanzlei
            </p>
            <h1
              className="font-serif font-light text-zinc-100 leading-[0.88]"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Über uns &amp;
              <br />
              <em className="italic text-zinc-300">unsere Kanzlei</em>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <h2 className="font-serif font-light text-zinc-200 text-3xl mb-8">
              Bürogemeinschaft in der Stadtmitte Trier
            </h2>
            <div className="space-y-5 text-zinc-400 font-sans font-light text-base leading-relaxed">
              <p>
                Wir sind eine Bürogemeinschaft von Anwälten mit gemeinsamen Kanzleiräumen
                in der Stadtmitte von Trier. Von dort vertreten wir die Interessen unserer
                Mandantinnen und Mandanten grundsätzlich bundesweit.
              </p>
              <p>
                Jeder unserer Anwälte betreut dabei seine Mandate eigenverantwortlich und
                unabhängig. Eine gemeinsame Büroorganisation, regelmäßiger fachlicher
                Austausch und die Möglichkeit, sich im Verhinderungsfall gegenseitig zu
                vertreten, schaffen dabei Synergien und runden unsere Zusammenarbeit ab.
              </p>
              <p>
                An wen Sie sich wenden wollen, entscheiden Sie selbst. Hierbei können Sie
                sich an den inhaltlichen Schwerpunkten orientieren, die sich die Anwälte
                für ihre Arbeit gesetzt haben. Sprechen Sie uns einfach an — unser Personal
                wird Ihnen gerne weiter helfen.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="space-y-8">
              <div className="border-l-2 border-brand pl-6">
                <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-2">
                  Standort
                </p>
                <p className="text-zinc-200 font-sans font-light text-sm leading-relaxed">
                  Walramsneustraße 9 · D-54290 Trier
                  <br />
                  Stadtmitte — in unmittelbarer Nähe zum
                  <br />
                  Amts- und Landgericht
                </p>
              </div>
              <div className="border-l-2 border-brand pl-6">
                <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-2">
                  Bürozeiten
                </p>
                <p className="text-zinc-200 font-sans font-light text-sm leading-relaxed">
                  Montag bis Freitag
                  <br />
                  08:00 – 13:00 Uhr und 14:00 – 17:30 Uhr
                  <br />
                  <span className="text-zinc-500">
                    Termine nach vorheriger Vereinbarung
                  </span>
                </p>
              </div>
              <div className="border-l-2 border-brand pl-6">
                <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-2">
                  Parkplätze
                </p>
                <p className="text-zinc-200 font-sans font-light text-sm">
                  Parkhäuser „Hauptmarkt" und „City" in der Nähe
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <AnimatedSection>
            <h2 className="font-serif font-light text-zinc-100 text-3xl">
              Lernen Sie unsere Anwälte kennen.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="/die-anwaelte"
              className="inline-block px-8 py-4 border border-zinc-700 text-zinc-300 text-xs tracking-[0.2em] uppercase font-sans hover:border-zinc-400 hover:text-zinc-100 transition-colors duration-300"
            >
              Die Anwälte
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
