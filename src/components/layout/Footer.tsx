import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG, CERTIFICATIONS } from "@/lib/constants";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Digital Transformation", href: "/services/digital-transformation" },
    { label: "Industry 4.0 Solutions", href: "/services/industry-4-0" },
    { label: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" },
    { label: "Training & Incubation", href: "/training" },
  ],
  resources: [
    { label: "Insights", href: "/insights" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Industries", href: "/industries" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Iteranium"
                width={200}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Full-stack Industry 4.0 transformation for discrete manufacturers.
              Headquartered in Ontario, Canada.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="rounded-lg bg-white/95 p-2">
                <Image
                  src="/images/canada.png"
                  alt="Canada"
                  width={120}
                  height={120}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="rounded-lg bg-white/95 p-2">
                <Image
                  src="/images/ontario.png"
                  alt="Ontario"
                  width={120}
                  height={120}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <span className="text-xs text-slate-500">Ontario, Canada</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert.name}
                  className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-400"
                >
                  {cert.name}
                </span>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-6 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
