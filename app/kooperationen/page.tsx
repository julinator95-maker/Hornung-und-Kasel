"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function Kooperationen() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-brand text-xs tracking-[0.3em] uppercase font-sans font-medium mb-6">
              Netzwerk
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="font-serif font-light text-zinc-100 leading-[0.88]"
              style={{ fontSize: "clamp(2.5rem, 7vw, 8rem)" }}
            >
              Koopera<em className="italic text-zinc-300">tionen</em>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="font-serif font-light text-zinc-200 text-3xl mb-4">
              Mit wem wir zusammenarbeiten
            </h2>
            <p className="text-zinc-500 font-sans font-light text-base leading-relaxed mb-16">
              Für Mandate in unserem Nachbarland Luxemburg kooperieren wir sowie bei
              Rechtsschutzangelegenheiten mit folgenden Partnern.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {/* Bannasch Avocats */}
            <AnimatedSection delay={0.1}>
              <div className="border border-zinc-800 p-8 hover:border-zinc-600 transition-colors duration-300">
                <p className="text-brand text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
                  Luxemburg
                </p>
                <h3 className="font-serif text-zinc-100 text-2xl font-light mb-6">
                  Bannasch Avocats
                </h3>
                <address className="not-italic text-zinc-400 font-sans font-light text-sm leading-relaxed space-y-1">
                  <p>76 Avenue de la Liberté</p>
                  <p>L-1720 Luxembourg</p>
                  <p className="pt-2">
                    Telefon:{" "}
                    <a
                      href="tel:+35226022251"
                      className="text-zinc-300 hover:text-white transition-colors"
                    >
                      +352 260225 1
                    </a>
                  </p>
                  <p>
                    Fax: +352 260225 30
                  </p>
                  <p className="pt-2">
                    <a
                      href="mailto:info@bannasch.lu"
                      className="text-zinc-300 hover:text-white transition-colors"
                    >
                      info@bannasch.lu
                    </a>
                  </p>
                </address>
              </div>
            </AnimatedSection>

            {/* AdvoCard */}
            <AnimatedSection delay={0.15}>
              <div className="border border-zinc-800 p-8 hover:border-zinc-600 transition-colors duration-300">
                <p className="text-brand text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
                  Rechtsschutzversicherung
                </p>
                <h3 className="font-serif text-zinc-100 text-2xl font-light mb-4">
                  AdvoCard
                </h3>
                <p className="text-zinc-400 font-sans font-light text-sm leading-relaxed mb-4">
                  Wir arbeiten grundsätzlich vertrauensvoll mit allen Rechtsschutzversicherern
                  zusammen. Eine ausdrückliche Kooperationsvereinbarung besteht mit AdvoCard.
                </p>
                <a
                  href="https://www.advocard.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-sans text-zinc-400 hover:text-zinc-100 transition-colors duration-200 group"
                >
                  www.advocard.de
                  <span className="block h-px bg-zinc-500 group-hover:bg-zinc-100 transition-all duration-300 w-8 group-hover:w-14" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
