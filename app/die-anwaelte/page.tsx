"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const lawyers = [
  {
    name: "Hans-Georg Hornung",
    title: "Rechtsanwalt",
    image: "/hornung.png",
    email: "info@hornung-kasel.de",
    areas: [
      "Arztrecht und Arzthaftungsrecht",
      "Baurecht (privates)",
      "Familienrecht",
      "Forderungsmanagement / Inkasso",
      "Strafrecht und Ordnungswidrigkeitenrecht",
      "Straßenverkehrsrecht",
      "Versicherungsrecht",
    ],
    languages: ["Englisch", "Französisch"],
    bio: "Hans-Georg Hornung studierte Rechtswissenschaften an den Universitäten Saarbrücken und Bonn. Seit 1976 ist er in Trier als Rechtsanwalt, vor allem auf den Gebieten des privaten Baurechts und des Familienrechts, tätig. Hans-Georg Hornung ist Mitglied der Arbeitsgemeinschaften des Deutschen Anwaltvereins für Familienrecht, Verkehrsrecht und Baurecht.",
  },
  {
    name: "Roman Kasel",
    title: "Rechtsanwalt",
    image: "/kasel.png",
    email: "info@hornung-kasel.de",
    areas: [
      "Strafrecht und Ordnungswidrigkeitenrecht",
      "Mietrecht",
      "Schaden- und Haftpflichtrecht",
      "Forderungsmanagement / Inkasso",
      "Arbeitsrecht",
      "Vertragsrecht",
      "Migrationsrecht",
    ],
    languages: ["Englisch", "Französisch"],
    bio: "Roman Kasel studierte Rechtswissenschaften an den Universitäten Trier und Göttingen. Während seiner Ausbildung im Referendariat erhielt er eine vertiefte Wahlfachausbildung im Straf-, Strafprozess- und im Jugendstrafrecht. Als Rechtsanwalt ist Roman Kasel vor allem auf den Gebieten des Strafrechts, Migrationsrechts und allgemeinen Zivilrechts tätig.",
  },
];

export default function DieAnwaelte() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-brand text-xs tracking-[0.3em] uppercase font-sans font-medium mb-6">
              Das Team
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="font-serif font-light text-zinc-100 leading-[0.88]"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              Die
              <br />
              <em className="italic text-zinc-300">Anwälte</em>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Lawyers ── */}
      <section className="py-16 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto space-y-32">
          {lawyers.map((lawyer, i) => (
            <AnimatedSection key={lawyer.name} delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Portrait */}
                <div
                  className={`aspect-[3/4] relative overflow-hidden border border-zinc-800 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={lawyer.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                    alt={lawyer.name}
                  />
                  {/* Subtle bottom gradient so name overlay reads cleanly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-2">
                    {lawyer.title}
                  </p>
                  <h2 className="font-serif text-zinc-100 text-4xl font-light mb-8">
                    {lawyer.name}
                  </h2>

                  <p className="text-zinc-400 font-sans font-light text-base leading-relaxed mb-10">
                    {lawyer.bio}
                  </p>

                  {/* Tätigkeitsgebiete */}
                  <div className="mb-8">
                    <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-4">
                      Tätigkeitsgebiete
                    </p>
                    <ul className="space-y-2.5">
                      {lawyer.areas.map((area) => (
                        <li
                          key={area}
                          className="flex items-center gap-3 text-zinc-300 text-sm font-sans font-light"
                        >
                          <span className="w-1 h-1 bg-brand flex-shrink-0" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Languages */}
                  <div className="mb-10">
                    <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase font-sans mb-4">
                      Fremdsprachen
                    </p>
                    <div className="flex gap-3">
                      {lawyer.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-3 py-1 border border-zinc-700 text-zinc-400 text-xs font-sans tracking-wide"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`mailto:${lawyer.email}`}
                    className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-sans text-zinc-400 hover:text-zinc-100 transition-colors duration-200 group"
                  >
                    Kontakt aufnehmen
                    <span className="block h-px bg-zinc-500 group-hover:bg-zinc-100 transition-all duration-300 w-8 group-hover:w-14" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Porta Nigra Quote ── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Panoramic fly-through animation */}
        <div className="absolute inset-0 animate-portapan">
          <Image
            src="/porta2.png"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
            alt="Porta Nigra Trier"
          />
        </div>

        {/* Dark overlay so quote is readable */}
        <div className="absolute inset-0 bg-zinc-950/65" />

        {/* Vignette — darkens edges, draws focus to center */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(9,9,11,0.7) 100%)" }}
        />

        {/* Quote centered over the image */}
        <AnimatedSection className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <div className="w-8 h-px bg-brand mx-auto mb-10" />
          <blockquote className="max-w-3xl">
            <p
              className="font-serif font-light italic text-zinc-100 leading-tight mb-8"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)" }}
            >
              „Es hilft nichts, das Recht auf seiner Seite zu haben.
              Man muss auch mit der Justiz rechnen."
            </p>
            <cite className="text-zinc-400 text-xs tracking-[0.3em] uppercase font-sans not-italic">
              Dieter Hildebrandt
            </cite>
          </blockquote>
        </AnimatedSection>
      </section>
    </>
  );
}
