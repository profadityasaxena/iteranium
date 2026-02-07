import type { NavItem } from "@/types/navigation";

export const mainNavigation: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Iteranium", href: "/about" },
      { label: "Team", href: "/about/team" },
      { label: "Careers", href: "/careers" },
    ],
  },
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
  { label: "Insights", href: "/insights" },
];
