export const SITE_CONFIG = {
  name: "Iteranium",
  tagline: "Full-Stack Industry 4.0 Transformation",
  description:
    "We help discrete manufacturers modernize and optimize operations through full-stack Industry 4.0 transformation. Our solutions combine IIoT, MES, and reinforcement-learning-driven AI that learns from live shop-floor data to improve scheduling, reduce downtime, and maximize throughput.",
  url: "https://iteranium.com",
  email: "info@iteranium.com",
  offices: [
    { city: "Toronto", region: "Ontario", country: "Canada", isHQ: true },
  ],
} as const;

export const PROCESS_STANDARDS = [
  {
    name: "Information Security",
    description:
      "Rigorous data protection, access controls, and risk management aligned with enterprise-grade information security management principles",
  },
  {
    name: "Quality Management",
    description:
      "Structured documentation, risk-based thinking, and continuous improvement embedded across every project lifecycle and engagement",
  },
  {
    name: "Process Maturity",
    description:
      "Defined, repeatable, and measured engineering workflows with consistent delivery standards and auditable governance",
  },
] as const;
