import type { NavItem } from "@/types/navigation";

export const mainNavigation: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
      },
      { label: "Industry 4.0 Solutions", href: "/services/industry-4-0" },
      {
        label: "AI & Intelligent Systems",
        href: "/services/ai-intelligent-systems",
      },
    ],
  },
  { label: "Training & Incubation", href: "/training" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];
