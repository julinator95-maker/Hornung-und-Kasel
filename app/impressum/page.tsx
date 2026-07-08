import Link from "next/link";

export default function Impressum() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-brand text-xs tracking-[0.3em] uppercase font-sans font-medium mb-6">
          Rechtliches
        </p>
        <h1
          className="font-serif font-light text-zinc-100 leading-tight mb-16"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Impressum
        </h1>

        <div className="space-y-12 text-zinc-400 font-sans font-light text-sm leading-relaxed">

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              Kanzlei
            </h2>
            <p>
              Rechtsanwälte in Bürogemeinschaft Hornung und Kasel<br />
              Walramsneustraße 9<br />
              54290 Trier
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              Rechtsanwälte
            </h2>
            <p>
              Rechtsanwalt Hans-Georg Hornung<br />
              Rechtsanwalt Roman Kasel
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              Kontakt
            </h2>
            <p>
              Telefon: <a href="tel:+4965148055" className="hover:text-zinc-200 transition-colors">+49 651 48055</a><br />
              Fax: +49 651 48057<br />
              E-Mail: <a href="mailto:info@hornung-kasel.de" className="hover:text-zinc-200 transition-colors">info@hornung-kasel.de</a>
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              Umsatzsteuer-Identifikationsnummern
            </h2>
            <p>
              Hornung: DE 317999139<br />
              Kasel: DE 456789369<br />
              Zuständiges Finanzamt: Finanzamt Trier
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              Berufshaftpflichtversicherung
            </h2>
            <p>
              Rechtsanwalt Hans-Georg Hornung unterhält eine Berufshaftpflichtversicherung
              (Geltungsbereich EU) bei der Provinzial Rheinland Versicherung AG.
            </p>
            <p className="mt-3">
              Rechtsanwalt Roman Kasel unterhält eine Berufshaftpflichtversicherung
              (Geltungsbereich EU) bei der Markel Insurance SE.
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              Zuständige Aufsichtsbehörde
            </h2>
            <p>
              Rechtsanwaltskammer für den Oberlandesgerichtsbezirk Koblenz<br />
              Rheinstraße 24<br />
              56068 Koblenz<br />
              Tel.: +49 261 30335 0
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              Berufsrechtliche Regelungen
            </h2>
            <p>
              Bundesrechtsanwaltsordnung (BRAO)<br />
              Berufsordnung für Rechtsanwälte (BORA)<br />
              Fachanwaltsordnung (FAO)<br />
              CCBE-Berufsregeln<br />
              Rechtsanwaltsvergütungsgesetz (RVG)
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-sans text-zinc-500 hover:text-zinc-200 transition-colors duration-200 group"
          >
            Zurück zur Startseite
            <span className="block h-px bg-zinc-600 group-hover:bg-zinc-200 transition-all duration-300 w-8 group-hover:w-14" />
          </Link>
        </div>
      </div>
    </section>
  );
}
