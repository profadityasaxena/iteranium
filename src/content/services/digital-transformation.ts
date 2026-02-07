import type { Service } from "@/types/content";

export const digitalTransformation: Service = {
  slug: "digital-transformation",
  title: "Digital Transformation",
  shortDescription:
    "Strategic roadmapping, legacy system modernization, and enterprise architecture for manufacturers ready to evolve.",
  longDescription:
    "We partner with discrete manufacturers to chart a pragmatic path from legacy systems to modern, data-driven operations. Our approach is grounded in manufacturing reality—not abstract digital strategy. We assess your current operational maturity, identify high-impact transformation opportunities, and build a phased execution plan that delivers value at each stage.",
  icon: "ArrowUpRight",
  features: [
    {
      title: "Strategic Roadmapping",
      description:
        "Assess current maturity, define target state, and build a phased execution plan aligned to business outcomes and operational KPIs.",
    },
    {
      title: "Legacy System Modernization",
      description:
        "Migrate from monolithic on-premise systems to cloud-native architectures without disrupting production. Bridge legacy PLCs and SCADA to modern data platforms.",
    },
    {
      title: "Enterprise Architecture",
      description:
        "Design scalable, secure architectures that connect shop floor to top floor—integrating ERP, MES, SCADA, and business intelligence layers.",
    },
    {
      title: "Change Management",
      description:
        "Align people, processes, and technology. We work with plant managers and operators to ensure adoption and sustained value realization.",
    },
  ],
  technologies: [
    "Azure IoT Hub",
    "AWS Industrial",
    "SAP Integration",
    "OSIsoft PI",
    "OPC-UA",
    "MQTT",
  ],
  benefits: [
    { metric: "40%", description: "reduction in unplanned downtime" },
    { metric: "25%", description: "improvement in OEE" },
    { metric: "60%", description: "faster time-to-insight from production data" },
  ],
};
