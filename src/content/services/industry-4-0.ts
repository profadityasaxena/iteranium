import type { Service } from "@/types/content";

export const industry4Solutions: Service = {
  slug: "industry-4-0",
  title: "Industry 4.0 Solutions",
  shortDescription:
    "Smart factory systems, IIoT integration, and manufacturing execution platforms that connect your entire operation.",
  longDescription:
    "We design and deploy the full Industry 4.0 technology stack—from edge sensors on the shop floor to cloud analytics dashboards in the boardroom. Our solutions are purpose-built for discrete manufacturing environments where uptime, throughput, and quality are non-negotiable. We integrate IIoT, MES, and real-time monitoring into cohesive systems that give you complete visibility and control.",
  icon: "Factory",
  features: [
    {
      title: "IIoT Platform Deployment",
      description:
        "Design and deploy Industrial IoT infrastructure—edge gateways, sensor networks, and connectivity layers (OPC-UA, MQTT, Modbus) that capture real-time data from every machine.",
    },
    {
      title: "Manufacturing Execution Systems",
      description:
        "Implement and customize MES platforms that track work orders, manage recipes, enforce quality checks, and provide real-time production visibility.",
    },
    {
      title: "Real-Time Monitoring & Dashboards",
      description:
        "Build operator dashboards, andon systems, and executive views that surface the right information to the right people at the right time.",
    },
    {
      title: "Digital Twin & Simulation",
      description:
        "Create digital replicas of production lines for scenario planning, bottleneck analysis, and predictive what-if modeling before making physical changes.",
    },
  ],
  deliveryRoadmap: [
    {
      title: "Audit Every Machine, Sensor, and Data Path",
      description:
        "We start by physically mapping your shop floor — every PLC, sensor, controller, historian, and manual log. We document what's connected, what's isolated, what data is being captured, and what's falling through the cracks. This isn't a questionnaire — it's boots on the ground, tracing cables and reading registers.",
    },
    {
      title: "Design the Connectivity and Data Architecture",
      description:
        "Based on what we find, we design the integration architecture — which protocols to use, where edge gateways go, how data flows from machines to the platform, and how it gets structured for real-time consumption. Network segmentation, data retention policies, and failover strategies are all defined before any hardware is installed.",
    },
    {
      title: "Deploy Edge Infrastructure and Connect the Floor",
      description:
        "Gateways, sensors, and connectivity layers are installed and commissioned machine by machine. Each connection is tested against live production data — verifying signal accuracy, latency, and reliability. We don't move to the next machine until the current one is producing clean, trustworthy data.",
    },
    {
      title: "Build the Execution and Monitoring Layer",
      description:
        "With data flowing, we configure the MES, dashboards, and alerting systems that turn raw signals into operational intelligence. Work order tracking, OEE calculations, quality enforcement, and real-time andon boards are built to match how your operators and supervisors actually work — not how a software manual says they should.",
    },
    {
      title: "Commission, Stress-Test, and Validate in Production",
      description:
        "Every system is tested under real production conditions — shift changes, peak loads, equipment faults, network interruptions. We run parallel operations where needed, comparing new system outputs against known-good data until confidence is established. Nothing goes live until it's proven.",
    },
    {
      title: "Hand Over, Support, and Expand to the Next Line",
      description:
        "Operators and maintenance teams are trained on the live system. We hand over documentation, troubleshooting guides, and escalation procedures. Then we take what we've learned — the integration patterns, the configuration templates, the lessons — and use them to accelerate deployment on the next line or facility.",
    },
  ],
  technologies: [
    "MQTT",
    "OPC-UA",
    "Modbus",
    "Kafka",
    "InfluxDB",
    "Grafana",
    "Ignition SCADA",
    "Kepware",
  ],
  benefits: [
    { metric: "99.5%", description: "system uptime for critical operations" },
    { metric: "30%", description: "increase in production throughput" },
    { metric: "50%", description: "reduction in manual data entry" },
  ],
};
