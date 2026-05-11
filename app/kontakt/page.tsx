"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Kontakt() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    /* TODO: wire up to email service (e.g. Resend, Formspree) */
    setSent(true);
  }

  return (
    <>
      {/* ── Page header ── */}
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-brand text-xs tracking-[0.3em] uppercase font-sans font-medium mb-6">
              Kontakt
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="font-serif font-light text-zinc-100 leading-[0.88]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              Sprechen Sie<br />
              <em className="italic text-zinc-300">uns an</em>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-16 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact info */}
          <AnimatedSection>
            <div className="space-y-10">
              {/* Hornung */}
              <div>
                <p className="text-brand text-xs tracking-[0.2em] uppercase font-sans mb-3">
                  Rechtsanwalt
                </p>
                <h3 className="font-serif text-zinc-100 text-xl font-light mb-4">
                  Hans-Georg Hornung
                </h3>
                <address className="not-italic text-zinc-400 font-sans font-light text-sm leading-relaxed space-y-1">
                  <p>Walramsneustraße 9 · D-54290 Trier</p>
                  <p>
                    Tel:{" "}
                    <a href="tel:+4965148057" className="text-zinc-300 hover:text-white transition-colors">
                      +49 651 48057
                    </a>
                  </p>
                  <p>Fax: +49 651 48055</p>
                  <p>
                    <a
                      href="mailto:info@hornung-kasel.de"
                      className="text-zinc-300 hover:text-white transition-colors"
                    >
                      info@hornung-kasel.de
                    </a>
                  </p>
                </address>
              </div>

              <div className="w-full h-px bg-zinc-800" />

              {/* Kasel */}
              <div>
                <p className="text-brand text-xs tracking-[0.2em] uppercase font-sans mb-3">
                  Rechtsanwalt
                </p>
                <h3 className="font-serif text-zinc-100 text-xl font-light mb-4">
                  Roman Kasel
                </h3>
                <address className="not-italic text-zinc-400 font-sans font-light text-sm leading-relaxed space-y-1">
                  <p>Walramsneustraße 9 · D-54290 Trier</p>
                  <p>
                    Tel:{" "}
                    <a href="tel:+4916083408 10" className="text-zinc-300 hover:text-white transition-colors">
                      +49 160 8340810
                    </a>
                  </p>
                  <p>Fax: +49 651 48057</p>
                  <p>
                    <a
                      href="mailto:info@hornung-kasel.de"
                      className="text-zinc-300 hover:text-white transition-colors"
                    >
                      info@hornung-kasel.de
                    </a>
                  </p>
                </address>
              </div>

              <div className="w-full h-px bg-zinc-800" />

              {/* Office hours */}
              <div>
                <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-3">
                  Bürozeiten
                </p>
                <p className="text-zinc-400 font-sans font-light text-sm leading-relaxed">
                  Montag bis Freitag:<br />
                  08:00 – 13:00 Uhr und 14:00 – 17:30 Uhr<br />
                  <span className="text-zinc-600">Termine nach vorheriger Vereinbarung</span>
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.15}>
            {sent ? (
              <div className="border border-zinc-800 p-10 text-center">
                <div className="w-8 h-px bg-brand mx-auto mb-8" />
                <h3 className="font-serif text-zinc-100 text-2xl font-light mb-3">
                  Vielen Dank.
                </h3>
                <p className="text-zinc-400 font-sans font-light text-sm">
                  Ihre Nachricht wurde übermittelt. Wir melden uns in Kürze.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-2">
                    Ihr Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 font-sans font-light text-sm px-4 py-3 focus:outline-none focus:border-brand transition-colors duration-200 placeholder:text-zinc-600"
                    placeholder="Vollständiger Name"
                  />
                </div>
                <div>
                  <label className="block text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 font-sans font-light text-sm px-4 py-3 focus:outline-none focus:border-brand transition-colors duration-200 placeholder:text-zinc-600"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="block text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-2">
                    Betreff
                  </label>
                  <input
                    type="text"
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 font-sans font-light text-sm px-4 py-3 focus:outline-none focus:border-brand transition-colors duration-200 placeholder:text-zinc-600"
                    placeholder="Wie können wir helfen?"
                  />
                </div>
                <div>
                  <label className="block text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-2">
                    Nachricht
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 font-sans font-light text-sm px-4 py-3 focus:outline-none focus:border-brand transition-colors duration-200 placeholder:text-zinc-600 resize-none"
                    placeholder="Ihre Nachricht..."
                  />
                </div>
                <p className="text-zinc-600 text-xs font-sans leading-relaxed">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß
                  unserer Datenschutzerklärung zu.
                </p>
                <button
                  type="submit"
                  className="w-full py-4 bg-brand text-white text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-brand/85 transition-colors duration-300 cursor-pointer"
                >
                  Nachricht senden
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
