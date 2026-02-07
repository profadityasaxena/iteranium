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
