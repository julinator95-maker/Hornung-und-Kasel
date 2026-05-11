"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/die-kanzlei", label: "Die Kanzlei" },
  { href: "/die-anwaelte", label: "Die Anwälte" },
  { href: "/kooperationen", label: "Kooperationen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /* Solid bg after 60px scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menu on scroll */
  useEffect(() => {
    const onScroll = () => {
      if (checkboxRef.current?.checked) checkboxRef.current.checked = false;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    if (checkboxRef.current) checkboxRef.current.checked = false;
  };

  return (
    <>
      {/*
        The checkbox MUST be a DOM sibling of <header> and the menu <div>.
        React Fragment renders no wrapper element, so all three end up as
        siblings inside <body>. CSS rule `#nav-toggle:checked ~ header .nav-line-*`
        and Tailwind `peer-checked:flex` both rely on this sibling relationship.
      */}
      <input
        ref={checkboxRef}
        type="checkbox"
        id="nav-toggle"
        className="sr-only peer"
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800"
            : "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 md:bg-transparent md:backdrop-blur-none md:border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 group" onClick={closeMenu}>
            <div className="bg-white px-1 pt-0 pb-1.5 transition-opacity duration-200 group-hover:opacity-85 scale-[0.8] origin-left">
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
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-sans font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-zinc-100"
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/*
            <label> not <button> — clicking it toggles the checkbox above
            without any JavaScript. Hamburger animation via globals.css.
          */}
          <label
            htmlFor="nav-toggle"
            className="md:hidden flex flex-col gap-[5px] p-3 cursor-pointer"
            aria-label="Menü öffnen"
          >
            <span className="nav-line-top block w-6 h-px bg-zinc-100 origin-center transition-transform duration-300" />
            <span className="nav-line-mid block w-6 h-px bg-zinc-100 transition-opacity duration-200" />
            <span className="nav-line-bot block w-6 h-px bg-zinc-100 origin-center transition-transform duration-300" />
          </label>
        </div>
      </header>

      {/*
        `hidden` = display:none by default.
        `peer-checked:flex` = display:flex when the checkbox sibling is checked.
        This works without JS because the `peer` input is a prior DOM sibling.
      */}
      <div
        className="fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-xl
                   hidden peer-checked:flex flex-col items-center justify-center gap-10
                   md:hidden"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-serif text-4xl font-light text-zinc-200 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
