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
    { city: "Pune", region: "Maharashtra", country: "India", isHQ: false },
    { city: "Delhi", region: "NCR", country: "India", isHQ: false },
    { city: "Bangalore", region: "Karnataka", country: "India", isHQ: false },
  ],
} as const;

export const CERTIFICATIONS = [
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "ISO 9001", description: "Quality Management System" },
  { name: "CMMI Level 3", description: "Capability Maturity Model Integration" },
] as const;
