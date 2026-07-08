import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo + Tagline */}
          <div>
            <div className="inline-block bg-white px-1 pt-0 pb-1.5 mb-6">
              <div className="bg-brand px-2.5 pt-1.5 pb-1.5">
                <p className="text-white font-sans font-bold text-sm tracking-[0.12em] uppercase leading-tight">
                  Hornung &amp; Kasel
                </p>
              </div>
              <div className="px-1 pt-1">
                <p className="text-zinc-800 font-sans text-[0.5rem] tracking-[0.16em] uppercase leading-tight">
                  Rechtsanwälte in Bürogemeinschaft
                </p>
              </div>
            </div>
            <p className="text-zinc-500 text-sm font-sans leading-relaxed">
              Rechtsanwälte in Bürogemeinschaft<br />
              Stadtmitte Trier
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-zinc-500 text-xs tracking-[0.25em] uppercase font-sans mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/die-kanzlei", label: "Die Kanzlei" },
                { href: "/die-anwaelte", label: "Die Anwälte" },
                { href: "/kooperationen", label: "Kooperationen" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-zinc-200 text-sm font-sans transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-zinc-500 text-xs tracking-[0.25em] uppercase font-sans mb-5">
              Kontakt
            </h4>
            <address className="not-italic text-zinc-500 text-sm font-sans leading-relaxed">
              Walramsneustraße 9<br />
              D-54290 Trier<br /><br />
              <a
                href="tel:+4965148055"
                className="hover:text-zinc-300 transition-colors duration-200"
              >
                +49 651 48055
              </a>
              <br />
              <a
                href="mailto:info@hornung-kasel.de"
                className="hover:text-zinc-300 transition-colors duration-200"
              >
                info@hornung-kasel.de
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-xs font-sans">
          <p>© {new Date().getFullYear()} Hornung & Kasel. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-zinc-400 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-zinc-400 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
