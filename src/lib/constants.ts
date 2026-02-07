export const SITE_CONFIG = {
  name: "Iteranium",
  tagline: "Full-Stack Industry 4.0 Transformation",
  description:
    "We help discrete manufacturers modernize and optimize operations through full-stack Industry 4.0 transformation. Our solutions combine IIoT, MES, and reinforcement-learning-driven AI that learns from live shop-floor data to improve scheduling, reduce downtime, and maximize throughput.",
  url: "https://iteranium.com",
  email: "info@iteranium.com",
  phone: "+1 (437) 848-9595",
  offices: [
    { city: "Toronto", region: "Ontario", country: "Canada", isHQ: true },
  ],
} as const;

export const PROCESS_STANDARDS = [
  {
    name: "Information Security",
    description:
      "Rigorous data protection and security practices aligned with enterprise information security management principles",
  },
  {
    name: "Quality Management",
    description:
      "Structured quality processes with risk-based thinking and continuous improvement across every project lifecycle",
  },
  {
    name: "Process Maturity",
    description:
      "Defined, repeatable, and auditable engineering workflows designed around recognized process maturity frameworks",
  },
] as const;
