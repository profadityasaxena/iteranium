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
  deliveryRoadmap: [
    {
      title: "Walk the Floor & Understand the Current State",
      description:
        "We begin on the shop floor — talking to operators, observing workflows, and mapping the existing systems landscape. This means documenting every PLC, SCADA node, historian, MES screen, and manual workaround. We identify where data lives, where it doesn't, and where decisions are being made on gut feel instead of evidence.",
    },
    {
      title: "Define Where You Need to Be and Why",
      description:
        "Working with your leadership and plant teams, we define a realistic target state — not a vendor brochure, but a picture of what your operations look like when key pain points are resolved. We map each gap to a business outcome: downtime reduction, quality improvement, faster changeovers, better visibility.",
    },
    {
      title: "Build the Transformation Roadmap in Phases",
      description:
        "We design a phased execution plan where every phase delivers measurable value on its own. No big-bang cutovers. Each phase is scoped, costed, and risk-assessed — with clear acceptance criteria so you know exactly what 'done' looks like before work begins.",
    },
    {
      title: "Modernize Incrementally Without Disrupting Production",
      description:
        "Legacy systems are migrated piece by piece — bridging old PLCs to modern data layers, replacing paper-based processes with digital workflows, and connecting siloed systems into a unified architecture. Production never stops; each change is validated in the live environment before moving forward.",
    },
    {
      title: "Train Your Team and Transfer Ownership",
      description:
        "Technology is only useful if your people can operate it. We run structured knowledge transfer sessions with operators, engineers, and IT staff — building internal capability so your team owns the new systems, not us. Documentation, runbooks, and escalation paths are all part of the handover.",
    },
    {
      title: "Measure, Learn, and Refine Continuously",
      description:
        "After go-live, we track KPIs against the baseline we established in step one. Where outcomes fall short, we investigate and adjust. Where they exceed expectations, we capture what worked and apply it to the next phase. The roadmap evolves with your operation.",
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
