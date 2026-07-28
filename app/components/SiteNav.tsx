"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const NAV_LINKS = [
  { href: "/cast-crew", label: "Cast & Crew" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "About" },
  {
    href: "https://tickets.atxtheatre.org/organizations/the-zahir",
    label: "Tickets",
    external: true,
  },
] as const;

const linkClassName =
  "text-white hover:text-amber-400 transition-colors duration-200";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-950 backdrop-blur-sm border-b border-gray-800">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="nav-logo-wrapper">
            <Link href="/" className="block" onClick={() => setOpen(false)}>
              <Image
                src="/img/oversight-logo2.svg"
                alt="Oversight"
                width={140}
                height={40}
                priority
                className="h-[3.125rem] w-auto nav-logo-img"
              />
            </Link>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-white hover:text-amber-400 transition-colors duration-200 md:hidden"
            aria-controls={menuId}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id={menuId}
          inert={!open ? true : undefined}
          aria-hidden={!open}
          className={`md:hidden overflow-hidden border-t border-gray-800 transition-[max-height,opacity] duration-200 ease-out ${
            open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-t-0"
          }`}
        >
          <div className="flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClassName} px-1 py-2`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${linkClassName} px-1 py-2`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
