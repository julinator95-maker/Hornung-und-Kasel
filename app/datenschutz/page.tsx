import Link from "next/link";

export default function Datenschutz() {
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
          Datenschutz&shy;hinweis
        </h1>

        <div className="space-y-12 text-zinc-400 font-sans font-light text-sm leading-relaxed">

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              1. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website sind:
            </p>
            <p className="mt-3">
              Rechtsanwalt Hans-Georg Hornung und Rechtsanwalt Roman Kasel<br />
              Walramsneustraße 9 · 54290 Trier<br />
              Tel.: +49 651 480 55 · E-Mail: info@hornung-kasel.de
            </p>
            <p className="mt-3">
              Die Kanzlei ist gemäß § 38 BDSG nicht zur Benennung eines Datenschutzbeauftragten
              verpflichtet, da weniger als zehn Personen mit automatisierter Datenverarbeitung
              beschäftigt sind.
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              2. Datenerfassung beim Website-Besuch
            </h2>
            <p>
              Bei rein informatorischer Nutzung dieser Website werden automatisch technisch
              notwendige Daten in sogenannten Server-Logfiles erfasst. Dazu gehören:
            </p>
            <ul className="mt-3 space-y-1 list-none">
              {[
                "Datum und Uhrzeit des Zugriffs",
                "Browsertyp und -version",
                "Verwendetes Betriebssystem",
                "IP-Adresse des anfragenden Geräts",
                "Referrer-URL (zuvor besuchte Seite)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-brand flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur
              Sicherstellung der technischen Funktionsfähigkeit der Website. Die Logfiles
              werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              3. Cookies
            </h2>
            <p>
              Diese Website setzt keine Tracking- oder Analyse-Cookies ein. Es werden
              ausschließlich technisch notwendige Sitzungsdaten verwendet, die nach dem
              Schließen des Browsers automatisch gelöscht werden. Eine Einwilligung
              ist hierfür nicht erforderlich.
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              4. Kontaktaufnahme per E-Mail
            </h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre übermittelten Daten
              (Name, E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Beantwortung von Anfragen).
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              5. Datenweitergabe
            </h2>
            <p>
              Personenbezogene Daten werden nur bei ausdrücklicher Einwilligung,
              gesetzlicher Verpflichtung oder zur Vertragserfüllung an Dritte übermittelt.
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              6. Ihre Rechte
            </h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="mt-3 space-y-1 list-none">
              {[
                "Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)",
                "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
                "Löschung Ihrer Daten (Art. 17 DSGVO)",
                "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
                "Beschwerde bei der zuständigen Aufsichtsbehörde",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-brand flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Zuständige Aufsichtsbehörde: Der Landesbeauftragte für den Datenschutz
              und die Informationsfreiheit Rheinland-Pfalz.
            </p>
          </div>

          <div>
            <h2 className="text-zinc-200 text-xs tracking-[0.2em] uppercase font-sans font-medium mb-4">
              7. Sicherheit
            </h2>
            <p>
              Diese Website verwendet eine verschlüsselte Übertragung (HTTPS/TLS).
              Wir treffen technische und organisatorische Maßnahmen zum Schutz
              Ihrer Daten gegen unbefugten Zugriff, Verlust oder Missbrauch.
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
