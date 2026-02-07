"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NavLink } from "./NavLink";
import { mainNavigation } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        isMobileOpen
          ? "bg-white shadow-lg shadow-slate-900/5"
          : isScrolled
            ? "bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "bg-white/60 backdrop-blur-sm"
      )}
    >
      {/* Gradient accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <Container>
        <div className="flex h-18 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Iteranium"
              width={260}
              height={65}
              className="h-12 w-auto lg:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {mainNavigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="nav-link flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-primary-500">
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <>
                      <div className="absolute top-full left-0 h-3 w-64" />
                      <div className="absolute top-full left-0 mt-3 w-64 rounded-xl border border-slate-100 bg-white/95 p-2 shadow-xl shadow-slate-900/10 backdrop-blur-lg">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg px-4 py-3 text-sm text-slate-600 transition-all hover:bg-primary-50/80 hover:text-primary-600 hover:pl-5"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-primary-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/40 hover:brightness-110"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-slate-100 lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5 text-slate-700" />
            ) : (
              <Menu className="h-5 w-5 text-slate-700" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="fixed inset-0 top-[74px] z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {mainNavigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-primary-50 hover:text-primary-600"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2 text-sm text-slate-500 transition-colors hover:bg-primary-50 hover:text-primary-600"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Link
                href="/contact"
                className="block w-full rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-6 py-3 text-center text-base font-medium text-white shadow-md shadow-primary-500/25"
                onClick={() => setIsMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
